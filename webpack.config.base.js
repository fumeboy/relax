const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ifProduction = () => process.env.NODE_ENV === 'production'

module.exports = {
    entry: './src/example/index.ts',
    output: {
        path: path.join(__dirname, './build/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new htmlWebpackPlugin({
            // 创建一个在内存中生成 HTML 页面的插件
            // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, './public/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        })
    ]
}
