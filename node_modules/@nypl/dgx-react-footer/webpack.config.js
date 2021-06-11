var path = require('path');
var webpack = require('webpack');
var cleanBuild = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rootPath = path.resolve(__dirname);

if (process.env.NODE_ENV !== 'development') {
  module.exports = {
    devtool: 'source-map',
    entry: [
      './src/app.jsx'
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.min.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['babel-loader']
        },
        {
          test: /\.scss$/,
          include: path.resolve(rootPath, 'src'),
          loader: ExtractTextPlugin.extract(
            // activate source maps via loader query
            'css?sourceMap!' +
            'sass?sourceMap'
          )
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.scss'),
      new cleanBuild(['dist'])
    ]
  };
} else {
  module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/app.jsx'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.min.js',
      publicPath: '/'
    },
    plugins: [
      new cleanBuild(['dist']),
      new ExtractTextPlugin('styles.scss'),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['react-hot', 'babel-loader']
        },
        {
          test: /\.scss$/,
          loader: 'style!css!sass',
          include: path.resolve(rootPath, 'src')
        }
      ]
    }
  };
}
