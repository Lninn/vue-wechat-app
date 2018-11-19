<template>
    <Layout :hideFooter="true" title="设备详情">
        <AppSwiper />
        <Explain />
        <div class="weui-tab">
            <div class="weui-navbar">
                <div @click="selectInformation('ImgText', $event)" class="weui-navbar__item weui-bar__item_on" id="btn-graphic">
                    图文详情
                </div>
                <div @click="selectInformation('Parameter', $event)" class="weui-navbar__item" id="btn-parameter">
                    规格参数
                </div>
            </div>
            <div class="weui-tab__panel equipment-info">
                <component :is="this.currentInformation"></component>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import HeaderBack from '@/components/Header/HeaderBack'
import AppSwiper from '@/components/AppSwiper' 
import Explain from './components/Explain'
import ImgText from './components/ImgText'
import Parameter from './components/Parameter'
import { fetchDevice } from '@/api/equipment'

export default {
    name: 'DeviceInformation',
    data: function() {
        return {
            currentInformation: 'ImgText',
            deviceData: {},
        }
    },
    components: {
        Layout, HeaderBack, AppSwiper, Explain, ImgText, Parameter,
    },
    created() {
        const id = this.$route.params && this.$route.params.id
        this.fatchData(id)
    },
    methods: {
        selectInformation: function(type, event) {
            const elem = event.target
            elem.classList.add('weui-bar__item_on')
            Array.from(elem.parentNode.children).forEach(child => {
                if (child !== elem) {
                    child.classList.remove('weui-bar__item_on')
                }
            })
            this.currentInformation = type
        },
        fatchData(id) {
            fetchDevice(id).then(response => {
                const data = response.data
                console.log('device data ', data)
                this.deviceData = data
            })
        },
    }
}
</script>

<style lang="less">
.equipment-info {
    padding-top: 25px;
    padding-bottom: 0;
    box-sizing: border-box;
    height: 100%;
    overflow: visible;
}
</style>

