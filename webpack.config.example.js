const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SimpleWebpackHTMLEntrypoint = require('simple-webpack-html-entrypoint')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'build/dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true // only errors & warns on hot reload
    },
    entry: {
        index: './src/example/index.ts',
        page2: './src/example/page2.ts',
        page3: './src/example/page3.ts'
    },
    output: {
        path: path.join(__dirname, './build/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    // ifProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    }
                ]
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
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2 //模块被引用2次以上的才抽离
                },
                vdom: {
                    name: 'vdom',
                    test: /[\\/]src[\\/]dom[\\/]/,
                    chunks: 'all',
                    priority: 2
                }
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer-report.html'
        }),
        new SimpleWebpackHTMLEntrypoint({
            template: path.join(__dirname, './public/index.html')
        })
    ]
}
