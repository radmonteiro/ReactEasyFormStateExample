const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');


module.exports = {
    entry: {
        'profile-app': './src/main/resources/static/react/profile-app.jsx',
        'register-app': './src/main/resources/static/react/register-app.jsx',
    },

    mode: 'development',
    devtool:"eval-source-map",

    output: {
        path: __dirname + '/src/main/resources/static/bundles',
        filename: "[name].bundle.js",
        publicPath: '/',
    },

    module: {
        rules: [

            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-env", "@babel/preset-react" ],
                        plugins: [ "@babel/plugin-transform-arrow-functions", "@babel/plugin-proposal-class-properties", "react-hot-loader/babel" ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

};
