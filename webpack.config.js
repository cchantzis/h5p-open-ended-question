var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/entries/dist.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "dist.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/scripts"),
          path.resolve(__dirname, "src/entries")
        ],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src/scripts"),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss")
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
