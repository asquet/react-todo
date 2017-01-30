const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './build');
const PORT = 3000;

const isProd = process.env.NODE_ENV === 'production';

const BASE = {
  context: sourcePath,
  entry: {
    vendor: ['react', 'react-dom', 'redux', 'react-redux'],
  },
  output: {
    path: staticsPath,
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.js',
      }
    ),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin(
      {
        template: '../src/index.html',
        showErrors: !isProd,
      }
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};


if (isProd) {
  module.exports = merge(
    BASE, {
      entry: {
        app: ['./index.jsx']
      },
      output: { filename: '[name]-[chunkhash].js' },
      devtool: false,
      plugins: [
        new webpack.LoaderOptionsPlugin(
          {
            minimize: true,
            debug: false,
          }
        ),
        new webpack.optimize.UglifyJsPlugin(
          {
            compress: {
              warnings: false,
              screw_ie8: true,
              conditionals: true,
              unused: true,
              comparisons: true,
              sequences: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true,
            },
            output: {
              comments: false,
            },
          }
        )
      ]
    }
  );
} else {
  module.exports = merge(
    BASE, {
      entry: {
        app: [
          'react-hot-loader/patch',
          `webpack-dev-server/client?http://localhost:${PORT}`,
          'webpack/hot/only-dev-server',
          './index.jsx',
        ]
      },
      devtool: 'inline-source-map',
      devServer: {
        contentBase: staticsPath,
        publicPath: '/',
        historyApiFallback: true,
        compress: false,
        hot: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        port: PORT
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
      ]
    }
  );
}
