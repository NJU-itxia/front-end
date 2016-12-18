import bodyParser from 'body-parser';
import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import hotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
const builderConfig = require("../webpack.config");
const builder = webpack(builderConfig);

app.use(webpackDevMiddleware(
  builder,
  {
		publicPath: builderConfig.output.publicPath,
	  historyApiFallback: true,
    stats: {
      chunks: false,
      colors: true,
    },
  }
));

app.use(hotMiddleware(builder));

app.use(cookieParser(config.cookie_secret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/api', require('./api').default);

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
