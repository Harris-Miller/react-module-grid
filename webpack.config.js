'use strict';

const pkg = require('./package');
const cssnext = require('postcss-cssnext');
const cssImport = require('postcss-import');
const webpack = require('webpack');
const path = require('path');

const appSrc = path.join(__dirname, 'src');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'demo.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'eslint-loader',
      include: appSrc,
      enforce: 'pre'
    }, {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      include: appSrc
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: 'dashes',
            importLoaders: 1,
            localIndentName: '[name]__[local]__[hash:base64:5]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              cssImport,
              cssnext({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9' // React doesn't support IE8 anyway
                ]
              })
            ]
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
