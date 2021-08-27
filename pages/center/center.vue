<template>
		<view>
	        <view class="status_bar"></view>
			<view class="header-bar">
	            <!-- <image src="../../static/images/avatar.76a75b8f17.png" mode=""></image> -->
	            <navigator url="../login/login">
	                <text>登录/注册</text>
	            </navigator>
	        </view>
	        <view class="order-row flex-row more-right">
	            <text>我的订单</text>
	            <text>全部订单</text>
	        </view>
	        <view class="service-row flex-row">
	            <view class="item flex-col">
	                <view class="icon"></view>
	                <text>待付款</text>
	            </view>
	            <view class="item flex-col">
	                <view class="icon"></view>
	                <text>待收货</text>
	            </view>
	            <view class="item flex-col">
	                <view class="icon"></view>
	                <text>退换修</text>
	            </view>
	        </view>
	        
	        
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">

</style>
