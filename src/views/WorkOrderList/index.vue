<template>
    <Layout>
        <slot slot="header">
            <AppSelect :currentState="ItemState" @changeState="SET_ITEMSTATE" />
        </slot>
        <div class="weui-cells workorder-list">
            <Item
                v-for="workorder in filterList"
                :key="workorder.id"
                :workorder="workorder"
            />
        </div>
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import Item from './Item.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('workOrder')


export default {
    name: 'WorkOrderList',
    components: {
        Layout, Item,
    },
    computed: {
        ...mapState({
            WorkOrderList: state => state.list,
            ItemState: state => state.ItemState,
        }),
        ...mapGetters([
            'filterList',
        ]),
    },
    mounted() {
        this.getWorkOrders()
    },
    methods: {
        ...mapActions([
            'getWorkOrders',
        ]),
        ...mapMutations([
            'SET_ITEMSTATE',
        ]),
    },
}
</script>

<style lang="less">
.workorder-list {
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