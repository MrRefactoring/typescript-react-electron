const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const ENV = process.env.NODE_ENV || 'development';

  const config = {
    watch: ENV === 'development',
    target: 'electron-renderer',
    entry: {
      app: './src/index.tsx'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js'
    },
    stats: {
      colors: true,
      chunks: false,
      modules: false,
    },
    module: {
      rules: [
        {
          test: [/\.ts$/, /\.tsx?$/],
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/
        },
        {
          test: /\.less$/,
          include: /src/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader']
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
          use: 'file-loader?name=[name].[ext]?[hash]'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template: './src/index.html',
        inject: 'body',
        hash: true,
        chunks: ['app'],
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        allChunks: true,
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    }
  };

  switch (ENV) {
    case 'production':
      config.devtool = false;
      config.optimization = { minimize: true };
      break;
    case 'development':
      config.devtool = 'source-map';
      break;
    case 'test':
      config.devtool = 'source-map';
      delete config.entry;
      break;
    default:
      break;
  }

  return config;
}
