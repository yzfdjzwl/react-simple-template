const path = require('path');
const webpack = require('webpack');

module.exports = {
  // webpack4 config
  // value: development | production | none
  // default value: production
  // if the value is `production`, `process.env.NODE_ENV` will be replaced with `production` by `webpack` in `src`
  // if the value is `development`, `process.env.NODE_ENV` will be replaced with `development` by `webpack` in `src`
  mode: 'none',

  // source-map
  devtool: '#eval-source-map',

  entry: [
    './src/index.js',
  ],
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
    // webpack-dev-server ouput files exists in memory
    // webpack ouput files exists in disk


    // if you don't set contentBase, the root of the server resource is the root of the project
    // not the path where execute the npm command
    // not the path where `webpack.config.js` configuration path
    // the base config of contentBase like this: `contentBase: path.resolve(__dirname)`

    // if you set like this: `contentBase: path.resolve(__dirname, './dist')`
    // the root of the server resource is the `dist`

    // display the specified contentBase as the current directory
    contentBase: path.resolve(__dirname, './'),

    compress: true,

    // webpack-dev-server will use `localhost:8888` as a service
    port: 8888,

    // for spa and `404`, it rely on HTML5 history API, if set true, all the jumps will refer to `index.html`
    historyApiFallback: true,

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
    // staticOptions: {
    //   index: 'app.html'
    // },
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


// [process document](http://nodejs.cn/api/en/process.html#process_process)
// The process object is a global that provides information about, and control over, the current Node.js process.

// `process.env` returns an object containing the user environment.
// but there's something different between *nix and windows when sets environment variables(process.env).
// so the third-party libarary `cross-env` help us to solve that.

// [DefinePlugin document](https://webpack.js.org/plugins/define-plugin/)
// The DefinePlugin allows you to create global constants which can be configured at compile time.
// that's to say, the plugin will replace `process.env.NODE_ENV` with `production` in your codes when compiling.
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ]);
}

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ]);
}
