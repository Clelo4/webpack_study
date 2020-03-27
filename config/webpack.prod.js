const merge = require('webpack-merge');
const common = require('./webpack.common');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        // 配置自动清除插件，它会在每次build之前清除output文件夹
        new CleanWebpackPlugin(),
    ]
})