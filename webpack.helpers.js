require('dotenv').config();

const nodeEnv = process.env.NODE_ENV || 'development';
const config = process.env.CONFIG || 'main';
const isDev = nodeEnv === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

exports.filename = filename;
exports.nodeEnv = nodeEnv;
exports.isDev = isDev;
exports.isProd = isProd;
exports.config = config;
