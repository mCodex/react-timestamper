const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        scope: '/react-timestamper',
        subdomainPrefix: '/react-timestamper',
      },
    },
  ],
  {
    basePath: '/react-timestamper',
    assetPrefix: '/react-timestamper/',
  },
]);
