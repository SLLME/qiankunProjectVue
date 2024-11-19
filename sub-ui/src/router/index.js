
// import {
//   createRouter
// } from 'vue-router'

const routes = [
  {
    path: '/s_index',
    name: 'New App',
    component: () => import('@/views/sindex.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/s_template',
    name: 'New Telplate',
    component: () => import('@/views/stemplate.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '',
    redirect: '/s_index'
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test.vue'),
    meta: {
      hidden: true,
    },
  },
];

// if(window.__POWERED_BY_QIANKUN__){
//   let prefix = '/sub-ui'
//   routes.forEach(item=>{
//     item.path = prefix + item.path;
//     if(item.redirect){
//       item.redirect = prefix + item.redirect;
//     }
//   })
//   console.log('子allRouters=',routes)
// }else {
//   console.log('独立运行子应用')
// }





// const router = createRouter({
//   // hash路由配置base无效，收到添加
//   // base: window.__POWERED_BY_QIANKUN__ ? '/sub-ui' : '/',
//   // base: '/sub-ui/',
//   history: createWebHistory( window.__POWERED_BY_QIANKUN__ ? '/subui' : '/'),
//   routes
// })


export default routes;