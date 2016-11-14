var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: {
		vendor: ['jquery'],
		app: [
	    'webpack-dev-server/client?http://0.0.0.0:3009',
	    'webpack/hot/only-dev-server',
	    './src/index',
			'./styles/knight.css'
	  ],
	},
  output: {
    path: path.join(__dirname, '/public/assets'),
    filename: '[name]/bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
		new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
		new ExtractTextPlugin("./[name]/bundle.css"),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
			{
	      test: /\.js$/,
	      loaders: ['react-hot', 'babel'],
	      include: path.join(__dirname, 'src')
	    },
			{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
			{
				test: /\.(eot|svg|ttf|otf|woff2?)(\?\w+)?$/i,
				loaders: [
					'file?name=[name]-[sha1:hash:hex:10].[ext]',
				]
			},
		]
  }
};
