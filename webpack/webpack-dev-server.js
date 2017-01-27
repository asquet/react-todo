/**
 * Webpack Dev Server
 * This file is used to run our local enviroment in development
 * mode. Production build does not go through dev server.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

const PORT = 3000;

// always dev enviroment when running webpack dev server
const env = { dev: process.env.NODE_ENV };
const devServerConfig = {
  contentBase: path.join(__dirname, '../build'),
  publicPath: '/',
  historyApiFallback: true,
  compress: false,
  hot: true,
  inline: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const cfg = webpackConfig(env);

cfg.entry.js.unshift(`webpack-dev-server/client?http://localhost:${PORT}/`);
cfg.entry.js.unshift('webpack/hot/only-dev-server');
cfg.entry.js.unshift('react-hot-loader/patch');


/**
 * Creating the server to listen to. We are passing in our webpack config
 * that we will setup at webpack/webpack.config.js. We are also passing in
 * the server configuration object that we created above.
 */
const server = new WebpackDevServer(webpack(cfg), devServerConfig);

server.listen(PORT, 'localhost');
