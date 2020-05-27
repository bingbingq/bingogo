<template>
  <div id="app">
    <BggButton />
  </div>
</template>

<script>
import BggButton from '../packages/button/src/index.vue'
export default {
  name: 'App',
  components: {
    BggButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
