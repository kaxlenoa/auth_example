/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
      },
    ],
  },
};

module.exports = nextConfig;
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false, net: false, dns: false, child_process: false, tls: false };
    return config;

  },
  images: {
    domains: ['images.unsplash.com']
  }
}
