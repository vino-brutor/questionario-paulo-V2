const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './dist/index.js',
    reset: './dist/reset.js',
    form: './dist/form.js',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js'
  },

  mode: 'production',

  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },   {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      
    }]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}