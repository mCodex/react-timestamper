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
  },
  basePath: '/react-timestamper',
});
