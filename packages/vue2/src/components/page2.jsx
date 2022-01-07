
import styles from './page2.module.css'
export default {
  // render() {
  //   return (
  //     <div>page2</div>
  //   )
  // }
  data() {
    return {
      name: 123
    }
  },
  methods: {
    handleClick(e) {
      console.log(e)
    }
  },
  render() {
    return (
      <div>
        <p class={styles.red}>page2</p>
      </div>
    )
  }
}