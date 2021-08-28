import request from '../../utils/request.js'
const state={
	categoryList:[],
}
const mutations={
	SETCATEGORYLIST(state,categoryList){
		state.categoryList = categoryList;
	}
}
const actions={
	async reqCategoryList({commit}){
		const res = await request('/getCategoryData')
		commit('SETCATEGORYLIST',res.data);
	}
}
const gitters = {
	
}

export default {
	state,
	mutations,
	actions,
	gitters,
}