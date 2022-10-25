<template>
	<view class="content">
		<uni-search-bar class="uni-mt-10" radius="5" placeholder="请搜索" clearButton="auto" cancelButton="none" @confirm="search" />
		<uni-list :border="true">
			<!-- 显示圆形头像 -->
			<uni-list-chat
				:avatar-circle="true"
				title="uni-app"
				avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
				note="您收到一条新的消息"
				time="2020-02-02 20:20"
				clickable
				@click="handlItemClick('圆形头像')">
			</uni-list-chat>
			<!-- 右侧带角标 -->
			<uni-list-chat
				title="uni-app"
				avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
				note="您收到一条新的消息"
				time="2020-02-02 20:20"
				badge-text="12"
				clickable
				@click="handlItemClick('右侧带角标')">
			</uni-list-chat>
			<!-- 头像显示圆点 -->
			<uni-list-chat
				title="uni-app"
				avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
				note="您收到一条新的消息"
				time="2020-02-02 20:20"
				badge-positon="left"
				badge-text="dot"
				clickable
				@click="handlItemClick('头像显示圆点')">
			</uni-list-chat>
			<!-- 头像显示角标 -->
			<uni-list-chat
				title="uni-app"
				avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
				note="您收到一条新的消息"
				time="2020-02-02 20:20"
				badge-positon="left"
				badge-text="99"
				clickable
				@click="handlItemClick('头像显示角标')">
			</uni-list-chat>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Message'
			}
		},
		onLoad() {
			if (!this.$store.state.login.loginStatus) {
				uni.reLaunch({
					url: '/pages/login/index'
				});
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			handlItemClick(text) {
				uni.showToast({
					title: `点击了 "${text}" 列表项`,
					icon: 'none'
				})
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
