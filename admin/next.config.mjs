/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

import dotenv from "dotenv";

dotenv.config({
  path: `./envs/.env.${process.env.NODE_ENV}`,
});

const nextConfig = {
  reactStrictMode: false,
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
  plugins: ["@emotion/babel-plugin"],
};

export default withNextIntl(nextConfig);
