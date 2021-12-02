const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CustomPrefix = require('./loaders/custom-prefix-loader')

module.exports = {
  entry: './src/index.js',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader', 'custom-prefix-loader'] // 正则
        use: ['style-loader', 'css-loader', 'less-loader', 'custom-prefix-loader' ]
      }
    ]
  },
  // 配置loader加载目录
  resolveLoader: {
    modules: [path.resolve(__dirname, 'loaders'), 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-loader',
      template: './src/public/index.html'
    })
  ]
}