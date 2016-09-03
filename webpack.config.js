var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  // devtool: false,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3009',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
