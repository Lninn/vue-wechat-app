<template>
    <div class="page">
        <Header>
            <BackHeader name="登录" :showBtn="false"></BackHeader>
        </Header>
        <div class="page__bd" style="margin-top: 3rem;">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="weui-cells weui-cells_form">
                        <div class="weui-cell">
                            <div class="weui-cell__hd"><label class="weui-label">
                                <p><i class="iconfont">&#xe619;</i></p>
                            </label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="text" name="UserName" placeholder="请输入用户名">
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__hd"><label class="weui-label">
                                <p><i class="iconfont">&#xe62f;</i></p>
                            </label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="password" name="Password" placeholder="请输入密码">
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <AppButton text="登录"/>
                            </div>
                        </div>
                        <div class="weui-cell btn-area">
                            <div class="weui-cell__hd register-btn">
                                <AppButtonPlain text="注册新用户" />
                                <AppButtonPlain text="忘记密码?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackHeader from '@/components/BackHeader'
import Header from '@/components/Header'
import AppButton from '@/components/AppButton'
import AppButtonPlain from '@/components/AppButtonPlain'

export default {
    name: 'Login',
    components: {
        Header, BackHeader, AppButton, AppButtonPlain,
    },
}
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 1.2em;
    color: #000;
}
.weui-label {
    width: 50px;
}
.weui-cells {    
    &:after {
        content: none;
    }
}
.btn-area, .weui-cells_form {
    &:before {
        content: none;
    }
}
.register-btn {
    margin: 0 auto;
    margin-top: 60%;
}

</style>