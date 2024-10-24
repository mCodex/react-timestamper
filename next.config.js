/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  output: 'export',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
  },
  basePath: '/react-timestamper',
});
