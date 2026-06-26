import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Ambos paquetes se instalaron con ESM incompleto — forzamos CJS
    config.resolve.alias['motion-dom'] = path.resolve(
      __dirname,
      'node_modules/motion-dom/dist/cjs/index.js'
    );
    config.resolve.alias['motion-utils'] = path.resolve(
      __dirname,
      'node_modules/motion-utils/dist/cjs/index.js'
    );
    return config;
  },
};

export default nextConfig;
