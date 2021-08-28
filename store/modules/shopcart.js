import request from '../../utils/request.js'
const state = {
	recommendList: [],
	cartList: [
		{
			"count": 2,
			"isChecked": true,
			"action": {
				"log_code": "bpm=83.247.3881503.1&uni=8.1242&next=6.64.2.13649&tag=8.1244",
				"login": "N",
				"path": "13649",
				"type": "product",
				"uri": "/pages/product/index"
			},
			"cat_id": 0,
			"comments_total": "",
			"is_multi_price": true,
			"is_stock": true,
			"labels": [
				"赠"
			],
			"market_price": "5999",
			"name": "小米11 Ultra",
			"price": "5499",
			"product_desc": "<font color='#ff4a00'>「买赠小米定制T恤；信用卡分期至高立省158元；赠149元Air2 SE蓝牙耳机（请选择“Air2 SE耳机套装”下单） 」</font>1/1.12''GN2｜128°超广角｜120X超长焦｜2K四微曲屏｜骁龙888｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器",
			"product_desc_origin": "1/1.12''GN2｜128°超广角｜120X超长焦｜2K四微曲屏｜骁龙888｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器",
			"product_id": 13649,
			"puzzle_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png?w=800&h=800",
			"satisfy_per": ""
		},
		{
			"count": 3,
			"isChecked": true,
			"action": {
				"log_code": "bpm=83.247.3881503.2&uni=8.1242&next=6.64.2.13650&tag=8.1244",
				"login": "N",
				"path": "13650",
				"type": "product",
				"uri": "/pages/product/index"
			},
			"cat_id": 0,
			"comments_total": "",
			"is_multi_price": true,
			"is_stock": true,
			"labels": [
				"赠"
			],
			"market_price": "4999",
			"name": "小米11 Pro",
			"price": "4469",
			"product_desc": "<font color='#ff4a00'>「买赠小米定制T恤；信用卡分期至高立省158元；赠129元福禄瘦T恤（请选择“福禄瘦T恤套装”下单） 」</font>1/1.12''GN2｜骁龙888｜2K四微曲屏｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器",
			"product_desc_origin": "1/1.12''GN2｜骁龙888｜2K四微曲屏｜IP68级防水｜67W 有线闪充｜67W 无线闪充｜10W 无线反充｜5000mAh超大电池｜LPDDR5｜WiFi6（增强版）｜哈曼卡顿音频认证｜立体声双扬声器",
			"product_id": 13650,
			"puzzle_url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2237d83d46b43a7dca0b5fb6db2a9700.png?w=800&h=800",
			"satisfy_per": ""
		},
	]
}
const mutations = {
	SET_RECOMENDLIST(state, recommendList) {
		state.recommendList = recommendList;
	},
	// 添加购物车
	ADD_CART(state, obj) {
		state.cartList.push(obj);
	},
	//删除购物车
	DELETE_CART(state,index){
		state.cartList.splice(index,1)
	}
	
}
const actions = {
	async reqRecommendList({
		commit
	}) {
		const res = await request('/getShopcartData')
		commit('SET_RECOMENDLIST', res.data.recom_list)
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
