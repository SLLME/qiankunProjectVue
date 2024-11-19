<template>
  <h1>这是main应用的主页</h1>
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
