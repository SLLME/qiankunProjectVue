import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routes from './router'
import './public-path'
let app;
let router = null;
let history = null;


function render(props = {}) {
  const { container, mainRouter } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/subui' : '/');
  router = createRouter({
    history,
    routes,
  });

  app = createApp(App)
  app.use(ElementPlus)
  app.use(router)
  app.mount(container?container.querySelector('#app'):'#app')
  // 将主应用的函数挂到原生上方便调用
  app.config.globalProperties.$mainRouter = mainRouter;
}


export async function bootstrap(props) {
  console.log('子应用==[vue] vue app bootstraped', props);
  localStorage.setItem('sub-theme', JSON.stringify(props.theme))
}
export async function mount(props) {
  console.log('子应用==vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  /** 必须得销毁，不然导致页面路由会带有当前子应用的 activeRule */
  app.unmount();
  app._container.innerHTML = '';
  app = null;
  router = null;
  history.destroy();
}
export async function update(props) {
  console.log('update props', props);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('独立运行子应用')
  render();
}


