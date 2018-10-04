const path = require("path");
module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist"
  },
  module: {
    rules: [
      //add rules for loader
      {
        test: /\.css$/, //it take regular expression of filetype
        use: [
          // to specify your loaders
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
          //it will run the css-loader first before pass to style-loader, which will
          //inject css to html
        ]
      }
    ]
  }
};
