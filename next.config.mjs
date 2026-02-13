/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  
  // ✅ Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // ✅ Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
