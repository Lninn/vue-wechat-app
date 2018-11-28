<template>
    <div class="page">
        <AppHeader>
            <AppBackHeader title="注册" />
        </AppHeader>
        <div class="page__bd" style="margin-top: 3rem;">
            <RegisterForm />
        </div>
    </div>
</template>

<script>
import RegisterForm from './RegisterForm'

export default {
    name: 'Register',
    components: {
        RegisterForm,
    },
}
</script>