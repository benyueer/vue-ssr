import { d as defineComponent, c as createVNode, a as createTextVNode } from "./vendor.6ab5482a.js";
var hello = defineComponent({
  setup() {
    return () => createVNode("div", null, [createTextVNode("hello")]);
  }
});
export { hello as default };
