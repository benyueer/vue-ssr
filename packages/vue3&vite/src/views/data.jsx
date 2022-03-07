import { defineComponent, onMounted } from "vue"

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log(123)
    })
    return () => <div>data</div>
  }
})