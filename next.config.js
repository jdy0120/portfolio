/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_TISTORY_ACCESSTOKEN:
      process.env.NEXT_PUBLIC_TISTORY_ACCESSTOKEN,
    NEXT_PUBLIC_YOUTUBE_ACCESSTOKEN:
      process.env.NEXT_PUBLIC_YOUTUBE_ACCESSTOKEN,
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;
