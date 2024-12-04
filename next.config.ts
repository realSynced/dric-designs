import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        '*.mp4': {  // Retained configuration for .mp4 files
          loaders: ['file-loader'], // Specify the loader for .mp4 files
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;