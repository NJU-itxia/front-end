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



/**
 * 下列代码仅为测试Setting使用，完成后删除
 * 测试Setting代码开始
 */
const knightList = [
  { "username": "test1", "password": "123456", "name": "qixin", "campus": "gulou", "role": "itxia"},
  { "username": "test2", "password": "123456", "name": "james", "campus": "xianlin", "role": "itxia"},
  { "username": "test3", "password": "123456", "name": "curry", "campus": "gulou", "role": "itxia"}
]

app.get('/setting/response.json', function(req, res) {
  res.send({ knightList });
});

app.post('/setting/submit.json', function (req, res) {
  if(req.body.knight) {
    knightList.push(req.body.knight);
    res.send({
      "ok": true,
    });
  } else {
    res.send({
      "ok": false,
    })
  }
});
/**
 * 测试Setting代码结束
 */



app.get('*' , function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3009, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server listening on port 3009...");
});

export default app;
