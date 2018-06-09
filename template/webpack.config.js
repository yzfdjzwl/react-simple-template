const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ]
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
    // the base config of contentBase like this: `contentBase: path.resolve(__dirname)`
    // if you set like this: `contentBase: path.resolve(__dirname, './dist')`
    // the root of the server resource is the `dist`

    compress: true,

    // webpack-dev-server will use `localhost:8888` as a service
    port: 8888,

    // server will find `index.html` in `the root of the server resource`
    // webpack-dev-server will return `index.html` when enter `localhost:8888`
    // that's why: https://github.com/expressjs/express/issues/3664
    // * on [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server/blob/master/lib/Server.js#L311)
    // * the code is `app.get('*', express.static(contentBase, options.staticOptions));`
    // * `express.static()` use third-party libraries: [serve-static](https://github.com/expressjs/serve-static).
    // * `serve-static` use third-party libraries: [send](https://github.com/pillarjs/send).
    // * In [send/index.js](https://github.com/pillarjs/send/blob/master/index.js#L591), when path is `'/'`, it's will return `index.html`.

    // config the default home page
    // webpack-dev-server will return `app.html` when enter `localhost:8888`
    staticOptions: {
      index: 'app.html'
    },
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
