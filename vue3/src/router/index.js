const routes = [
  { path: '/home', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About') },
  {
    path: '',
    redirect: '/home'
  },
];

export default routes;
