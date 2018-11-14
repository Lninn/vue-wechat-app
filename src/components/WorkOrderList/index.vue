<template>
    <div class="weui-cells">
        <WorkOrderItem
            v-for="workorder in WorkOrderList"
            :key="workorder.id"
            :workorder="workorder"
        />
    </div>
</template>

<script>
import WorkOrderItem from './WorkOrderItem.vue'
import { fetchList } from '@/api/workorder'    

export default {
    name: 'WorkOrderList',
    data() {
        return {
            WorkOrderList: [],
        }
    },
    components: {
        WorkOrderItem,
    },
    mounted() {
        fetchList().then(response => {
            const data = response.data
            this.WorkOrderList = data
        })
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