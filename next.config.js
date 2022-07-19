/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'hips.hearstapps.com'],
  },
}

module.exports = nextConfig
