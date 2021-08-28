import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.js'
import category from './modules/category.js'
import shopcart from './modules/shopcart.js'

Vue.use(Vuex);

const state={
	
}
const mutations={
	
}
const actions={
	
}
const gitters = {
	
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	gitters,
	modules:{
		home,
		category,
		shopcart
	}
})
