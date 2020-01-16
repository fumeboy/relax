const webpack = require('webpack')
const webpackConfig = require('./webpack.config.base.js')
const path = require('path')

module.exports = Object.assign(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
    devServer: {
        open: true,
        // publicPath: 'public',
        contentBase: path.join(__dirname, 'build/dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true // only errors & warns on hot reload
    }
})
