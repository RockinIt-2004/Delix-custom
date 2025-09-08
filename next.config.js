/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/CreateProfile",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
