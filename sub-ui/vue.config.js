const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  // publicPath: '/sub-ui/',
  transpileDependencies: true,
  // filenameHashing: true,
  devServer: {
    // hot: true,
    // disableHostCheck: true,
    port: 3003,
    // overlay: {
    //   warnings: false,
    //   errors: true,
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // devServer: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   proxy: {
  //     '/api': {
  //           target: 'https://test.jcsk100.com',  // 接口域名
  //           secure: false,  // 如果是https接口，需要配置这个参数
  //           changeOrigin: true,  //是否跨域
  //           pathRewrite: {
  //               '^/api': ''   //需要rewrite的,
  //           }              
  //       }
  //   }
  // },
  configureWebpack: {
    output: {
      globalObject: 'window',
      library: `${name}-[name]` || name, // 找不到入口可以考虑后面的设置，package.json里name 应该与主应用注册的name一致
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
  
})

