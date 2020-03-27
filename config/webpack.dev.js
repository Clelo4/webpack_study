const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    // 使用开发工具source-map实现错误代码映射提示
    devtool: 'inline-source-map',
    // The webpack-dev-server provides you with a simple web server and the ability to use live reloading.
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9090,
        open: false,
        historyApiFallback: false,
        // compress: true,
        // proxy: {}, // 代理列表
    },
    plugins: [
        // 定义环境变量 
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV | 'development'),
                CUSTOM_ENV: JSON.stringify('custom_env'), // 自定义的环境变量
            }
        })
    ]
})