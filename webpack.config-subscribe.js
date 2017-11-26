var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'ctrl-component/subscribeForm/js');
var APP_DIR = path.resolve(__dirname, 'ctrl-component/subscribeForm/js');

var config = {
  entry: APP_DIR + '/App.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;