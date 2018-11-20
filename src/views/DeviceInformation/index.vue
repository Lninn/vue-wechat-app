<template>
    <Layout :hideFooter="true" title="设备详情">
        <AppSwiper :imageList="titleList" />
        <Explain :device="information" />
        <div class="weui-tab">
            <div class="weui-navbar">
                <div @click="selectInformation($event)" class="weui-navbar__item weui-bar__item_on">
                    图文详情
                </div>
                <div @click="selectInformation($event)" class="weui-navbar__item">
                    规格参数
                </div>
            </div>
            <div class="weui-tab__panel equipment-info">
                <template v-if="imgText === true">
                    <ImgText :imageList="mainList" />
                </template>
                <template v-else>
                    <Parameter :params="parameters" />
                </template>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import HeaderBack from '@/components/Header/HeaderBack'
import AppSwiper from '@/components/AppSwiper/index' 
import Explain from './components/Explain'
import ImgText from './components/ImgText'
import Parameter from './components/Parameter'
import { fetchDevice } from '@/api/devices'

export default {
    name: 'DeviceInformation',
    data: function() {
        return {
            imgText: true,
            titleList: [],
            mainList: [],
            information: {},
            parameters: [],
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
        selectInformation: function(event) {
            const elem = event.target
            elem.classList.add('weui-bar__item_on')
            Array.from(elem.parentNode.children).forEach(child => {
                if (child !== elem) {
                    child.classList.remove('weui-bar__item_on')
                }
            })
            this.imgText = !this.imgText
        },
        fatchData(id) {
            fetchDevice(id).then(response => {
                const data = response.data
                const { information, images, parameters } = data
                this.information = information
                if (images.titleList && images.titleList.length) {
                    this.titleList = images.titleList
                }
                if (images.mainList && images.mainList.length) {
                    this.mainList = images.mainList
                }
                this.parameters = parameters
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

