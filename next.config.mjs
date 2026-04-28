/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images: remove oversized 3840px breakpoint to prevent serving huge images
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.specroll.pl",
          },
        ],
        destination: "https://specroll.pl/:path*",
        permanent: true,
      },
      {
        source: "/favicon.ico",
        destination: "/icon.svg",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
