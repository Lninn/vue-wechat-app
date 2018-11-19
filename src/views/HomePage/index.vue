<template>
    <Layout>
        <slot slot="header">
            <HeaderBack title="我的" :showBtn="false" />
        </slot>
        <Panel />
        <List />
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import List from './components/List'
import Panel from './components/Panel'
import HeaderBack from '@/components/Header/HeaderBack'

export default {
    name: 'HomePage',
    components: {
        Layout, HeaderBack, List, Panel,
    },
}
</script>

<style lang="less" scoped>
</style>

