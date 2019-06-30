import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUi from 'mint-ui';


//Axios
import Axios from 'axios';
Vue.prototype.$axios=Axios;
Vue.use(MintUi)
Vue.config.productionTip = false
import 'mint-ui/lib/style.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
