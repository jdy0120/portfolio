/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

import dotenv from "dotenv";

dotenv.config({
  path: `./envs/.env.${process.env.NODE_ENV}`,
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    MODE: process.env.MODE,
  },
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
