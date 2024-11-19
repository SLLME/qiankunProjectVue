
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [
  {
    path: '/m_index',
    name: 'Mapp',
    component: () => import('@/views/sindex.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/m_template',
    name: 'Mtemplate',
    component: () => import('@/views/stemplate.vue'),
    meta: {
      hidden: true,
    },
  },
  // {
  //   path: '/sub-ui/*',
  //   component: () => import('@/views/sub.vue')
  // },
  {
    path: '',
    redirect: '/m_index'
  },
  {
    path: '/mtest',
    name: 'Mtest',
    component: () => import('@/views/sub.vue'),
  }
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
// }





const router = createRouter({
  // hash路由配置base无效，收到添加
  // base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue/' : '/',
  history: createWebHistory('/'),
  routes
})


export default router;