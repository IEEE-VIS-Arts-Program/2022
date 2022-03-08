const debug = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/visap2022/' : '',
}

module.exports = nextConfig
