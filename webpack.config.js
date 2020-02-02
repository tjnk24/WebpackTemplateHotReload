const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const development = 'development';

const cssLoaders = [ 'style-loader', 'css-loader' ];

const config = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: development ? 'development' : 'production',
    devServer: {
        port: 3001,
        contentBase: path.resolve(__dirname, 'src'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css"
        })
    ],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: development ? cssLoaders : [
                MiniCssExtractPlugin.loader,
                cssLoaders[1],
                cssLoaders[2]
            ]
        },
        ],
    },
};

module.exports = config;