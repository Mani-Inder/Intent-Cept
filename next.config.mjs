/** @type {import('next').NextConfig} */




const nextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;


