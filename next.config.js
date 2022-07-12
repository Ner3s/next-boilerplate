/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});

module.exports = nextConfig;
