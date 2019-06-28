import Vue from 'vue';
import Vuex from 'vuex';

import Detail from './detail/index'
Vue.use(Vuex);
let store=new Vuex.Store({
    modules:{
        Detail
    }
})
export default store