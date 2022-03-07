import { defineComponent, onMounted } from "vue"
import compdata from './views/data'

export default defineComponent({
  components: {compdata},
  setup() {
    onMounted(() => {
      console.log(123)
    })
    return () => <div>Hello world!
      <router-link to='/hello'>hello</router-link>
      <router-link to='/data'>data</router-link>
      <router-view></router-view>
      {/* <compdata></compdata> */}
    </div>
  }
})
