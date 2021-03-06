//noinspection NodeJsCodingAssistanceForCoreModules
let path = require('path');
let webpack = require('webpack');

let APP_PATH = path.resolve(__dirname, './src/main.jsx');
let BUILD_PATH = path.resolve(__dirname, './build/');

module.exports = {
    entry:['babel-polyfill', APP_PATH],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
    },
    plugins: [
        //让模块不用再引入react中的React
        new webpack.ProvidePlugin({
            'React':'react',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=stage-3,presets[]=react']
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]

    }
};