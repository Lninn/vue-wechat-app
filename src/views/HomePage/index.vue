<template>
    <Layout>
        <slot slot="header">
            <HeaderBack title="我的" :showBtn="false" />
        </slot>
        <Panel :user="user" />
        <Person :user="user" />
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import List from './components/List'
import Panel from './components/Panel'
import Person from './components/Person'
import HeaderBack from '@/components/Header/HeaderBack'

import { createNamespacedHelpers, } from 'vuex'
const { mapState, } = createNamespacedHelpers('user')

export default {
    name: 'HomePage',
    components: {
        Layout, HeaderBack, List, Panel, Person,
    },
    computed: {
        ...mapState([
            'user',
        ]),
    },
}
</script>

