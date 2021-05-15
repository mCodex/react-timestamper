const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        scope: '/react-timestamper',
      },
    },
  ],
  {
    basePath: '/react-timestamper',
    assetPrefix: isProd ? 'https://mcodex.dev/react-timestamper' : '',
    future: {
      webpack5: true,
    },
  },
]);
