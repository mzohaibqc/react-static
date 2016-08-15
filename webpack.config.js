const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const locals = {};
const paths = ['/', '/about', '/contacts', '/404.html'];

module.exports = {
  entry: {
    main: './src/index.js',
    css: [`${__dirname}/src/styles.css`, `${__dirname}/node_modules/materialize-css/dist/css/materialize.min.css`]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, 'dist')),
    libraryTarget: 'umd' 
  },
  resolve: {
    modules: ['node_modules', 'src'],
      alias: {
        'mtd': `${__dirname}/node_modules/materialize-css/dist/css/materialize.min.css`,
        'styles': `${__dirname}/src/styles.css`
      }
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
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, './node_modules/materialize-css/dist/css'),
          path.resolve(__dirname, './src/styles.css')
          ],
        loader: ExtractTextPlugin.extract(
          'style-loader',
          '!css-loader'
        )
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, locals),
    new ExtractTextPlugin('style.css'),
    new webpack.NoErrorsPlugin()
  ]
};
