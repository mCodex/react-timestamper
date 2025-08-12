// Basic, scope-aware service worker tuned for GitHub Pages subpath deployments
// Scope is derived from where this file is hosted, e.g. /react-timestamper/
const SCOPE = self.registration.scope.replace(self.location.origin, '');
const CACHE_NAME = 'react-timestamper-v2';

// Precache core shell assets. Avoid hashed assets to reduce churn.
const urlsToCache = [
  SCOPE,
  SCOPE + 'index.html',
  SCOPE + 'manifest.json',
  SCOPE + 'favicon.ico',
  SCOPE + 'icon-192.png',
  SCOPE + 'icon-512.png',
];

self.addEventListener('install', (event) => {
  async function precacheSafely() {
    const cache = await caches.open(CACHE_NAME);
    // Try each asset individually so missing assets (e.g., index.html in dev) don't fail the whole install
    await Promise.allSettled(
      urlsToCache.map(async (url) => {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (res && res.ok) {
            await cache.put(url, res.clone());
          } else {
            // no-op if not ok (likely 404 in dev for index.html)
          }
  } catch {
          // ignore fetch errors so install can complete
        }
      })
    );
  }
  event.waitUntil(precacheSafely());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return; // passthrough non-GET

  const url = new URL(request.url);
  // Only handle same-origin requests within our scope
  const inScope = url.origin === self.location.origin && url.pathname.startsWith(SCOPE);
  if (!inScope) return;

  // Navigation requests: network-first, fallback to cached index when offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match(SCOPE + 'index.html').then((res) => res || caches.match(SCOPE)))
    );
    return;
  }

  // Static assets: stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
