const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  // 入口文件配置
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  // 出口文件配置
  output: {
    filename: '[name].[' + (process.env.NODE_ENV === "development" ? "hash" : "contenthash") + '].js',
    // filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
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
    moduleIds: 'hashed'
  },
  // 插件配置
  plugins: [
    // 自动生产index.html文件
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: './public/index.html',
      inject: true,
      // Allows to control how chunks should be sorted before they are included to the HTML. 
      // Allowed values are 'none' | 'auto' | 'dependency' | 'manual' | {Function}
      chunksSortMode: 'auto',
    }),
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  // module配置
  module: {
    rules: [
      // 配置css loader
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
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
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader'
        }]
      },
      {
        enforce: 'pre',
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslintPath: path.resolve(__dirname, '../')
        }
      },
      // This package allows transpiling JavaScript files using Babel and webpack.
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env',
                {
                  'useBuiltIns': 'entry',
                  'corejs': 3, // core-js版本
                }
              ]
            ],
            cacheDirectory: true
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.vue', '.stylus', '.styl', '.less', '.css', '.scss'],
    /**
     * Create aliases to import or require certain modules more easily.
     * For example, to alias a bunch of commonly used src/ folders:
     */
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
};
