/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
        // destination:
        //   "https://medical-system-backend-production.up.railway.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
