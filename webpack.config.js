var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  bail: true,
  context: __dirname + '/app',
  entry: './index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

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
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)|(index\.html$)/,
        loaders: [
          'ngtemplate?relativeTo=' + __dirname,
        ],
      },
      {
        test: /\.html$/,
        loader: 'html',
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
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      filename: 'shared.js',
      minChunks: 3
    }),
    new ExtractTextPlugin('css/[name].css', {
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'IBU Calculator',
      template: 'index.ejs',
    }),
  ],
}
