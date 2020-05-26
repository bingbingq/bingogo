'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'test/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: true,

  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号】
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`
    },
    resolve: {
      alias: {
        '@': resolve('packages')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      })
  }
}
