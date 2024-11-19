<template>
  <div>
    <h1>sub-ui app</h1>
    <el-button @click="handlejumpMain">点击跳转到主应用的主页</el-button>

    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/s_template">Home</router-link> |
      <router-link to="/test">About</router-link>
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    handlejumpMain() {
      this.$mainRouter.push({
        path: '/',
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
