<template>
    <div class="page">
         <Header>
            <BackHeader />
        </Header> 
        <SwiperContainer />
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
                <component :is="'Equipment' + this.currentInformation"></component>
            </div>
        </div>
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import BackHeader from '../components/BackHeader.vue'
import EquipmentList from '../components/EquipmentList.vue' 
import Footer from '../components/Footer.vue'
import SwiperContainer from '../components/SwiperContainer.vue' 
import Explain from './EquipmentDetail/Explain.vue'
import EquipmentImgText from './EquipmentDetail/EquipmentImgText.vue'
import EquipmentParameter from './EquipmentDetail/EquipmentParameter.vue'

export default {
    data: function() {
        return {
            currentInformation: 'ImgText',
        }
    },
    components: {
        Header, BackHeader, EquipmentList, Footer, SwiperContainer, Explain, EquipmentImgText, EquipmentParameter,
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

