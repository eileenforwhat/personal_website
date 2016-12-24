var webpack = require('webpack'),
    path = require("path"),
    ManifestRevisionPlugin = require("manifest-revision-webpack-plugin");


var rootAssetPath = './site/static';


module.exports = {
  entry: {
    app_js: [
      rootAssetPath + "/index.jsx"
    ]
  },
  output: {
    path: "./compiled_static",
    publicPath: "/compiled_static/",
    filename: "[name].js",
  },
  eslint: {
    configFile: './.eslintrc'
  },
  resolve: {
    extensions: ["", ".jsx", ".js"]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  },
  plugins: [
    new ManifestRevisionPlugin(path.join("site", "manifest.json"), {
      rootAssetPath: rootAssetPath
    })
  ]
};

