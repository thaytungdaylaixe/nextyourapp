/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL_DEV: "http://localhost:3000",
    BASE_URL_PROD: " https://allapp.vercel.app/",
  },
});

module.exports = nextConfig;
