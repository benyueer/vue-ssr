const server = require('express')()
const createApp = require('./vueFactory')
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new createApp()

  renderer.renderToString(app, {title: 'template', data: 'this is template'}, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end(html)
  })
})

server.listen(8080)