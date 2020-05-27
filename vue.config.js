const path = require('path');
module.exports = {
  pages: {
    index: {
      entry: 'test/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: false,
  // configureWebpack: {
  //   output: {
  //     path: path.resolve(__dirname, './dist'),
  //     filename: 'bingogo.min.js',
  //     publicPath: '/',
  //     library: 'bingogo',
  //     libraryTarget: 'umd',
  //     umdNamedDefine: true
  //   }
  // },
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
