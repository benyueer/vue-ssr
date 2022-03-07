<template>
  <div id="app">
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-link to="/page3">page3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    console.log("App mounted.")
  },
}
</script>

<style>
</style>
