const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: [
      "placeimg.com",
    ],
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
