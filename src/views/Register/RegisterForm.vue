<template>
    <div class="weui-flex">
        <div class="weui-flex__item">
            <div class="weui-cells weui-cells_form">
                <template v-if="!nextStep">
                    <AppInput icon="" type="text" placeholder="请输入用户名" v-model="registerForm.username" />
                    <AppInput icon="" type="password" placeholder="请输入密码" v-model="registerForm.password" />
                    <AppInput icon="" type="password" placeholder="请再次输入密码" v-model="registerForm.passwordConfirm" />
                </template>
                <template v-else>
                    <AppInput icon="" type="text" placeholder="请输入真实姓名" v-model="registerForm.name" />
                    <AppInput icon="" type="number" placeholder="请输入联系方式" v-model="registerForm.phone" />
                    <AppInput icon="" type="text" placeholder="请选择所在的地区" v-model="registerForm.address" />
                </template>
                
                <div class="weui-cell">
                    <div class="weui-cell__hd"></div>
                    <div class="weui-cell__bd">
                        <LargeButton v-if="!nextStep" @onClick="onNextStep" text="下一步" />
                        <LargeButton v-else @onClick="onRegister" text="注册" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import weui from 'weui.js'
import { validPassword, validPhone, } from '@/utils/validate'

import LargeButton from '@/components/AppButton/LargeButton'
import AppInput from '@/components/AppInput'

import { createNamespacedHelpers } from 'vuex'
const { mapActions, } = createNamespacedHelpers('user')

export default {
    name: 'RegisterForm',
    components: {
        LargeButton, AppInput,
    },
    data() {
        return {
            nextStep: false,
            registerForm: {
                name: null,
                username: null,
                type: null,
                password: null,
                passwordConfirm: null,
                phone: null,
                address: null,
            },
        }
    },
    mounted() {
        const self = this
        weui.confirm('请选择你的身份', {
            title: '',
            buttons: [{
                label: '维护人员',
                type: 'primary',
                onClick: function(){ self.registerForm.type = 2 }
            }, {
                label: '客户',
                type: 'primary',
                onClick: function(){ self.registerForm.type = 3 }
            }]
        });
    },
    methods: {
        ...mapActions([
            'register',
        ]),
        onNextStep() {
            if (!this.validFormOne()) {
                return
            }
            this.nextStep = true
        },
        onRegister() {
            if (!this.validFormTwo()) {
                return
            }
            this.register(this.registerForm)
        },
        validFormOne() {
            let tips, pass = false
            const { username, password, passwordConfirm, } = this.registerForm

            if (!username) {
                tips = '请输入用户名'
            } else if (!password || !passwordConfirm) {
                tips = !password ? '请输入密码' : '请输入确认密码'
            } else if (!validPassword(password)) {
                tips = '密码长度8-16, 至少包含一个大写字母和一个小写字母'
            } else if (this.registerForm.password !== this.registerForm.passwordConfirm) {
                tips = '两次输入的密码不一致'
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
        validFormTwo() {
            let tips, pass = false
            const { name, phone, address, } = this.registerForm

            if (!name) {
                tips = '请输入真实姓名'
            } else if (!phone) {
                tips = '请输入联系方式'
            } else if (!address) {
                tips = '请输入输入地址'
            } else if (!validPhone(phone)) {
                tips = '您输入的联系方式不合法，请重新输入'
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