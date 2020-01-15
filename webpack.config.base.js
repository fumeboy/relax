const path = require('path')

const ifProduction = () => process.env.NODE_ENV === 'production'

module.exports = {
    entry: {
        relax: path.join(__dirname, './src/example/dom_example.ts')
    },
    output: {
        path: path.join(__dirname, './build/dist'),
        filename: '[name].js',
        libraryExport: 'default',
        libraryTarget: ifProduction ? 'umd' : undefined,
        publicPath: '/build/dist/'
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
    }
}
