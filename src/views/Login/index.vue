<template>
    <div class="page">
        <AppHeader>
            <AppBackHeader title="登录" :showBtn="false" />
        </AppHeader>
        <div class="page__bd" style="margin-top: 3rem;">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="weui-cells weui-cells_form">
                        <AppInput icon="" type="text" placeholder="请输入用户名" v-model="loginForm.username" />
                        <AppInput icon="" type="password" placeholder="请输入密码" v-model="loginForm.password" />
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <AppLargeButton text="登录" @onClick="onLogin"/>
                            </div>
                        </div>
                        <div class="weui-cell btn-area">
                            <div class="weui-cell__hd register-btn">
                                <AppSmallButton text="注册新用户" @onClick="onRegister" />
                                <AppSmallButton text="忘记密码 ?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import weui from 'weui.js'

import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: null,
                password: null,
            },
        }
    },
    created() {
        this.logout()
    },
    methods: {
        ...mapActions(['authenticate', 'logout', 'onRegister',]),
        onLogin() {
            if (!this.validForm()) {
                return
            }
            this.authenticate(this.loginForm)
        },
        validForm() {
            const { username, password, } = this.loginForm
            let tips, pass = false

            if (!username) {
                tips = '请输入用户名'
            } else if (!password) {
                tips = '请输入密码'
            } else {
                pass = true
            }

            if (pass === false) {
                weui.topTips(tips, {
                    duration: 1500,
                })
            }

            return pass
        },
    },
}
</script>

<style lang="less" scoped>
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