'use strict'
const path = require('path') //根据nodejs 自带的文件路径插件
const utils = require('./utils') //封装了一些方法的工具
const config = require('../config') //使用config/index.js
const vueLoaderConfig = require('./vue-loader.conf') //使用vue-loader.conf


//拼接我们的工作区路径为一个绝对路
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

//创建eslint的规则
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    //编译文件入口
    app: ["babel-polyfill", "./src/main.js"]
  },
  output: {
    //使用config/index.js 中build的assetsRoot作为输出的根路径
    path: config.build.assetsRoot,
    filename: '[name].js',//编译输出的文件名
    publicPath: process.env.NODE_ENV === 'production' //正式环境下编译输出的发布路径
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //自动补全的扩展名,能够使用户在引入模块时不带扩展
    extensions: ['.js', '.vue', '.json'],
      //默认路径代理,例如 import Vue from 'vue$'会自动到'vue/dist/vue.esm.js'中寻找
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
