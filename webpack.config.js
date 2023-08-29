const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'production';

module.exports = {
  mode,

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: path.resolve(__dirname, 'assets/css'),
    publicPath: "./assets/css"
  },

  resolve: {
    extensions: ['.css', '.sass'],
    alias: {
      '~': path.resolve(process.cwd(), 'src'),
    },
  },

  entry: {
    "main": './assets/sass/main.sass',
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          // Extract and save the final CSS.
          MiniCssExtractPlugin.loader,
          // Load the CSS, set url = false to prevent following urls to fonts and images.
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          // Add browser prefixes and minify CSS.
          { loader: 'postcss-loader', options: { postcssOptions: { plugins: [autoprefixer(), cssnano()] }}},
          // Load the SCSS/SASS
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}