import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

import { registerMicroApps, start } from 'qiankun'

console.log(process.env.NODE_ENV)

import  './permission.js'
const apps = [
  // {
  //   name: 'sub-ui',
  //   entry: '//192.168.0.107:3003',
  //   container: '#subUiDom1',
  //   activeRule: '/subui',
  //   props: {
  //     mainRouter: router
  //   }
  // },
  {
    name: 'vue',
    entry: process.env.NODE_ENV == 'development' ? '//localhost:3001/child/' : '/child/',
    container: '#subUiDom2',
    activeRule: '/vue',
  },
  // {
  //   name: 'vue3',
  //   entry: '//localhost:3002',
  //   container: '#subUiDom3',
  //   activeRule: '/vue3',
  // },
]
registerMicroApps(apps);
start()


let app;




function render(props = {}) {
  const { container } = props;
  app = createApp(App)
  app.use(ElementPlus)
  app.use(router)
  app.mount(container?container.querySelector('#app'):'#app')
}


render();


