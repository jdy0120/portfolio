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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
