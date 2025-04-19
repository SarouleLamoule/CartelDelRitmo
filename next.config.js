/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/audio/:path*",
        destination:
          "https://www.googleapis.com/drive/v3/files/:path*/get?alt=media",
        has: [
          {
            type: "header",
            key: "accept",
            value: "(.*)",
          },
        ],
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/audio/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Accept, Range, Content-Type, Origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
