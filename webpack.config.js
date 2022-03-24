const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const SizePlugin = require('size-plugin');

const config = {
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlInlineScriptPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    new CssMinimizerPlugin(),
    new SizePlugin(),
  ],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
};

module.exports = config;