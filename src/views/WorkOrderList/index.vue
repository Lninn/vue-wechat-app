<template>
    <Layout>
        <slot slot="header">
            <AppSelect :currentState="state" @changeState="onInput" />
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
import AppSelect from '@/components/AppSelect'
import Item from './Item.vue'
import { fetchList } from '@/api/workorder' 

export default {
    name: 'WorkOrderList',
    components: {
        Layout, AppSelect, Item,
    },
    data() {
        return {
            state: 'ALL',
            WorkOrderList: [],
        }
    },
    computed: {
        filterState() {
            const state = this.state
            if (state === 'WAITING') {
                return ['INITIALIZED', ]
            } else if (state === 'PROCESSING') {
                return ['RECEIVED', 'PROCESSING',]
            } else if (state === 'COMPLETED') {
                return [state, ]
            } else {
                return ['ALL', ]
            }
        },
        filterList() {
            const filterState = this.filterState
            let list = this.WorkOrderList.slice()

            if (filterState) {
                list = list.filter(({ state }) => filterState.includes(state) || filterState.includes('ALL'))
            }

            return list
        },
    },
    mounted() {
        fetchList().then(response => {
            const data = response.data
            this.WorkOrderList = data
        })
    },
    methods: {
        onInput(value) {
            this.state = value
        },
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