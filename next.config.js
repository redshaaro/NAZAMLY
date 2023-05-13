const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "cloudinary",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
