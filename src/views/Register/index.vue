<<template>
    <div class="page">
        <Header>
            <HeaderBack title="注册" />
        </Header>
        <div class="page__bd" style="margin-top: 3rem;">
            <RegisterForm />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header/index'
import HeaderBack from '@/components/Header/HeaderBack'
import RegisterForm from './RegisterForm'

export default {
    name: 'Register',
    components: {
        Header, HeaderBack, RegisterForm
    },
}
</script>