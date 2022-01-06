<template>
  <div>
    <p>page3</p>
    <input v-model="name" />
    {{name}}
    <button @click="clickHandler">btn</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 123
    }
  },
  methods: {
    clickHandler(e) {
      console.log(e)
    }
  }
}
</script>