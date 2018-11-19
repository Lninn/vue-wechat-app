<template>
    <div>
        <OutputTextarea
            title="故障描述"
            text="请输入故障描述请输入故障描述请输入故障描述请输入故障描述请输入故障描述"
        />
        <UploadImg />
    </div>
</template>

<script>
import OutputTextarea from '@/components/AppTextarea/OutputTextarea'
import UploadImg from '@/components/UploadImg/index'

export default {
    name: 'MaintainCell',
    components: {
        OutputTextarea, UploadImg,
    },
}
</script>