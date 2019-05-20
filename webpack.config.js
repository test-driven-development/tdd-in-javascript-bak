const nodeExternals = require('webpack-node-externals');
process.env.NODE_ENV = 'TEST';

module.exports = {
  target: 'node',
  mode: 'development',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: 'inline-cheap-module-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            }
          },
          {
            loader: 'eslint-loader'
          }
        ],
      },
    ]
  }
};
