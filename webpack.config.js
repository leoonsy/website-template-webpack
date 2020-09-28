//конфигурация webpack
const { mode, config } = require('./webpack.helpers');

console.log(`Режим: ${mode}`);
console.log(`Конфигурация: ${config}`);

module.exports = require(`./webpack.${config}.config`);
