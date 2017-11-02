var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/docs',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: "body"
        })
    ]
};
