var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'webpack-traceur?runtime&sourceMaps&experimental' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
