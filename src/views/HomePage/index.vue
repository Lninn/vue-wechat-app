<template>
    <Layout>
        <slot slot="header">
            <AppBackHeader title="我的" :showBtn="false" />
        </slot>
        <Panel :user="user" />
        <List></List>
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import Panel from './components/Panel'
import List from './components/List'

import { createNamespacedHelpers, } from 'vuex'
const { mapState, } = createNamespacedHelpers('user')

export default {
    name: 'HomePage',
    components: {
        Layout, Panel, List,
    },
    computed: {
        ...mapState([
            'user',
        ]),
    },
}
</script>

