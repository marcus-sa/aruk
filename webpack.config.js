'use strict'

const path = require('path')

const appSrc = path.resolve(__dirname, 'src')
const appDist = path.resolve(__dirname, 'dist')
const appLib = path.resolve(__dirname, 'lib')

const env = process.env.NODE_ENV !== 'production'
  ? 'development'
  : 'production'

module.exports = {
  mode: env,
  entry: path.join(appSrc, 'index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'aruk',
    path: appDist
  },

  devServer: {
    port: 3030,
    historyApiFallback: true,
    inline: true
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: [appSrc, appLib]
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": 'React',
    "react-dom": 'ReactDOM',
    //"uikit": 'UIkit'
  }
}
