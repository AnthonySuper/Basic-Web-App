module.exports = {
  entry: './index.js',
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["react", "latest"]
        }
      }
    }]
  },
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  }
};
