module.exports = {
    // publicPath:process.env.NODE_ENV === 'production' ? '/vue_workspac/aihuhuproject/' : '/',

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
    }
}

