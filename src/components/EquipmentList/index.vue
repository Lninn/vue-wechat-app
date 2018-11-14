<template>
    <div class="weui-cells">
        <EquipmentItem v-for="equipment in equipmentList" :key="equipment.id" :equipment="equipment" />
    </div>
</template>

<script>
import EquipmentItem from './EquipmentItem'    
import { fetchList } from '@/api/equipment'

export default {
    name: 'EquipmentList',
    data() {
        return {
            equipmentList: [],
        }
    },
    components: {
        EquipmentItem,
    },
    mounted() {
        fetchList().then(response => {
            const data = response.data
            this.equipmentList = data
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