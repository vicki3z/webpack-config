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
    contentBase: "dist",
    overlay: true
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
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};
