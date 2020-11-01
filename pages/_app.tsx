import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import GloalStyle from '../src/styles/global';

import { pageview } from '../src/services/ga';

Router.events.on(
  'routeChangeComplete',
  (url) => process.env.NODE_ENV === 'production' && pageview(url),
);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Timestamper</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#3C3845" />

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-2048-2732.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-1668-2388.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-1668-2224.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-1536-2048.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-1242-2688.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-1125-2436.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-828-1792.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-1242-2208.png"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-750-1334.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="/assets/apple-splash-640-1136.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-icon-180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/assets/apple-icon-167.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/apple-icon-152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/apple-icon-120.png"
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
    <GloalStyle />
  </>
);

export default MyApp;
