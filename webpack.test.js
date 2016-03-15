var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'baggage?[file].html&[file].css'
      },
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel?presets[]=es2015',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
        ],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].html',
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url?limit=32768'
      },
    ],
  }
};
