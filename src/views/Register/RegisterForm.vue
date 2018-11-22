<template>
    <div class="weui-flex">
        <div class="weui-flex__item">
            <div class="weui-cells weui-cells_form">
                <template v-if="!nextStep">
                    <AppInput icon="" type="text" placeholder="请输入登陆名" />
                    <AppInput icon="" type="password" placeholder="请输入密码" />
                    <AppInput icon="" type="password" placeholder="请再次输入密码" />
                </template>
                <template v-else>
                    <AppInput icon="" type="text" placeholder="请输入真实姓名" />
                    <AppInput icon="" type="number" placeholder="请输入联系方式" />
                    <AppInput icon="" type="text" placeholder="请选择所在的地区" />
                </template>
                
                <div class="weui-cell">
                    <div class="weui-cell__hd"></div>
                    <div class="weui-cell__bd">
                        <LargeButton @onClick="onClick" text="下一步" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LargeButton from '@/components/AppButton/LargeButton'
import AppInput from '@/components/AppInput'

export default {
    name: 'RegisterForm',
    components: {
        LargeButton, AppInput,
    },
    data() {
        return {
            nextStep: false,
            formData: {
                name: null,
                username: null,
                password1: null,
                password2: null,
                phone: null,
                address: null,
            },
        }
    },
    methods: {
        onClick() {
            this.nextStep = true
        },
    },
}
</script>

<style lang="less">
</style>
