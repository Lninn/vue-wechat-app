<template>
    <div>
        <AppOutputTextarea
            :title="title"
            :text="text"
        />
    </div>
</template>

<script>

export default {
    name: 'EvaluateCell',
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