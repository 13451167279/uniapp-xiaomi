<template>
	<view class="cateContanier">
		<view class="header">
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<text class="text">搜索商品名称</text>
			</view>
		</view>
		<view class="main">
			<!-- 左边导肮 -->
			<scroll-view class="navScroll" scroll-y="true" enable-flex>
				<view class="scrollItem">
					<view class="navItem ">推荐</view>
					<view class="navItem active">小米手机</view>
					<view class="navItem ">Ridmi手机</view>
					<view class="navItem ">推荐</view>
					<view class="navItem active">小米手机</view>
					<view class="navItem ">Ridmi手机</view>
					<view class="navItem ">推荐</view>
					<view class="navItem active">小米手机</view>
					<view class="navItem ">Ridmi手机</view>
					<view class="navItem ">推荐</view>
					<view class="navItem active">小米手机</view>
					<view class="navItem ">Ridmi手机</view>
					<view class="navItem ">推荐</view>
					<view class="navItem active">小米手机</view>
					<view class="navItem ">Ridmi手机</view>
					<view class="navItem ">推荐</view>
					<view class="navItem active">小米手机</view>
					<view class="navItem ">Ridmi手机</view>
				</view>
			</scroll-view>
			<!-- 右边滚动 -->
			<scroll-view class="mainScroll" scroll-y="true" enable-flex>
				<view class="scrollItem">
					<view class="mainImg"><image src="../../static/images/bj.jpg" mode=""></image></view>

					<!-- 头部导航 -->
					<scroll-view class="navList" scroll-x="true" enable-flex>
						<view class="scrollItem">
							<view class="nav">小米数字系列</view>
							<view class="nav">小米数字系列</view>
							<view class="nav">小米数字系列</view>
							<view class="nav">小米数字系列</view>
							<view class="nav">小米数字系列</view>
						</view>
					</scroll-view>

					<!-- 商品列表 -->
					<view class="goodsFloor">
						<view class="goodsTitle">小米数字系列</view>
						<view class="gootsList">
							<view class="goods">
								<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png?w=800&h=800" mode=""></image>
								<view class="goodsInfo">
									<view class="name">小米11Ultra</view>
									<view class="sellInfo">
										<text class="price">4999</text>
										<text class="tag">赠</text>
									</view>
								</view>
							</view>
						</view>
						<view class="gootsList">
							<view class="goods">
								<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png?w=800&h=800" mode=""></image>
								<view class="goodsInfo">
									<view class="name">小米11Ultra</view>
									<view class="sellInfo">
										<text class="price">4999</text>
										<text class="tag">赠</text>
									</view>
								</view>
							</view>
						</view>
						<view class="gootsList">
							<view class="goods">
								<image src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cea1ff3517387569b7f59fc2b7d01d30.png?w=800&h=800" mode=""></image>
								<view class="goodsInfo">
									<view class="name">小米11Ultra</view>
									<view class="sellInfo">
										<text class="price">4999</text>
										<text class="tag">赠</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 商品列表简单信息 -->
					<view class="goodsFloor_1">
						<view class="title">小米手机配件</view>
						<view class="goodsList">
							<view class="goods">
								<image src="../../static/images/1.jpg" mode=""></image>
								<text class="name">无线冲</text>
							</view><view class="goods">
								<image src="../../static/images/1.jpg" mode=""></image>
								<text class="name">无线冲</text>
							</view><view class="goods">
								<image src="../../static/images/1.jpg" mode=""></image>
								<text class="name">无线冲</text>
							</view><view class="goods">
								<image src="../../static/images/1.jpg" mode=""></image>
								<text class="name">无线冲</text>
							</view><view class="goods">
								<image src="../../static/images/1.jpg" mode=""></image>
								<text class="name">无线冲</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="stylus">
.cateContanier
	height 100%
	background-color #FFFFFF
	.header
		height 100rpx
		display flex
		align-items center
		.search
			margin-left 34rpx
			display flex
			color #A6A6A6
			line-height 64rpx
			width 90%
			background-color #F2F2F2
			border-radius 30rpx
			.iconfont
				width 64rpx
				height 64rpx
				text-align center
				font-size 40rpx
			.text
				font-size 28rpx
				margin-left 8rpx
.main
	display flex
	.navScroll
		width 160rpx
		height calc(100vh - 100rpx)
		.scrollItem
			width 160rpx
			.navItem
				position relative
				width 160rpx
				height 94rpx
				color #666666
				font-size 26rpx
				font-weight 500
				text-align center
				line-height 94rpx
				&.active
					color #333333
					font-weight 600
					&::before
						content ''
						width 5rpx
						height 30rpx
						background-color #FF6900
						position absolute
						left 0
						top 50%
						transform translateY(-50%)
	.mainScroll
		height calc(100vh - 100rpx)
		flex 1
		padding 0 20rpx 0 45rpx
		.scrollItem
			.mainImg
				width 510rpx
				height 153rpx
				image
					width 510rpx
					height 153rpx
					border-radius 10rpx
			.navList
				height 94rpx
				width 520rpx
				display flex
				border-bottom 2rpx solid #EBEBEB
				.scrollItem
					display flex
					font-size 24rpx
					align-items center
					.nav
						white-space nowrap
						border-radius 8rpx
						background-color #efefef
						padding 3rpx 10rpx
						margin-right 34rpx
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
								width 46rpx
								height 26rpx
								color #C69768
								font-size 24rpx
								line-height 26rpx
								text-align center
								border 1px solid #C69768
								border-radius 6rpx
			.goodsFloor_1
				margin-top 30rpx
				.title
					width 525rpx
					height 66rpx
					line-height 66rpx
					font-size 30rpx
					font-weight 700
					color #333333
				.goodsList
					display flex
					flex-wrap wrap
					.goods
						display flex
						align-items center
						width 33.3333%
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
					
.navScroll
	margin 20
</style>
