<template>
	<view class="loginContainer">
		<view class="header">
			<!-- 返回上一页 -->
			<text class="iconfont"></text>
			<text class="name">账号登录</text>
			<text class="iconfont icon-wenhao"></text>
		</view>
		<!-- logo -->
		<view class="logo">
			<image src="../../static/images/center/mi_logo.jpg" mode=""></image>
		</view>
		<!-- 登录框 -->
		<view class="loginBox">
			<view class="title">
				小米账号登录
			</view>
			<view class="phone">
				<text class="desc">+86</text>
				<text class="iconfont icon-right"></text>
				<input type="text" value="" placeholder-class="placeholder-class" placeholder="请输入手机号码" />
			</view>
			<button class="nextBtn">下一步</button>
			<view class="passLogin">用户名密码登录</view>
		</view>	
		<view class="otherLogin">
			<view class="title">
				<text>其它方式登录</text>
			</view>
			<view class="iconList">
				<view class='loginImg' @click="wechatLogin"><image src="../../static/images/login/wechat.png" mode=""></image></view>
				<view class='loginImg'><image src="../../static/images/login/QQ.png" mode=""></image></view>
				<view class='loginImg'><image src="../../static/images/login/pay.png" mode=""></image></view>
				<view class='loginImg'><image src="../../static/images/login/weibo.png" mode=""></image></view>
				<view class='loginImg'><image src="../../static/images/login/iphone.png" mode=""></image></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		wechatLogin(){
			wx.getUserProfile({
				desc:'用于完善会员资料',
				success:(res)=>{
					// 获取保存用户信息
					if(res.userInfo.nickName){
						wx.setStorageSync('userInfo_key',res.userInfo)
					}
					// 提示/
					wx.showToast({
						title:'授权成功',
						icon:'success',
					})
					// 跳转到个人中心
					wx.reLaunch({
						url:'../center/center'
					})
				},
				fail: (err) => {
					wx.showToast({
						title:'授权失败',
						icon:'error',
					})
				}
			})
		}
	}
};
</script>

<style lang="stylus">
.loginContainer
	width 100%
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
			font-size 40rpx
			color #979797
	.logo
		width 100%
		height 200rpx
		margin 40rpx 0
		display flex
		justify-content center
		align-items center
		image
			width 100rpx
			height 100rpx
			border-radius 40rpx
	.loginBox
		width 100%
		padding 0 45rpx
		box-sizing border-box
		.title
			width 80%
			font-size 40rpx
			color #000000
			font-weight 600
		.phone
			width 100%
			height 100rpx
			margin 40rpx 0
			background-color #F0F0F0
			border-radius 30rpx
			display flex
			align-items center
			padding 6rpx 28rpx
			box-sizing border-box
			.desc
				font-size 28rpx
				font-weight 600
			.iconfont
				margin 0 20rpx
				font-size 28rpx
				font-weight 600
			input
				flex 1
				height 100%
			.placeholder-class
				font-size 28rpx
				color #D2D2D2
		.nextBtn
			margin 0
			padding 0
			outline-style none
			border none
			background-color #B5DAFF
			// background-color #0B84FF
			width 100%
			border-radius 50rpx
			color #FFFFFF
		.passLogin
			width 100%
			display flex
			justify-content center
			color #757575
			font-size 26rpx
			margin-top 60rpx
	.otherLogin
		margin-top 40rpx
		.title
			display flex
			justify-content center
			font-size 24rpx
			color #b9b9b9
			position relative
			text
				&::before
					content ''
					width 100rpx
					height 1rpx
					position absolute
					top 50%
					left 180rpx
					background-color #b9b9b9
				&::after
					content ''
					width 100rpx
					height 1rpx
					position absolute
					top 50%
					right 180rpx
					background-color #b9b9b9
		.iconList
			margin-top 40rpx
			display flex
			justify-content center
			.loginImg
				margin 0 20rpx
				image
					width 66rpx
					height 66rpx
</style>
