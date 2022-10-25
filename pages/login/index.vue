<template>
    <view class="content">
        <form @submit="formSubmit" @reset="formReset">
            <view class="uni-form-item uni-column">
                <view class="title">账号</view>
                <view>
                    <input name="account" class="uni-input-custom" focus placeholder="请输入账号(任意)" />
                </view>
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">密码</view>
                <view>
                    <input type="password" name="password" class="uni-input-custom" placeholder="请输入密码(任意)" />
                </view>
            </view>
            <view class="uni-btn-h">
                <button form-type="submit">登录</button>
                <button type="default" form-type="reset">重置</button>
            </view>
        </form>
    </view>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    onLoad() {

    },
    methods: {
        formSubmit: function (e) {
            const formdata = e.detail.value
            // uni.showModal({
            //     content: '表单数据内容：' + JSON.stringify(formdata),
            //     showCancel: false
            // });
            if (formdata.account && formdata.password) {
                this.$store.commit('login/switchLoginStatus')
                uni.reLaunch({
                    url: '/pages/tabBar/message/index'
                });
            } else {
                uni.showModal({
                    content: '请输入账号或密码(任意输入)',
                    showCancel: false
                });
            }
        },
        formReset: function (e) {
            console.log('清空数据')
        }
    },
};
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
	padding: 16rpx 24rpx;
}

.uni-form-item .title {
    padding: 20rpx 0;
}
.uni-btn-h {
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	padding: 16rpx 24rpx;
}
.uni-btn-h uni-button {
	font-size: 28rpx;
}
.uni-input-custom {
	border: 1rpx solid #DCDFE6;
	padding: 8rpx 16rpx;
	border-radius: 8rpx;
}
</style>
