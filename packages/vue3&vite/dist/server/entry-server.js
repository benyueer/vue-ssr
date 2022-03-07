"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var vueRouter = require("vue-router");
var serverRenderer = require("vue/server-renderer");
require("path");
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = vue.useSSRContext();
    (ssrContext.modules || (ssrContext.modules = new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const __default__$1 = vue.defineComponent({
  setup() {
    return () => vue.createVNode("div", null, [vue.createTextVNode("Hello world!"), vue.createVNode(vue.resolveComponent("router-view"), null, null)]);
  }
});
const __moduleId$1 = "src/App.jsx";
ssrRegisterHelper(__default__$1, __moduleId$1);
const routes = [
  {
    name: "hello",
    path: "/hello",
    component: () => Promise.resolve().then(function() {
      return hello;
    })
  }
];
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes
  });
}
function createApp() {
  const app = vue.createSSRApp(__default__$1);
  const router2 = createRouter();
  app.use(router2);
  return { app, router: router2 };
}
async function render(url, manifest) {
  const { app } = createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  return html;
}
const __default__ = vue.defineComponent({
  setup() {
    return () => vue.createVNode("div", null, [vue.createTextVNode("hello")]);
  }
});
const __moduleId = "src/views/hello.jsx";
ssrRegisterHelper(__default__, __moduleId);
var hello = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __default__
});
exports.render = render;
