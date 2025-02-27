const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './index.js', // Your package’s entry point
  output: {
    filename: 'next-pwa.bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    fallback: {
      fs: false,
      module: false,
      dgram: false,
      dns: false,
      net: false,
      tls: false,
      child_process: false,
      worker_threads: false,
      async_hooks: false,
      inspector: false,
      "uglify-js": false,
      "@swc/core": false,
      esbuild: false
    }
  },
  plugins: [
    // This plugin polyfills Node core modules where needed.
    new NodePolyfillPlugin()
  ],
  // Disable performance hints to suppress asset size warnings
  performance: {
    hints: false
  },
  // Optionally ignore known critical dependency warnings
  ignoreWarnings: [
    {
      // Ignore dynamic require warnings from jest-worker
      module: /node_modules[\\/]jest-worker[\\/]/,
      message: /Critical dependency: the request of a dependency is an expression/
    },
    {
      // Ignore warnings from loader-runner
      module: /node_modules[\\/]loader-runner[\\/]/,
      message: /Critical dependency: the request of a dependency is an expression/
    },
    {
      // Ignore warnings from terser-webpack-plugin’s dynamic require usage
      module: /node_modules[\\/]terser-webpack-plugin[\\/]/,
      message: /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/
    },
    {
      // Ignore other dynamic require warnings from webpack internals
      module: /node_modules[\\/]webpack[\\/]/,
      message: /Critical dependency: the request of a dependency is an expression/
    }
  ]
};
