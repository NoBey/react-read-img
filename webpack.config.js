
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'lib'),
       filename: 'index.js',
       libraryTarget: "umd"
  },
  externals: [
    'react'
  ],
  module: {
    rules: [{
          test: /\.js(.*)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ['react', 'stage-0', 'latest']
          }
        }]
  }
}
