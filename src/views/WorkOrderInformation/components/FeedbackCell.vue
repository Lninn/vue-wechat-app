<template>
    <div>
        <AppOutputTextarea
            :title="title"
            :text="text"
        />
        <AppPreviewImage
            title="图片预览"
            :list="imageList"
        />
    </div>
</template>

<script>
export default {
    name: 'FeedbackCell',
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        imageList: {
            type: Array,
        },
    },
}
</script>