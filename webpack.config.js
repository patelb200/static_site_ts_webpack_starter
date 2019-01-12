const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: path.join(__dirname, "./src/app")
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
    { test: /\.css$/, use: [MiniCssExtractPlugin.loader,"css-loader"], exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".ts",".css",".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CopyWebpackPlugin([ { from: './src/index.html', to: './' }, ], {}),
    new MiniCssExtractPlugin({ filename: 'app.css' })
  ]
};
