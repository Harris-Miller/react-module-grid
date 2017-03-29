const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const port = 4200;

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: '/build/',
  stats: {
    colors: true
  }
}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(path.join(__dirname, './public/index.html'));
  console.log(`Listening at http://localhost:${port}`);
});
