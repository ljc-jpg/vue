
const webpack = require("webpack");
 //Webpack包文件分析器
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
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
        target:"http://127.0.0.1",
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
      new BundleAnalyzerPlugin(),
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: productionGzipExtensions,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  }
};
