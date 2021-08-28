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
					<view @click="changeCate({ cate })" class="navItem" :class="{ active: defuleCateId === cate.category_id }" v-for="(cate, index) in categoryList" :key="cate.csategory_id">
						{{ cate.category_name }}
					</view>
				</view>
			</scroll-view>
			<!-- 右边滚动 -->
			<scroll-view class="mainScroll" scroll-y="true" enable-flex>
				<view class="scrollItem">
					<view class="mainImg"><image :src="cateGoodsList[0].body.items[0].img_url" mode=""></image></view>

					<!-- 头部导航 -->
					<scroll-view class="navList" scroll-x="true" enable-flex >
						<view class="scrollItem">
							<view class="nav" v-for="title in mainList.title_list" :key="title">{{ title.title }}</view>
						</view>
					</scroll-view>

					<!-- 商品列表 -->
					<Floor :cateGoods="cateGoods" v-for="(cateGoods, index) in categorGyroup" :key="index"></Floor>
					<!-- 商品列表简单信息 -->
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import Floor from './components/floor.vue';
import { mapState } from 'vuex';
export default {
	components: {
		Floor
	},
	data() {
		return {
			defuleCateId: 1242
		};
	},

	mounted() {
		wx.showTabBar({
			animation:true
		})
		this.getCategoryList();
	},
	methods: {
		// 获取分类数据
		getCategoryList() {
			this.$store.dispatch('reqCategoryList');
		},
		// 点击分类，切换
		changeCate(cateInfo) {
			this.defuleCateId = cateInfo.cate.category_id;
		}
	},
	computed: {
		...mapState({
			categoryList: state => state.category.categoryList || []
		}),
		// 根据点击分类ID计算显示的内容
		mainList() {
			return (this.categoryList || []).find(item => item.category_id === this.defuleCateId);
		},
		// 从当前分内的所有的内容里 计算分类列表
		cateGoodsList() {
			return (this.mainList || {}).category_list || [];
		},
		// 计算分类商品数组
		categorGyroup() {
			// 先商品列表中添加标题
			return (this.cateGoodsList || []).filter(item => item.view_type === 'category_group').map(item => item.body);
		}
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
.navScroll
	margin 20
</style>
