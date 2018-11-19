<template>
    <div>
        <OutputTextarea title="客户评价" text="客户评价客户评价客户评价客户评价客户评价客户评价客户评价客户评价" />
    </div>
</template>

<script>
import OutputTextarea from '@/components/AppTextarea/OutputTextarea'
import UploadImg from '@/components/UploadImg/index'

export default {
    name: 'EvaluateCell',
    components: {
        OutputTextarea, UploadImg,
    },
}
</script>