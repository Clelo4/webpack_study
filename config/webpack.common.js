const path = require('path');
// 自动生成HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// 提取css到单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩js
const TerserPlugin = require('terser-webpack-plugin');
// 并行压缩代码
const ParallerUglifyPlugin = require('webpack-parallel-uglify-plugin');
// define plugin
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
  // 入口文件配置
  entry: {
    'index': path.resolve(__dirname, '../src/index.js'),
    'print': path.resolve(__dirname, '../src/print.js'),
  },
  // 出口文件配置
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  // 优化
  optimization: {
    // The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk. 
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    // runtimeChunk
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }
    ), new OptimizeCSSAssetsPlugin({})],
  },
  // 插件配置
  plugins: [
    // 自动生产index.html文件
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new MiniCssExtractPlugin(),
    // 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
    new ParallerUglifyPlugin({
      uglifyES: {
        output: {
          // 最紧凑输出
          beautify: false,
          // 移除注释
          comments: false,
        },
        // 在uplifyJS删除没有用到的代码时不输出警告
        warnings: false,
        compress: {
          // 不删除所有的console.log语句，可以兼容ie浏览器
          drop_console: false,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        },
      },
      cacheDir: path.resolve(__dirname, './.cache')
    })
  ],
  // module配置
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        parser: {
          amd: false, // 禁用amd
          // harmony: false, // 禁用ES6 import/export
        }
      },
      // 配置css loader
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
        {
          loader: 'style-loader'
        },{
          loader: 
          MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, {
          loader: 'postcss-loader'
        }]
      },
      // 配置stylus loader
      {
        test: /\.(stylus|styl)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },{
            loader: 
            MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, {
            loader: 'postcss-loader'
          },
          'stylus-loader'
        ]
      },
      // 配置图片loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 配置csv文件loader
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      // 配置xml文件loader
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ],
    noParse: [/vue\.min\.js$/, /jQuery\.js$/]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.css', '.json', '.styl'],
    modules: [
      path.resolve(__dirname, '../src/components'),
      'node_modules'
    ],
    // enforceExtension: true, // 强制写上后缀名
  }
}