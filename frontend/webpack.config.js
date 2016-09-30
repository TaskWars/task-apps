var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: __dirname,
  entry: './javascript/index.jsx',
  module: {
    loaders: [{
      test: /\.js(x?)$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }]
  },
  output: {
    path: path.join(__dirname, "javascript"),
    filename: "task-app.js"
  }
};