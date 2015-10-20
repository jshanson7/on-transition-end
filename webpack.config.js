const path = require('path');

module.exports = {
  entry: {
    onTransitionEnd: ['./src/on-transition-end']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'on-transition-end.js',
    library: ['[name]'],
    libraryTarget: 'umd'
  },
  stats: { colors: true },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};