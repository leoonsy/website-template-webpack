require('dotenv').config();

const mode = process.env.NODE_ENV || 'development';
const config = process.env.CONFIG || 'main';
const isDev = mode === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

exports.filename = filename;
exports.mode = mode;
exports.isDev = isDev;
exports.isProd = isProd;
exports.config = config;
