var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssPath = './src/components/';
var cssFileArr = {
    article : cssPath + 'article/article.scss',
    first_view : cssPath + 'first_view/first_view.scss',
    list : cssPath + 'list/list.scss',
    view : cssPath + 'view/view.scss'
};

module.exports = {
    // devtool: 'source-map',
    entry: cssFileArr,
    output: {
      path: path.join(__dirname, './dist/css'),
      filename: '[name].min.css'
    },
    entry: {
        main : './src/js/main.js'
    },
    output: {
      path: path.join(__dirname, './dist/js'),
      filename: '[name].min.js'
    },
  
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader?-url&minimize!sass-loader'),
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}