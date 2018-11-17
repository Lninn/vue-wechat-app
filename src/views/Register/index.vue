<<template>
    <div class="page">
        <Header>
            <BackHeader name="注册" />
        </Header>
        <div class="page__bd" style="margin-top: 3rem;">
            <RegisterForm />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import BackHeader from '@/components/BackHeader'
import RegisterForm from './RegisterForm'

export default {
    name: 'Register',
    components: {
        Header, BackHeader, RegisterForm
    },
}    
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 1.2em;
    color: #67baff;
}
</style>