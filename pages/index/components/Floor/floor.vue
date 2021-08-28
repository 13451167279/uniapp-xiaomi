<template>
	<view class="floor">
		<view class="headerImg"><image :src="floorGoodsList.headerImg[0].img_url" mode=""></image></view>
		<view class="goodsList">
			<view class="goods" @click="toDetail(goods)"  v-for="goods in floorGoodsList.goodsList" :key="goods.product_id">
				<view class="goodsImg">
					<image :src="goods.img_url" mode=""></image>
				</view>
				<view class="goodsInfo">
					<view class="name">{{goods.product_name}}</view>
					<view class="desc">{{goods.product_brief}}</view>
					<view class="price">
						￥{{goods.product_price}}起
						<text>￥{{goods.product_org_price}}</text>
					</view>
					<view class="btn"><button>立即购买</button></view>
				</view>
			</view>
		</view>
		<view class="more">更多{{floorGoodsList.title}}产品 ></view>
		<view class="null">
			
		</view>
	</view>
</template>

<script>
export default {
	props:['floorGoodsList'],
	data() {
		return {};
	},
	methods:{
		toDetail(goods){
			// wx.setStorageSync('goods_key',goods);
			// wx.navigateTo({
			// 	url:'/pages/detail/detail',
			// })
		}
	}
};
</script>

<style lang="stylus">
.floor
	.headerImg
		width 100%
		height 460rpx
		margin-bottom 12rpx
		image
			width 100%
			height 460rpx
	.goodsList
		padding 0 12rpx
		display flex
		justify-content space-between
		flex-wrap wrap
		.goods
			width 358rpx
			.goodsImg
				width 358rpx
				height 292rpx
				image
					width 356rpx
					height 292rpx
			.goodsInfo
				padding 21rpx 28rpx
				text-align center
				font-size 28rpx
				display flex
				flex-direction column
				.name,.desc
					white-space: nowrap;    /*规定文本不换行**/
					text-overflow: ellipsis;  /**显示省略符号来代表被修剪的文本。*/
					overflow: hidden;
				.desc
					color #757575
				.price
					color #EA625B
					>text
						color #757575
						text-decoration line-through
				.btn
					button
						width 208rpx
						height 60rpx
						background-color #EA625B
						color #FFFFFF
						line-height 60rpx
						font-size 26rpx
						font-weight 600
	.more
		height 104rpx
		width 100%
		font-size 28rpx
		text-align center
		line-height 104rpx
		background-color #FFFFFF
	.null
		width 100%
		height 12rpx
		background-color #F5F5F5
</style>
