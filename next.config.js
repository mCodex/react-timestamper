/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = {
  output: 'public',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: '/react-timestamper',
};

module.exports = withPWA({
  dest: 'public',
});
