import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const createConfig = (env = 'development') => {
    return {
        entry: {
            script: './src/js/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            }],
        },
        devtool: 'source-map',
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
        devServer: {
            port: process.env.PORT || 8080,
            host: '127.0.0.1',
            publicPath: '/',
            contentBase: './src',
            historyApiFallback: true,
            https: false,
        },
    };
};

module.exports = createConfig;
