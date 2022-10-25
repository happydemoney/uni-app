<template>
	<view class="content">
		<uni-search-bar class="uni-mt-10" radius="5" placeholder="请搜索" clearButton="auto" cancelButton="none" @confirm="search" />
		<uni-list>
			<uni-list-item title="深圳市XXX控股有限公司" showArrow clickable @click="handlItemClick('深圳市XXX控股有限公司')"></uni-list-item>
			<uni-list-item title="深圳市XXX信息技术有限公司" showArrow clickable @click="handlItemClick('深圳市XXX信息技术有限公司')"></uni-list-item>
			<uni-list-item title="深圳市XXX技术有限公司" showArrow clickable @click="handlItemClick('深圳市XXX技术有限公司')"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'addressBook'
			}
		},
		onLoad() {
			
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
