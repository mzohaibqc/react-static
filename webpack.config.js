const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const locals = {};
const paths = ['/', '/about', '/404.html'];

module.exports = {
  entry: {
    main: './src/index.js' 
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, 'dist')),
    libraryTarget: 'umd' 
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      { test: /\.ejs$/, loader: "ejs-loader" },
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, locals),
    new webpack.NoErrorsPlugin()
  ]
};
