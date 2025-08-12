export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-6 mt-8 border-t border-base-200">
      <aside className="max-w-4xl">
        <p>
          Built with <span className="text-orange-500">DaisyUI</span> + Next.js 15 • Open Source ♥️ • Made for developers who live in
          <span className="mx-1">⏱️</span> time.
        </p>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="https://github.com/mCodex/react-timestamper" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link link-hover" href="https://daisyui.com" target="_blank" rel="noreferrer">
            DaisyUI
          </a>
          <a className="link link-hover" href="https://nextjs.org" target="_blank" rel="noreferrer">
            Next.js
          </a>
        </nav>
      </aside>
    </footer>
  );
}
