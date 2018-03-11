const express = require('express')
const webpack = require('webpack')

const config = require('./webpack.config')

const compiler = webpack(config)
const port = 3030

const serverOptions = {
  contentBase: `http://localhost:${port}`,//path.join(__dirname, '..', 'dist'),
  compress: true,
  quiet: true,
  noInfo: true,
  inline: true,
  lazy: false,
  publicPath: `http://localhost:${port}`,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  historyApiFallback: true
}

const app = express()

app.use(require('webpack-dev-middleware')(compiler, serverOptions))

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port)
  }
})
