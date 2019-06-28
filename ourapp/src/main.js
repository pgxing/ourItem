import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUi from 'mint-ui';
import store from './store/store'

//Axios
import Axios from 'axios';
Vue.prototype.$axios=Axios;

Vue.use(MintUi)
Vue.config.productionTip = false
import 'mint-ui/lib/style.css'
new Vue({
<<<<<<< HEAD
  router,store,
=======
  router,
  store,
>>>>>>> 977606f0297173ba91c42c6b72b1ff71522b4625
  render: h => h(App)
}).$mount('#app')
