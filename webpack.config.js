var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,

  entry: "./js/client.js",

  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { test: /\.css|\.less$/, loaders: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.html\.htm||\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,

        use: "file-loader?name=[path][name].[ext]"

        // loader: "file-loader"
      }
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: [':data-src']
      //     }
      //   }
      // }
    ]
  },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
