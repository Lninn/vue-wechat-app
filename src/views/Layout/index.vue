<template>
    <div class="page">
        <Header>
            <slot name="header" >
                <HeaderBack :title="title" />
            </slot>
        </Header>
        <slot></slot>
        <Footer v-if="!hideFooter" />
    </div>
</template>

<script>
import Footer from '@/components/Footer/index' 
import Header from '@/components/Header/index'
import HeaderBack from '@/components/Header/HeaderBack'

export default {
    name: 'Layout',
    components: {
        Footer, Header, HeaderBack,
    },
    props: {
        hideFooter: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
        }
    },
}
</script>