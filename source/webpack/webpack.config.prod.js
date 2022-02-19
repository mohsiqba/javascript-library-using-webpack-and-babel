const path = require("path")
var PACKAGE = require('../package.json');
var version = PACKAGE.version;

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, `../../script/${version}`),
    filename: "index_bundle.js",
    library: "$",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  }
};
