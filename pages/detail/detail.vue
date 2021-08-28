<template>
	<view class="detailContainer">
		<scroll-view class="mainScroll" scroll-y="true" enable-flex>
			<view class="scrollItem">
				<!-- 轮播图 -->
				<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item"><image :src="goodsInfo.puzzle_url"></image></view>
					</swiper-item>
				</swiper>
				<!-- 商品详情 -->
				<view class="detail">
					<view class="price">￥{{ goodsInfo.price }}</view>
					<view class="name">{{ goodsInfo.name }}</view>
					<view class="desc">{{ goodsInfo.product_desc_origin }}</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部加入购物车 -->
		<view class="cart">
			<view class="cartItem" @click="toHome">
				<image src="../../static/images/tabbar/icon-home.c1947eda40.png" mode=""></image>
				<view>首页</view>
			</view>
			<view class="cartItem">
				<image src="../../static/images/kefu.png" mode=""></image>
				<view>客服</view>
			</view>
			<view class="cartItem" @click="toShopCart">
				<image src="../../static/images/tabbar/icon-cart.585c3aa4d3.png" mode=""></image>
				<view>购物车</view>
			</view>
			<view class="add" @click="addShopCart">加入购物车</view>
			<view class="buy">立即购买</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			goodsInfo: {}
		};
	},

	mounted() {
		this.goodsInfo = wx.getStorageSync('goods_key');
	},
	computed: {
		...mapState({
			cartList:state=>state.shopcart.cartList,
		})
	},
	methods: {
		toHome() {
			wx.reLaunch({
				url: '/pages/index/index'
			});
		},
		toShopCart() {
			wx.reLaunch({ url: '/pages/shopcart/shopcart' });
		},

		addShopCart() {
			let obj = this.cartList.find(item => item.product_id === this.goodsInfo.product_id);
			if (obj) {
				// 代表购物车列表已经存在这个商品
				obj.count++; 
				obj.isCheck = true;
			} else {
				// 购物车列表不存在这个商品 把这个商品，添加到购物车列表当中
				obj = this.goodsInfo;
				this.$set(obj, 'count', 1);
				this.$set(obj, 'isChecked', true);
				this.$store.commit('ADD_CART', obj);
			}
			wx.showToast({
				title:"添加购物车成功",
				icon:'success'
			})
		}
	}
};
</script>

<style lang="stylus">
.detailContainer
	.mainScroll
		height calc(100vh - 94rpx)
		.banner
			height 820rpx
			width 100%
			.swiper-item
				image
					height 820rpx
					width 100%
		.detail
			margin-top 20rpx
			width 100%
			box-sizing border-box
			padding 0 20rpx
			.price
				font-size 40rpx
				color #FF6A02
				font-weight 700
			.name
				font-size 30rpx
				font-weight 500
				color #000000
				margin 10rpx 4rpx
			.desc
				font-size 26rpx
				color #000000
				padding 10rpx 20rpx 10rpx 0
	.cart
		font-size 26rpx
		height 94rpx
		display flex
		align-items center
		position fixed
		bottom 0
		padding 0 10rpx
		background-color #FFFFFF
		.cartItem
			display flex
			flex-direction column
			align-items center
			justify-content space-around
			width 100rpx
			height 90rpx
			image
				width 40rpx
				height 40rpx
			>view
				font-size 26rpx
				text-align center
				color #747474
		.add, .buy
			width 210rpx
			height 75rpx
			line-height 75rpx
			text-align center
			color #FFFFFF
		.add
			background-color #FDC000
			border-top-left-radius 40rpx
			border-bottom-left-radius 40rpx
		.buy
			background-color #FF6C0E
			border-top-right-radius 40rpx
			border-bottom-right-radius 40rpx
</style>
