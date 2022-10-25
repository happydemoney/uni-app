<template>
	<view class="content">
		 <uni-title title="个人信息"></uni-title>
		 <uni-list>
		 	<uni-list-item title="个人信息" showArrow clickable @click="handlItemClick('个人信息')"></uni-list-item>
		 	<uni-list-item title="账号安全" showArrow clickable @click="handlItemClick('账号安全')"></uni-list-item>
			<uni-list-item title="清除缓存" showArrow clickable @click="handlItemClick('清除缓存')"></uni-list-item>
			<uni-list-item title="退出登录" showArrow clickable @click="loginOut"></uni-list-item>
		 </uni-list>
		 
		 <uni-title title="关于我们"></uni-title>
		 <uni-list>
		 	<uni-list-item title="关于我们" showArrow clickable @click="handlItemClick('关于我们')"></uni-list-item>
		 	<uni-list-item title="联系客服" showArrow clickable @click="handlItemClick('联系客服')"></uni-list-item>
		 	<uni-list-item title="分享WB" showArrow clickable @click="handlItemClick('分享WB')"></uni-list-item>
		 </uni-list>
		 
		 <uni-title title="意见反馈"></uni-title>
		 <uni-list>
		 	<uni-list-item title="意见反馈" showArrow clickable @click="handlItemClick('意见反馈')"></uni-list-item>
		 </uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'My'
			}
		},
		onLoad() {

		},
		methods: {
			handlItemClick(text) {
				uni.showToast({
					title: `点击了 "${text}" 列表项`,
					icon: 'none'
				})
			},
			loginOut () {
				this.$store.commit('login/switchLoginStatus')
				uni.reLaunch({
				    url: '/pages/login/index'
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		padding: 16rpx 20rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
