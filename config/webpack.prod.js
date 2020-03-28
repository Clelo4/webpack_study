const merge = require('webpack-merge');
const common = require('./webpack.common');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // 配置自动清除插件，它会在每次build之前清除output文件夹
    new CleanWebpackPlugin(),
    // 拷贝静态文件
    new CopyPlugin([{
      from: path.resolve(__dirname, '../public/static/'),
      to: path.resolve(__dirname, '../dist/static/')
    }]),
  ],
  optimization: {
    minimize: true
  }
});
