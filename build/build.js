'use strict'
require('./check-versions')()//检查node和npm版本

process.env.NODE_ENV = 'production' //指定生产环境

const ora = require('ora')  //loading 插件
const rm = require('rimraf') //提供node版本的UNIX的rm-rf
const path = require('path') //使用node自带的文件路径插件
const chalk = require('chalk') //控制台高亮显示的插件
const webpack = require('webpack') //使用webpack
const config = require('../config') //使用config/index.js
const webpackConfig = require('./webpack.prod.conf') //加载webpack.prod.conf
//使用ora打印出loading+log
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
    //开始webpack编译
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
