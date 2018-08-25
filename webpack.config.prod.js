import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Generate an external css file with hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash files using md5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Create HTML file that includes reference to bundle JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      // Properties defined here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: '30161457708f4628953ea8a69805553e',
      minify   : {
        html5                          : true,
        collapseWhitespace             : true,
        minifyCSS                      : true,
        minifyJS                       : true,
        minifyURLs                     : false,
        removeAttributeQuotes          : true,
        removeComments                 : true,
        removeEmptyAttributes          : true,
        removeOptionalTags             : true,
        removeRedundantAttributes      : true,
        removeScriptTypeAttributes     : true,
        removeStyleLinkTypeAttributese : true,
        useShortDoctype                : true
      }
    }),
    // Eliminate any duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
