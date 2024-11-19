import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];



// if(window.__POWERED_BY_QIANKUN__){
//   let prefix = '/child'
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


export default routes;
