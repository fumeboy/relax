const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ifProduction = () => process.env.NODE_ENV === 'production'

module.exports = {
    entry: {
        index: './src/example/index.ts',
        page2: './src/example/page2.ts'
    },
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
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: {
                    name: 'common',
                    chunks: 'initial'
                    // minChunks: 2 //模块被引用2次以上的才抽离
                }
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'page2.html'
        })
    ]
}
