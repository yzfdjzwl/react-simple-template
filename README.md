# A React Simple Template

## Inspiration And Source

When I use Vue, [webpack-simple](https://github.com/vuejs-templates/webpack-simple) is a very light template for develop Vue. So this project is a Simple template for React.

## Usage

```bash
# install dependencies
$ npm install

$ npm run dev

$ npm run build
```

## Devolopement Process

### Create Base Files

New some base files, so your directory will like this:
```
.
├── README.md
└── template
    ├── index.html
    ├── package.json
    ├── src
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    └── webpack.config.js
```

### Install Necessary Npm Package

```bash
$ npm install css-loader style-loader file-loader

$ npm install --save-dev webpack webpack-dev-server webpack-cli

$ npm install --save react react-dom

$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0

$ npm install --save-dev cross-env
```

#### Edit `.bablerc`

```json
{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": []
}
```
