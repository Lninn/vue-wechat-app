<template>
    <div class="weui-cells">
        <EquipmentItem />
        <EquipmentItem />
        <EquipmentItem />
    </div>
</template>

<script>
import EquipmentItem from './EquipmentItem.vue'    

export default {
    components: {
        EquipmentItem,
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