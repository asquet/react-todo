/**
 * Webpack Dev Server
 * This file is used to run our local enviroment in development
 * mode. Production build does not go through dev server.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

// always dev enviroment when running webpack dev server
const env = { dev: process.env.NODE_ENV };
const devServerConfig = {
  contentBase: path.join(__dirname, '../build'),
  // Need historyApiFallback to be able to refresh on dynamic route
  historyApiFallback: true,
  port: 3000,
  compress: false,
  inline: true,
  hot: true,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,

  }
};

/**
 * Creating the server to listen to. We are passing in our webpack config
 * that we will setup at webpack/webpack.config.js. We are also passing in
 * the server configuration object that we created above.
 */
const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfig);

// will be live at http://localhost:3000/
server.listen(3000, 'localhost');
