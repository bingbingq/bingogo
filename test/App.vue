<template>
  <div id="app">
    <BggButton disabled/>
    <BggAlert />
  </div>
</template>

<script>
import BggButton from '../packages/button/src/index.vue'
import BggAlert from '../packages/alert/src/index.vue'
export default {
  name: 'App',
  components: {
    BggButton,
    BggAlert
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
