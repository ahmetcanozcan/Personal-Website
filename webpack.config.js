const webpack = require("webpack");
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV == "PRODUCTION" ? "production" : "development",
  entry: "./src/main.js",
  plugins: [
    // Create index.html in dist directory
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    // Cleans dist directory before building
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

    ],
  },
  // Set Dev-Server configurations
  devServer: {
    contentBase: "./dist"
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devtool: "inline-source-map",

  output: {
    filename: "bundle[hash:5].js",
    chunkFilename: '[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, "dist"),
  }
}