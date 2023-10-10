const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const SizePlugin = require('size-plugin');

const config = {
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      scriptLoading: "blocking",
      template: "src/index.html",
    } ),
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
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset/inline",
        parser: { dataUrlCondition: { maxSize: 1024*1024 } },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // browserlist defaults, excluding IE 11. IE 11 is responsible for a lot of polyfill!
            targets: "> .5%, last 2 versions, Firefox ESR, not dead, not ie 11",
            presets: [
              "@babel/preset-react", 
              ["@babel/preset-env", { bugfixes: true}]],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  pragma: "h",
                  pragmaFrag: "Fragment",
                },
              ],
            ],
          },
        },
      },
    ]
  },
};

module.exports = config;