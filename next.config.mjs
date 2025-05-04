/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
