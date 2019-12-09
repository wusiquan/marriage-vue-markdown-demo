const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, argv) => {
  const config = {
    mode: 'development',
    entry: {
      'mdinvue-app': './mdinvue/index.js',
      'vueinmd-app': './vueinmd/index.js'
    },
    devtool: '#cheap-module-source-map',
    output: {
      filename: '[name].[hash:7].js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: {
            loader: 'vue-loader'
          }
        },
        {
          resourceQuery: /blockType=markdown/,
          loader: require.resolve('./mdinvue/vue-mdblock-loader/index.js') 
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, './vueinmd/md-loader/index.js')
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        chunks:['mdinvue-app'],
        filename:'index1.html',
        template: './mdinvue/index.html'
      }),
      new HtmlWebpackPlugin({
        chunks:['vueinmd-app'],
        filename:'index2.html',
        template: './vueinmd/index.html'
      }),
      new VueLoaderPlugin()
    ]
  }

  return config
}
