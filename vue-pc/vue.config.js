const webpack = require("webpack");
//Webpack包文件分析器
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|styl|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        //所有页面都引用的样式
        additionalData: `@import "~@/common/css/base.scss";`
      }
    }
  },
  lintOnSave: false,
  //引用路径
  publicPath: "./",
  //打包后是否生成.map文件
  productionSourceMap: false,
  devServer: {
    port: 8090,
    proxy: {
      "/api": {
        //对应自己的接口
        target: "http://127.0.0.1:8762",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8888, // 运行后的端口号
        reportFilename: "report.html",
        defaultSizes: "parsed",
        openAnalyzer: false,
        generateStatsFile: false,
        statsFilename: "stats.json",
        statsOptions: null,
        logLevel: "info"
      }),
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
      })
    ],
  }
};