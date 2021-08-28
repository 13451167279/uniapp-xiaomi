<template>
	<view class="cartContainer">
		<view class="header">
			<!-- 返回首页-->
			<text class="iconfont icon-right-copy" @click="toCategory"></text>
			<text class="name">购物车</text>
			<text class="iconfont icon-sousuo"></text>
		</view>
		<scroll-view scroll-y="true" class="mainScroll" enable-flex>
			<view class="scrollItem">
				<!-- 未登录 -->
				<view class="toLogin" v-if="!userInfo.nickName">
					<text class="desc">登录后享受更多优惠</text>
					<text class="go" @click="toLogin">去登录<text class="iconfont icon-right"></text></text>
				</view>
				<!-- 购物车为空 -->
				<view class="cart" v-if="cartList.length ===0">
					<view class="cartNull">
						<image src="../../static/images/cart/cart.png" mode=""></image>
						<text class="text">购物车还是空的</text>
						<view class="goShop" @click="toCategory">去逛逛</view>
					</view>
				</view>
				<!-- 购物车列表 -->
				<view class="cartList" v-else>
					<view class="cartGoods" v-for="(cart,index) in cartList" :key='cart.product_id'>
						<view class="checkImg" @click="checkedCart(cart)" >
							<image v-show='cart.isChecked'   src="../../static/images/cart/check_press.png" mode=""></image>
							<image v-show='!cart.isChecked' src="../../static/images/cart/check_normal.png" mode=""></image>
						</view>
						<view class="goodsImg">
							<image :src="cart.puzzle_url" mode=""></image>
						</view>
						<view class="goodsInfo">
							<text class="name">{{cart.name}}</text>
							<text class="price">售价：{{cart.price}}元</text>
							<view class="count">
								<view class="changeNum">
									<text class="sub iconfont icon-sub" :class="{active:cart.count ===1}" @click="subCartNum(-1,cart)"></text>
									<text class="num">{{cart.count}}</text>
									<text class="add iconfont icon-jiahao" @click="subCartNum(1,cart)"></text>
								</view>
								<text class="del iconfont icon-shanchu3" @click="deleteCart(cart,index)"></text>
							</view>
						</view>
					</view>
				</view>
				<!-- 商品推荐 -->
				<view class="recommend">
					<view class="title">商品推荐</view>
					<view class="recommendGoods">
						<view class="goods" v-for="(recommend,index) in recommendList" :key='index'>
							<image :src="recommend.image_url" mode=""></image>
							<view class="goodsInfo">
								<text class='goodsName'>{{recommend.name}}</text>
								<text class="price">￥{{recommend.price}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="footer">
			<view class="money">
				<view class="checkImg" >
					<image v-show='isAllCheck' @click="checkedAll"  src="../../static/images/cart/check_press.png" mode=""></image>
					<image v-show='!isAllCheck' @click="checkedAll" src="../../static/images/cart/check_normal.png" mode=""></image>
					<text class="num">共 {{checkCartNum}}件 金额：</text>
				</view>
				<text class="allMoney">{{checkAllPrice}}</text>
			</view>
			<view class="toShop" @click="toCategory">
				继续购物
			</view>
			<view class="pay">
				去结算
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
export default {
	data() {
		return {
			isChecked:true,
			userInfo:{},
		};
	},
	mounted(){
		this.userInfo = wx.getStorageSync('userInfo_key')
		// uni.hideTabBar({
		// 	animation:true
		// })
		// 获取推荐数据
		this.getRecommendList();
		if(this.cartList || this.cartList.length ===0)
			wx.hideTabBar({
				animation:true
			})
		else
			wx.showTabBar({
				animation:true
			})
	},
	computed:{
		...mapState({
			cartList:state=>state.shopcart.cartList || [],
			recommendList:state=>state.shopcart.recommendList || []
		}),
		// 计算选择商品件数
		checkCartNum(){
			return this.cartList.reduce((prev,item)=>{
				if(item.isChecked){
					prev += item.count;
				}
				return prev
			},0)
		},
		// 计算总金额
		checkAllPrice(){
			return this.cartList.reduce((prev,item)=>{
				if(item.isChecked){
					prev += item.count * item.price
				}
				return prev
			},0)
		},
		// 是否全选
		isAllCheck(){
			return this.cartList.every(item=>item.isChecked) && this.cartList.length > 0
		}
	},
	methods:{
		getRecommendList(){
			this.$store.dispatch('reqRecommendList')
		},
		toLogin(){
			wx.navigateTo({
				url:'/pages/login/login'
			})
		},
		toCategory(){
			wx.reLaunch({
				url:'/pages/category/category'
			})
		},
		// 点击修改数量
		subCartNum(num,cart){
			cart.count += num;
			cart.count === 0?  cart.count = 1 : cart.count
		},
		// 删除物品
		deleteCart(cart,index){
			wx.showModal({
			  title: `确定删除${cart.name}吗？`,
			  success :(res)=>{
			    if (res.confirm) {
						this.$store.commit('DELETE_CART',index)
			    } 
			  }
			})
		},
		// 修改选择状态
		checkedCart(cart){
			cart.isChecked = !cart.isChecked
		},
		// 点击全选，全不选
		checkedAll(){
			let checked = !this.isAllCheck;
			this.cartList.forEach(item=>
				{
					if(item.isChecked !== checked)
					 item.isChecked = checked
				}
			)
		}
	},
	// watch:{
	// 	 cartList:{
	// 		handler:()=>{
	// 			if(this.cartList &&this.cartList.length ===0)
	// 				wx.hideTabBar({
	// 					animation:true
	// 				})
	// 		},
			
	// 	}
	// }
};
</script>

<style lang="stylus">
@keyframes titelShow
	from
		height 0
		opacity 0
	to
		height 260rpx
		opacity 1
.cartContainer
	position relative
	height 100%
	.header
		height 100rpx
		display flex
		align-items center
		background-color #F2F2F2
		color #666666
		// animation titelShow 0.1s
		.name
			flex 1
			text-align center
			font-weight 500
			font-size 32rpx
		.iconfont
			width 100rpx
			height 100rpx
			line-height 100rpx
			text-align center
			font-size 50rpx
			color #979797
	.mainScroll
		height calc(100vh - 100rpx)
		.toLogin
			height 110rpx
			padding 0 30rpx
			display flex
			justify-content space-between
			align-items center
			.desc
				font-size 28rpx
			.go
				font-size 24rpx
				color #757575
				.iconfont
					font-size 24rpx
		.cart
			// 购物车为空
			.cartNull
				padding 20rpx
				display flex
				align-items center
				justify-content center
				background-color #F2F2F2
				image
					width 80rpx
					height 80rpx
				.text
					font-size 24rpx
					color #979797
					margin 0 20rpx
				.goShop
					font-size 26rpx
					border 3rpx solid #bcbcbc
					padding 0 10rpx
					line-height 42rpx
		// 购物车列表
		
		// 商品推荐
		.cartList
			.cartGoods
				padding 25rpx 0
				display flex
				align-items center
				.checkImg
					margin 0 10rpx
					width 40rpx
					height 40rpx
					image
						width 40rpx
						height 40rpx
				.goodsImg
					width 184rpx
					height 184rpx
					box-sizing border-box
					border 2rpx solid #BCBCBC
					border-radius 10rpx
					image
						width 184rpx
						height 184rpx
						border-radius 10rpx
				.goodsInfo
					margin-left 20rpx
					display flex
					flex-direction column
					.name
						font-size 28rpx
						color #666666
					.price
						padding 10rpx
						font-size 24rpx
						color #999999
					.count
						display flex
						.changeNum
							display flex
							.sub.active
								background-color #FAFAFA
								color #D6D6D6
							.iconfont
								width 62rpx
								height 62rpx
								line-height 62rpx
								text-align center
								background-color #F4F4F4
								color #696969
							.num
								width 61rpx
								height 61rpx
								line-height 62rpx
								text-align center
								background-color #FFFFFF
								border 2rpx solid #EFEFEF
						.del
							width 62rpx
							height 62rpx
							line-height 62rpx
							text-align center
							color #B2B2B2
							margin-left 200rpx
		.recommend
			width 100%
			.title
				text-align center
				width 100%
				height 120rpx
				line-height 120rpx
				font-size 28rpx
				font-weight 600
				color #333333
				margin 0 20rpx
				&::before
					content ''
					display block
					width 100rpx
					border 1rpx solid #6b6b6b
					position relative
					top 50%
					left 180rpx
				&::after
					content ''
					display block
					width 100rpx
					border 1rpx solid #6b6b6b
					position relative
					top: -50%;
					left: 465rpx;
			.recommendGoods	
				width 100%
				display flex
				justify-content space-between
				flex-wrap wrap
				.goods
					// display flex
					// flex-direction column
					image
						width 372rpx
						height 372rpx
					.goodsInfo
						padding 24rpx 30rpx						
						display flex
						flex-direction column
						text-align center
						.goodsName
							width 310rpx
							font-size 26rpx
							color #333333
							display -webkit-box
							-webkit-box-orient vertical
							-webkit-line-clamp 1   /** 多行文本溢出...*/
							overflow hidden
						.price
							color #FF6900
							
							
.footer
	width 100%
	height 104rpx
	display flex
	position absolute
	bottom 0
	left 0
	background-color #FFFFFF
	align-items center
	.money,.toShop,.pay
		width 33.3333%
		text-align center
		
	.money
		display flex
		flex-direction column
		background-color #FFFFFF
		position relative
		.checkImg
			image
				position absolute
				left 10rpx
				width 40rpx
				height 40rpx
		.num 
			margin-left 30rpx
			font-size 26rpx
			color #666666
		.allMoney
			font-size 32rpx
			margin-top 6rpx
			color #FF6900
			font-weight 600
	.toShop
		background-color #F4F4F4
		height 104rpx
		line-height 104rpx
		font-size 28rpx
		color #696969
	.pay
			background-color #FF6900
			height 104rpx
			line-height 104rpx
			
			
</style>
