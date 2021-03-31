//webpack.common.js
const path = require('path'); //路径的api
const HtmlWebpackPlugin = require('html-webpack-plugin');//引用html-webpack-plugin

module.exports = {
    //入口的设置
    entry: {
        app: './src/index.js', //入口的文件名
    },
    //出口的设置
    output: {
        filename: '[name].bundle.js',//命名文件
        path: path.resolve(__dirname, '../dist')//生成的位置
    },

    //http服务的设置
    devServer: { //利用上面的webpack-dev-server插件
        port: 1234 //端口号，默认是8080，8080这个端口号很容易被占用，前端应该不常出现。反正我喜欢设置1234
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',//指定的html模板，这个会自动帮我引用下面output出口设置的文件名。
        })
    ],
    //管理资源
    module: {
        rules: [
            {
                //加载js
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },

}