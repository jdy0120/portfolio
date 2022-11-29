/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.TISTORY_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
