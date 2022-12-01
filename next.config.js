/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.TISTORY_ACCESS_TOKEN,
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;
