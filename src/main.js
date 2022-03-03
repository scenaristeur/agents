import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SolidPodPlugin from './plugins/solid-pod';
Vue.use(SolidPodPlugin, {store: store});
import SolidDataPlugin from './plugins/solid-data';
Vue.use(SolidDataPlugin, {store: store});

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import * as VueThreejs from 'vue-threejs'
// import VueThreejs from '@'
Vue.use(VueThreejs)

import VueFab from 'vue-float-action-button'

Vue.use(VueFab,  {
  // opitons Optional Alibaba iconfont icon or MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} )

import VueGun from 'vue-gun';
import SEA from 'gun/sea'; // Required for SEA functions and user authentication
Vue.use(VueGun, {
  //  gun: gun // must be passed in at `gun` key
   peers: [/*'http://localhost:9090/gun',*/ 'https://gun-manhattan.herokuapp.com/gun'/*, 'http://gunjs.herokuapp.com/gun/'*/] // run gun-starter-app on port 9090
});

Vue.use(SEA)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
