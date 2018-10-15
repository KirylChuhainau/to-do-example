let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let webpack = require("webpack");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".scss"],
  },
  entry: {
    app: "./index.tsx",
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
    ],
  },
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      }, {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
        },
      },
    ],
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    noInfo: true,
    stats: "errors-only",
  },
  plugins: [
    // Generate index.html in /dist =>
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[id].css"}),
  ],
};
