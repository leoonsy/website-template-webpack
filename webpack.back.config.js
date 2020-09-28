//конфигурация webpack
const path = require('path');
const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');
const { filename } = require('./webpack.helpers');

//конфигурация для взаимодействия с сервером
const backConfig = merge(baseConfig, {
  entry: {
    main: `./www_src/scripts/main.js`,
  },
  output: {
    filename: `scripts/${filename('main')}`,
    path: path.resolve(__dirname, 'www'),
    publicPath: '/',
  },
});

module.exports = backConfig;
