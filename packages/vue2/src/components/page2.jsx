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
  template: `
    <div>
        <p>page2</p>
        <input v-model="this.name"/>
        <p>{this.name}</p>
        <button @click="handleClick">btn</button>
      </div>
  `
}