<template>
	<view class="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<text class="desc">搜索商品名称</text>
			</view>
			<view class="user"><text class="iconfont icon-yonghu"></text></view>
		</view>
		<!-- 导航 -->
		<view class="navList" v-show="isShow">
			<view class="navItem" :class="{active:tab.page_id===0}" v-for="tab in tabList" :key='tab.page_id'>{{tab.name}}</view>
			<view class="navItem" v-if="tabList.length>0" @click="isShow = false"><text class="iconfont icon-down"></text></view>
		</view>
		<!-- 导航隐藏部分 -->
		<view class="hiddenNav" v-show="!isShow">
			<view class="navTitle">
				<view>全部</view>
				<text class="iconfont icon-up" @click="isShow = true"></text>
			</view>
			<view class="navCotent">
				<view class="item":class="{active:tab.page_id===0}" v-for="tab in tabList" :key='tab.page_id'>{{tab.name}}</view>
			</view>
		</view>
		<!-- 主体内容 -->
		<scroll-view class="mainScroll" scroll-y="true" enable-flex>
			<view class="scrollItem">
				<!--轮播 -->
				<swiper class="banner" indicator-color='#C9A8A9' indicator-active-color="#ffffff"	 :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="banner in bannerList" :key='banner.material_id'>
						<view class="swiper-item">
							<image class="bannerImg" :src="banner.img_url" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
				<!--  导航图片-->
				<view class="navImg">
					<view class='img' v-for="item in navImgList" :key='item.material_id'>
						<image :src="item.img_url" mode=""></image>
					</view>
				</view>
				<view class="exposure">
					<view class="bigImg"><image  :src="exposureList[0].img_url" mode=""></image></view>
					<view  class="smallImg"><image :src="exposureList[1].img_url" mode=""></image></view>
					<view  class="smallImg"><image :src="exposureList[2].img_url" mode=""></image></view>
				</view>
				<!-- 商品楼层 -->
				<!-- 热销爆款 -->
				<Floor :hotSellList='hotSellList' title='小米手机'></Floor>
				<!-- 小米电视 -->
				<Floor :hotSellList='tvList' title='小米电视'></Floor>
				<!-- 小米笔记本 -->
				<Floor :hotSellList='computerList' title='小米笔记本'></Floor>
				<!-- 米家智能 -->
				<Floor :hotSellList='intelligentList' title='米家家电'></Floor>
				<!-- 米家智能 -->
				<Floor :hotSellList='expressList' title='米家智能'></Floor>
				
				<view class="imgList">
					<view class="img" v-for="img in imgList" :key='material_id'>
						<image :src="img.img_url" ></image>
					</view>
				</view>
				
				<view class="footerImg">
					<image :src="indexAllList[22].body.items[0].img_url" ></image>
				</view>
				<view class="about">
					<view class="aboutMain">
						<view class="text">
							了解小米
						</view>
						<text class="iconfont icon-right"></text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import Floor from './components/Floor/floor.vue';
	
import {mapState,mapGetters} from 'vuex';

export default {
	components:{
		Floor,
	},
	data() {
		return {
			isShow: true
		};
	},
	mounted() {
		this.getTabList();
		this.getIndexData();
	},
	methods:{
		getTabList(){
			this.$store.dispatch('reqTabList');
		},
		getIndexData(){
			this.$store.dispatch('reqIndexData');
		}
	},
	computed:{
		...mapState({
			tabList:state=>state.home.tabList || [],
			indexAllList:state=>state.home.indexAllData || [],
		}),
		...mapGetters([
			'bannerList',
			'navImgList',
			'exposureList',
			'hotSellList',
			'tvList',
			'computerList',
			'intelligentList',
			'expressList',
			'imgList',
			])
	}
};
</script>

<style lang="stylus">
@keyframes hiddenShow
	from
		height 0
		opacity 0
	to
		height 260rpx
		opacity 1
.indexContainer
	position relative
	height 100%
	background-color #FFFFFF
	.header
		background-color #F2F2F2
		height 86rpx
		display flex
		align-items center
		.logo
			margin 0 24rpx
			width 60rpx
			height 36rpx
		.search
			flex 1
			background-color white
			height 66rpx
			line-height 66rpx
			color #B2B2B2
			border 2rpx soild #B2B2B2
			.iconfont
				line-height 66rpx
				margin 0 20rpx
				font-size 40rpx
		.user
			display block
			width 104rpx
			height 62rpx
			text-align center
			line-height 62rpx
			.iconfont
				font-size 40rpx
				font-weight 600
				color #B2B2B2
	.navList
		// height 60rpx
		display flex
		justify-content space-around
		align-items center
		background-color #F2F2F2
		.navItem
			height 60rpx
			line-height 60rpx
			font-size 28rpx
			color #838383
			box-sizing border-box
			.iconfont
				font-size 28rpx
			&.active
				color #FF6900
				border-bottom 4rpx solid #FF6900
	.hiddenNav
		position absolute
		top 80rpx
		left 0
		height 260rpx
		padding 0 26rpx
		background-color #F2F2F2
		color #3C3C3C
		z-index 99
		animation hiddenShow 0.2s
		.navTitle
			padding-top 26rpx
			font-size 30rpx
			display flex
			justify-content space-between
			.iconfont
				color #838383
		.navCotent
			margin-top 36rpx
			display flex
			flex-wrap wrap
			.item
				width 150rpx
				height 56rpx
				margin 0 21rpx 25rpx 0
				text-align center
				font-size 26rpx
				line-height 56rpx
				box-sizing border-box
				background-color #ffffff
				border 2rpx solid #E5E5E5
				border-radius 8rpx
				&.active
					background-color #FDE0D5
					border 2rpx solid #FF6900
					border-radius 8rpx
					color #FF6900
	.mainScroll
		width 100%
		height calc(100vh - 146rpx)
		.scrollItem
			.banner
				width 100%
				height 376rpx
				.swiper-item
					width 100%
					height 376rpx
					.bannerImg
						width 100%
						height 376rpx
			.navImg
				display flex
				flex-wrap wrap
				.img
					width 20%
					height 158rpx
					image
						width 100%
						height 158rpx
		  .exposure
				margin-top 16rpx
				width 100%
				display: grid
				grid-template-columns: 50% 50%
				grid-template-rows:265rpx
				grid-row-gap: 4rpx;
				grid-column-gap: 4rpx;
				.bigImg
					grid-row-start: 1;
					grid-row-end: 3;
					image
						width 100%
						height 530rpx
				.smallImg
					image
						width 100%
						height 263rpx
	

		.imgList
			display flex
			flex-wrap wrap
			justify-content space-between
			.img
				width 373rpx
				height 500rpx
				margin-bottom 6rpx
				image
					width 373rpx
					height 500rpx
		.footerImg
			width 100%
			height 290rpx
			image
				width 100%
				height 290rpx
		.about
			height 100rpx
			background-color #ECECEC
			display flex				 
			align-items center
			.aboutMain
				 width 100%
				 height 80rpx
				 background-color #FFFFFF
				 display flex
				 align-items center
				.text
					flex 1
					text-align center
					line-height 80rpx
					
					color #808080
					font-weight 500
				.iconfont
					line-height 80rpx
					margin-right 30rpx
				
</style>
