import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

const config = require("../webpack.config");

const app = express();
const builder = webpack(config);

app.use(webpackDevMiddleware(
  builder,
  {
		publicPath: config.output.publicPath,
	  historyApiFallback: true,
    stats: {
      chunks: false,
      colors: true,
    },
  }
));

app.use(hotMiddleware(builder));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3009, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server listening on port 3009...");
});

export default app;
