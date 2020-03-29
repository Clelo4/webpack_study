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
    overlay: true,
    contentBase: path.resolve(__dirname, '../public'),
    port: 9010,
    open: false,
    historyApiFallback: false,
    hot: true,
    clientLogLevel: 'trace',
    compress: true,
    headers: {
      'X-Custom-Foo': 'bar'
    },
    /**
     * When devServer.lazy is enabled, the dev-server will only compile the bundle when it gets requested. 
     * This means that webpack will not watch any file changes. 
     * We call this lazy mode.
     */
    lazy: false,
    // color: true,
    // compress: true,
    // proxy: {}, // 代理列表
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    },
    quiet: true,
  },
  plugins: [
    // 定义环境变量 
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        BASE_URL: JSON.stringify('http://127.0.0.1'), // 自定义的环境变量
      }
    })
  ]
});
