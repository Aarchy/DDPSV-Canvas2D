const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      // Handle workers
      {
        test: /\.worker\.js$/,
        use: { loader: "worker-loader" },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    publicPath: "/dist/",
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};