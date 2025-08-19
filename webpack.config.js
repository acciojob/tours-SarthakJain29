const path = require("path");
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://course-api.com',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },

    entry: './src/index.js',

    output: {
        path: path.join(__dirname,"/dist"),
        filename: "index_bundle.js",
    },
    module:{
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
