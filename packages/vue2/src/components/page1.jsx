export default {
  data() {
    return {
      name: 123
    }
  },
  methods: {
    handleInput(e) {
      console.log(e)
      this.name = e.target.value
    }
  },
  render() {
    return (
      <div>
        <p>page1</p>
        <input value={this.name} onInput={(e) => this.handleInput(e)}/>
        <p>{this.name}</p>
        <button onClick={() => console.log('click')}>btn</button>
      </div>
    )
  }
}