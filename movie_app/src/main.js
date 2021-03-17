// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './stores'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'

Vue.component('Loading',Loading)
Vue.component('Scroller',Scroller)
Vue.use(Mint)
Vue.prototype.axios=axios;
Vue.config.productionTip = false;
Vue.filter('setWH',(url,arg)=>{
	return url.replace(/w\.h/,arg);
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
