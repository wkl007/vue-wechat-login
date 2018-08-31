const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //  将部署应用程序的基本URL
  baseUrl: '/',
  //  运行时将生成生成构建文件的目录
  outputDir: process.env.outputDir,
  //  用于嵌套生成的静态资产（js，css，img，fonts）的目录。
  //assetsDir: '',
  //  以多页模式构建应用程序。
  pages: undefined,
  //  是否使用eslint-loader在开发期间执行lint-on-save 。
  lintOnSave: true,
  //  是否使用包含运行时编译器的Vue核心的构建。
  runtimeCompiler: false,
  //  默认情况下babel-loader忽略其中的所有文件node_modules。
  transpileDependencies: [],
  //  生产环境sourceMap
  productionSourceMap: false,
  //  webpack插件配置
  configureWebpack: config => {},
  //  将接收ChainableConfig由webpack-chain提供支持的实例的函数。
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    modules: true,
    //  是否将组件中的CSS提取到独立的CSS文件中（而不是在JavaScript中内联并动态注入）。
    extract: true,
    //  css sourceMap
    sourceMap: false,
    loaderOptions: {},
  },
  //  代理相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
  },
}
