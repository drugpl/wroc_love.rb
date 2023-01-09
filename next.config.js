module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };

    return config
  }
}
