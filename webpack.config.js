var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
		vendor: ['jquery'],
		app: [
			'webpack-hot-middleware/client',
	    './src/index',
			'./src/resource/index.less'
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
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
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
