import path from 'path';

export default {
  mode: 'production',
  entry: './index.js', // Your actual entry point
  output: {
    filename: 'next-pwa.bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: 'commonjs2'
  },
  // Additional configuration
};
