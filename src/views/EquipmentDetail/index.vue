<template>
    <div class="page">
         <Header>
            <BackHeader name="设备详情" />
        </Header>
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
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import BackHeader from '@/components/BackHeader'
import AppSwiper from '@/components/AppSwiper' 
import Explain from './components/Explain'
import ImgText from './components/ImgText'
import Parameter from './components/Parameter'

export default {
    name: 'EquipmentDetail',
    data: function() {
        return {
            currentInformation: 'ImgText',
        }
    },
    components: {
        Header, BackHeader, AppSwiper, Explain, ImgText, Parameter,
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
        }
    }
}
</script>

<style lang="less" scoped>
.equipment-info {
    padding-top: 25px;
    padding-bottom: 0;
    box-sizing: border-box;
    height: 100%;
    overflow: visible;
}
</style>

