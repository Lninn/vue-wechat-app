<template>
    <div>
        <OutputTextarea
            :title="title"
            :text="text"
        />
    </div>
</template>

<script>
import OutputTextarea from '@/components/AppTextarea/OutputTextarea'

export default {
    name: 'EvaluateCell',
    components: {
        OutputTextarea,
    },
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
}
</script>