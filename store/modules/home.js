import request from '../../utils/request.js'
const state={
	tabList:[],
	indexAllData:[],
}
const mutations={
	SET_TABLIST(state,tabList){
		state.tabList = tabList;
	},
	SET_INDEXDATA(state,indexAllData){
		state.indexAllData = indexAllData;
	}
}
const actions={
	async reqTabList({commit}){
		const res = await request('/getTabs');
		commit('SET_TABLIST',res.tabs);
	},
	async reqIndexData({commit}){
		const res = await request('/getIndexData');
		const indexAllData = res.data.sections.filter(item=>item.body.items);
		 
		console.log(indexAllData);
		commit('SET_INDEXDATA',indexAllData);
	},
}
const getters = {
	//轮播图列表
	bannerList(state){
		return ((state.indexAllData[0] || {}).body || {}).items || [];
		// return (state.indexAllData[0] && state.indexAllData[0].body.items) || []
	},
	// 图片导航列表
	navImgList(state){
		let arr1 = ((state.indexAllData[1] || {}).body || {}).items || [];
		let arr2 = ((state.indexAllData[2] || {}).body || {}).items || [];
		return arr1.concat(...arr2);
		// return (state.indexAllData[1] && state.indexAllData[1].body.items.concat(...state.indexAllData[2].body.items)) || [];
	},
	// exposure
	exposureList(state){
		return ((state.indexAllData[3] || {}).body || {}).items || [];
		// return (state.indexAllData[3] && state.indexAllData[3].body.items) || [];
	},
	//商品楼层列表
	// 热销爆款
	hotSellList(){
		// 商品标题图片(数据)
		let headerImg  = ((state.indexAllData[4] || {}).body || {}).items || [];
		// 商品列表数据
		let arr1 = ((state.indexAllData[5] || {}).body || {}).items || [];
		let arr2 = ((state.indexAllData[6] || {}).body || {}).items || [];
		let arr3 = ((state.indexAllData[7] || {}).body || {}).items || [];
		let arr4 = ((state.indexAllData[8] || {}).body || {}).items || [];
		let goodsList = arr1.concat(...arr2,...arr3,...arr4);
		return {
			headerImg,
			goodsList
		}
 	},
	// 小米电视
	tvList(){
		let headerImg  = ((state.indexAllData[10] || {}).body || {}).items || [];
		let goodsList = [];
		return {
			headerImg,
			goodsList
		}
	},
	//小米笔记本
	computerList(){
		let headerImg  = ((state.indexAllData[12] || {}).body || {}).items || [];
		let goodsList = ((state.indexAllData[13] || {}).body || {}).items || [];
		return {
			headerImg,
			goodsList
		}
	},
	// 米家智能
	intelligentList(){
		let headerImg  = ((state.indexAllData[15] || {}).body || {}).items || [];
		let goodsList =  [];
		return {
			headerImg,
			goodsList
		}
	},
	
	// 智能好物速递
	expressList(){
		let headerImg  = ((state.indexAllData[17] || {}).body || {}).items || [];
		let goodsList =  [];
		return {
			headerImg,
			goodsList
		}
	},
	
	// 产品图片列表
	imgList(state){
		let arr1 = ((state.indexAllData[19] || {}).body || {}).items || [];
		let arr2 = ((state.indexAllData[20] || {}).body || {}).items || [];
		let arr3 = ((state.indexAllData[21] || {}).body || {}).items || [];
		return arr1.concat(...arr2,...arr3)
	}
}

export default {
	state,
	mutations,
	actions,
	getters,
}