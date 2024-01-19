// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: path.resolve(__dirname, 'src'),
    
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    
    devServer: {
        port: 5900,
        open: true,
        host: 'localhost',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(css|scss)/i,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
