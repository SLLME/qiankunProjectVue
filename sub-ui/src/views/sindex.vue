<template>
  <h1>sub-ui ---- s-index</h1>
  <img alt="Vue logo" src="../assets/logo.png">

  <h3>子组件：localhost:8080</h3>
  <el-button type="primary">我是 ElButton</el-button>
  <h3> 子应用接收到的主题配置：</h3>
  <div style="width: 500px; word-break: break-all; margin: 10px auto;">
    {{ mainAppProps }}
  </div>
  <el-button @click="doRequest">请求用户信息数据</el-button>
  <div>
    {{  }}
  </div>
</template>

<script>
import request from '@/utils/request';
import { ElMessage } from 'element-plus'

export default {
  name: 's_index',
  components: {
  },
  setup(){

    const doRequest =()=>{
      request({
        url: '/api/admin/sys/user/userInfo',
        method: 'GET'
      }).then(({data})=>{
        console.log('res', data)
        ElMessage({
          type:'success',
          message: data.msg + data.data.fullName
        })
      })
    }

    return {
      mainAppProps: localStorage.getItem('sub-theme'),
      doRequest
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
