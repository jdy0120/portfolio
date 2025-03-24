/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/shared/libs/i18n/request.ts");

import dotenv from "dotenv";

dotenv.config({
  path: `./envs/.env.${process.env.NODE_ENV}`,
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  reactStrictMode: true,
  env: {
    MODE: process.env.MODE,
  },
  webpack: (config: import("webpack").Configuration) => {
    (config.module = config.module || {}).rules = config.module?.rules || [];
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: true,
    },
  ],
};

export default withNextIntl(nextConfig);
