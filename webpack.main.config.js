//конфигурация webpack
const { isProd, isDev, filename } = require('./webpack.helpers');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');

const plugins = () => {
  const config = [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: isProd,
    }),
  ];

  return config;
};

//главная конфигурация для верстки и т.д. (без взаимодействия с сервером)
const mainConfig = merge(baseConfig, {
  entry: {
    main: './src/scripts/main.js',
  },
  output: {
    filename: `scripts/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: plugins(),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    hot: isDev,
  },
});

module.exports = mainConfig;
