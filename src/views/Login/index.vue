<template>
    <div class="page">
        <Header>
            <HeaderBack title="登录" :showBtn="false"></HeaderBack>
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
                                <LargeButton text="登录"/>
                            </div>
                        </div>
                        <div class="weui-cell btn-area">
                            <div class="weui-cell__hd register-btn">
                                <SmallButton text="注册新用户" />
                                <SmallButton text="忘记密码?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBack from '@/components/Header/HeaderBack'
import Header from '@/components/Header/index'
import SmallButton from '@/components/AppButton/SmallButton'
import LargeButton from '@/components/AppButton/LargeButton'

export default {
    name: 'Login',
    components: {
        Header, HeaderBack, LargeButton, SmallButton, 
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