const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        static: path.join(__dirname),
        compress: true,
        port: 3300,
        hot: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Dev Server",
            template: './index.html'
        })
    ]
}