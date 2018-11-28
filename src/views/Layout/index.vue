<template>
    <div class="page">
        <AppHeader>
            <slot name="header" >
                <AppBackHeader :title="title" />
            </slot>
        </AppHeader>
        <slot></slot>
        <AppFooter v-if="!hideFooter" />
    </div>
</template>

<script>
export default {
    name: 'Layout',
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