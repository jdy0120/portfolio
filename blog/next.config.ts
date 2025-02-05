/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "./src/shared/libs/i18n/request.ts"
);

import dotenv from "dotenv";

dotenv.config({
  path: `./envs/.env.${process.env.NODE_ENV}`,
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    MODE: process.env.MODE,
  },
  webpack: (config: import("webpack").Configuration) => {
    (config.module = config.module || {}).rules =
      config.module?.rules || [];
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
