<template>
    <div class="page">
        <Header>
            <HeaderBack title="登录" :showBtn="false"></HeaderBack>
        </Header>
        <div class="page__bd" style="margin-top: 3rem;">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="weui-cells weui-cells_form">
                        <AppInput icon="" type="text" placeholder="请输入用户名" v-model="loginForm.username" />
                        <AppInput icon="" type="password" placeholder="请输入密码" v-model="loginForm.password" />
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <LargeButton text="登录" @onClick="onLogin"/>
                            </div>
                        </div>
                        <div class="weui-cell btn-area">
                            <div class="weui-cell__hd register-btn">
                                <SmallButton text="注册新用户" @onClick="onRegister" />
                                <SmallButton text="忘记密码 ?" />
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
import AppInput from '@/components/AppInput'

import weui from 'weui.js'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('user')

export default {
    name: 'Login',
    components: {
        Header, HeaderBack, LargeButton, SmallButton, AppInput,
    },
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