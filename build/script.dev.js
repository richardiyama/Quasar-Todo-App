if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

require('colors')

var
  path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  env = require('./env-utils'),
  config = require('../config'),
  opn = require('opn'),
  proxyMiddleware = require('http-proxy-middleware'),
  webpackConfig = require('./webpack.dev.conf'),
  app = express(),
  port = process.env.PORT || config.dev.port,
  uri = 'http://localhost:' + port

console.log(' Starting dev server with "' + (process.argv[2] || 'mat').bold + '" theme...')
console.log(' Will listen at ' + uri.bold)
if (config.dev.openBrowser) {
  console.log(' Browser will open when build is ready.\n')
}

var compiler = webpack(webpackConfig)


var proxyTable = config.dev.proxyTable

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})


app.use(require('connect-history-api-fallback')())


app.use(devMiddleware)


app.use(hotMiddleware)


var staticsPath = path.posix.join(webpackConfig.output.publicPath, 'statics/')
app.use(staticsPath, express.static('./src/statics'))


app.use(express.static(env.platform.cordovaAssets))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  
  if (config.dev.openBrowser) {
    devMiddleware.waitUntilValid(function () {
      opn(uri)
    })
  }
})
