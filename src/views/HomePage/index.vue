<template>
    <Layout>
        <slot slot="header">
            <HeaderBack title="我的" :showBtn="false" />
        </slot>
        <Panel :user="user" />
        <List></List>
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import HeaderBack from '@/components/Header/HeaderBack'
import Panel from './components/Panel'
import List from './components/List'

import { createNamespacedHelpers, } from 'vuex'
const { mapState, } = createNamespacedHelpers('user')

export default {
    name: 'HomePage',
    components: {
        Layout, HeaderBack, Panel, List,
    },
    computed: {
        ...mapState([
            'user',
        ]),
    },
}
</script>

