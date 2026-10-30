/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — GitHub Pages serves the `out/` directory as plain files.
  output: 'export',
  // GitHub Pages has no image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Served from the root of seedcoherent.github.io, so no basePath needed.
  trailingSlash: true,
};

export default nextConfig;
