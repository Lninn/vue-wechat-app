<template>
    <div class="weui-cells">
        <Item
            v-for="device in deviceList"
            :key="device.id"
            :device="device"
        />
    </div>
</template>

<script>
import Item from './Item'    
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('devices')

export default {
    name: 'DeviceList',
    computed: mapState({
        deviceList: state => state.list
    }),
    components: {
        Item,
    },
    methods: {
        ...mapActions([
            'getDevices',
        ]),
    },
    mounted() {
        this.getDevices()
    },
}
</script>

<style lang="less" scoped>
.weui-cells {
    position: relative;
    left: 0;
    right: 0;
    top: 3rem;
    margin-top: 0;
    margin-bottom: 50px;
    overflow: hidden;
    color: #fff;
    background-color: rgb(235, 233, 233);
    .weui-flex {
        display: flex;
        padding: 10px 15px;
        align-items: center;
    }
}
</style>