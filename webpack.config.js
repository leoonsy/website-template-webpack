//конфигурация webpack
const { nodeEnv, config } = require('./webpack.helpers');

console.log(`Режим: ${nodeEnv}`);
console.log(`Конфигурация: ${config}`);

module.exports = require(`./webpack.${config}.config`);
