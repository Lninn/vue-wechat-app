<template>
    <Layout :hideFooter="true" title="设备详情">
        <AppSwiper :imageList="imageList('titleList')" />
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
                    <ImgText :imageList="imageList('mainList')" />
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
import Explain from './components/Explain'
import ImgText from './components/ImgText'
import Parameter from './components/Parameter'

import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('devices')
import { toggleClass } from '@/utils'

export default {
    name: 'DeviceInformation',
    data: function() {
        return {
            imgText: true,
        }
    },
    computed: {
        ...mapGetters([
            'imageList',
            'information',
            'parameters',
        ]),
    },
    components: {
        Layout, Explain, ImgText, Parameter,
    },
    created() {
        const id = this.$route.params && this.$route.params.id
        this.getDevice(id)
    },
    methods: {
        ...mapActions([
            'getDevice',
        ]),
        selectInformation: function(event) {
            const elem = event.target
            toggleClass(elem, 'weui-bar__item_on')
            this.imgText = !this.imgText
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

