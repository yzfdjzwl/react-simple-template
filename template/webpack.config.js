const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // The output dist path
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // The base static assets
    // like img or others
    // the src like this: <img src="/dist/somehash.png" />
    publicPath: '/dist/',
  },
  devServer: {
    // if you don't set contentBase, the root of the server resource is the root of the project
    // if you set like this: contentBase: path.resolve(__dirname, './dist'),
    // the root of the server resource is the `dist`
    // server will find `index.html` in `the root of the server resource`
    compress: true,
    // webpack-dev-server will use `localhost:8888` as a service
    port: 8888,
    // webpack-dev-server will return `index.html` when enter `localhost:8888`
    // that's why: //github.com/expressjs/express/issues/3664
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        exclude: /node_modules/
      },
    ]
  },
};
