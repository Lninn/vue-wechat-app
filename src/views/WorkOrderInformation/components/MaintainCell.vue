<template>
    <div>
        <OutputTextarea
            :title="title"
            :text="text"
        />
        <PreviewImage
            title="图片预览"
            :list="imageList"
        />
    </div>
</template>

<script>
import OutputTextarea from '@/components/AppTextarea/OutputTextarea'
import PreviewImage from '@/components/PreviewImage/index'

export default {
    name: 'MaintainCell',
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
    components: {
        OutputTextarea, PreviewImage,
    },
}
</script>