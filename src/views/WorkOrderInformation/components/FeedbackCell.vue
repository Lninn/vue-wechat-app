<template>
    <div>
        <OutputTextarea
            title="反馈信息"
            text="所需工具所需工具所需工具所需工具所需工具所需工具所需工具所需工具所需工具"
        />
        <UploadImg />
    </div>
</template>

<script>
import OutputTextarea from '@/components/AppTextarea/OutputTextarea'
import UploadImg from '@/components/UploadImg/index'

export default {
    name: 'FeedbackCell',
    components: {
        OutputTextarea, UploadImg,
    },
}
</script>