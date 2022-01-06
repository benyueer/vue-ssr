const Vue = require('vue')
const server = require('express')()
const path = require('path')
const template = require('fs').readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({
  template
})

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

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