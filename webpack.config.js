const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const config = {
  watch: true,
}
const serverConfig = {
    mode : 'production',
    name : 'server',
    entry: {
        server: path.resolve('./server/index.tsx'),
        },
    output : {
        path : path.resolve('./dist'),
        filename : 'server.js'
    },
    resolve : {
        extensions : ['.ts', '.tsx']
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
      __dirname: false,
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.server.json',
            },
          },
        ],
      },
}
const clientConfig = {
  mode : 'production',
    name: 'client',
    entry: {
      client: path.resolve('./client/index.tsx'),
    },
    mode: 'production',
    output: {
      path: path.resolve('./dist/static'),
      filename: 'bundle.js',
      publicPath: 'static/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    target: 'web',
    plugins: [ new HtmlWebpackPlugin({title : 'My server side rendering app',template : './client/template.html'})],
    node: {
      __dirname: false,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.client.json',
          },
        },
      ],
    },
  }
  module.exports = [serverConfig,clientConfig,config]