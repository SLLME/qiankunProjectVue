<template>
  <div>
    <el-menu :router="false" mode="horizontal" @click="menuClick">
      <el-menu-item index="/" :url="'/'">首页</el-menu-item>
      <el-menu-item index="/mtest" url="/mtest">首页2</el-menu-item>
      <el-menu-item index="/vue" url="/vue" isSub="true">vue2子应用</el-menu-item>
      <el-menu-item index="/sub-ui" url="/subui" isSub="true">vue3子应用</el-menu-item>
      <el-menu-item index="/vue3" url="/vue3" isSub="true">vue3子应用(version 2)</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="subUiDom1"></div>
    <div id="subUiDom2"></div>
    <div id="subUiDom3"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    menuClick(item) {
      console.log(item);
      if (item.target.getAttribute("isSub")) {
        window.history.replaceState(null, '', item.target.getAttribute("url"))
      } else {
        this.$router.push(item.target.getAttribute("url"))
      }
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
