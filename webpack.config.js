var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'eval',
  entry: {
		vendor: ['babel-polyfill', 'jquery'],
		bundle: [
	    'webpack-dev-server/client?http://0.0.0.0:3009',
	    'webpack/hot/only-dev-server',
	    './src/index'
	  ],
	},
  output: {
    path: path.join(__dirname, '/public/assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  plugins: [
		new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
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
