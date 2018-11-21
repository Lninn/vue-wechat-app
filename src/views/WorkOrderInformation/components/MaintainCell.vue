<template>
    <div>
        <OutputTextarea
            :title="title"
            :text="text"
        />
        <UploadImg />
    </div>
</template>

<script>
import OutputTextarea from '@/components/AppTextarea/OutputTextarea'
import UploadImg from '@/components/UploadImg/index'

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
    },
    components: {
        OutputTextarea, UploadImg,
    },
}
</script>