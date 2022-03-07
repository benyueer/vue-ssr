import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const state = reactive({
      msg: 'hello'
    })
    return () => (
      <>
        <div>{state.msg}</div>
        <input type="text" vModel={state.msg} />
      </>
    )
  }
})