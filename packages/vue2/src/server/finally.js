const express = require("express");
// const Vue = require("vue");
const fs = require('fs')
const path = require('path')

// 创建express实例和vue实例
const app = express();
// 创建渲染器
const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle = require('../../dist/server/vue-ssr-server-bundle.json');
const clientManifest = require('../../dist/client/vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8'), // 宿主模板文件
  clientManifest
})

// 中间件处理静态文件请求
app.use(express.static(path.resolve(__dirname, '../../dist/client'), { index: false }))
// app.use(express.static('../dist/client'))

// 路由处理交给vue
app.get("*", async (req, res) => {
  try {
    const context = {
      url: req.url,
      title: 'ssr test',
      data: 'ssr'
    }

    const html = await renderer.renderToString(context);
    // eslint-disable-next-line no-console
    console.log(html);
    res.send(html);
  } catch (error) {
    console.log(error)
    res.status(500).send("服务器内部错误");
  }
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("渲染服务器启动成功");
});