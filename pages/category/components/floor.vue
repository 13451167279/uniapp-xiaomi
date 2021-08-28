<template>
	<!-- 商品列表 -->
	<view class="goodsFloor">
		<view class="gootsList" v-if="cateGoods.product_list.length > 0">
			<view class="goodsTitle">{{ cateGoods.title }}</view>
			<view class="goods" @click="toDetail({product})" v-for="product in cateGoods.product_list" :key="product_id">
				<image :src="product.puzzle_url" mode=""></image>
				<view class="goodsInfo">
					<view class="name">{{ product.name }}</view>
					<view class="sellInfo">
						<text class="price">{{ product.price }}</text>
						<text v-if="product.labels.length > 0" class="tag">{{ product.labels[0] }}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-else class="goodsFloor_1">
			<view class="title" >{{cateGoods.title}}</view>
			<view class="goodsList">
				<view class="goods" v-for="(item,index) in cateGoods.items" :key="index">
					<image :src="item.img_url" mode=""></image>
					<text class="name">{{item.product_name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['cateGoods'],
	data() {
		return {};
	},
	mounted() {
		
	},
	methods:{
		toDetail(goods){
			wx.setStorageSync('goods_key',goods.product);
			wx.navigateTo({
				url:'/pages/detail/detail',
			})
		}
	}
};
</script>

<style lang="stylus">
.goodsFloor
	margin-top 30rpx
	.goodsTitle
		width 525rpx
		height 66rpx
		line-height 66rpx
		font-size 30rpx
		font-weight 700
		color #333333
	.goods
		display flex
		align-items center
		padding 6rpx
		margin-bottom 16rpx
		image
			width 140rpx
			height 140rpx
		.goodsInfo
			margin-left 10rpx
			font-size 30rpx
			color #797979
			font-weight 500
			.name
				margin 0 0 10rpx 4rpx
			.sellInfo
				display flex
				align-items center
				.price
					&::before
						content '￥'
						font-size 24rpx
						color #333333
					&::after
						content '起'
						font-size 24rpx
						color #333333
				.tag
					margin 0rpx 20rpx
					width 55rpx
					height 26rpx
					color #C69768
					font-size 24rpx
					line-height 26rpx
					text-align center
					border 1px solid #C69768
					border-radius 6rpx
.goodsFloor_1
	width 525rpx
	margin-top 30rpx
	.title
		width 525rpx
		height 66rpx
		line-height 66rpx
		font-size 30rpx
		font-weight 700
		color #333333
	.goodsList
		width 100%
		display flex
		flex-wrap wrap
		.goods
			display flex
			align-items center
			width 30.3333%
			margin 21rpx 0
			display flex
			flex-direction column
			image
				margin 0 35rpx
				width 104rpx
				height 104rpx
			.name
				margin-top 29rpx
				font-size 24rpx
				color #797979
</style>
