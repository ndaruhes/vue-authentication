<template>
    <div>
        <TheNavigation/>
        <div class="col-md-4" style="margin: 70px auto">
            <form action="" @submit.prevent="submit">
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input type="email" name="email" class="form-control" id="email" v-model="form.email">
                </div>
                <div class="form-group">
                    <label for="password">Password: </label>
                    <input type="password" name="password" class="form-control" id="password" v-model="form.password">
                </div>

                <button type="submit" class="btn btn-primary btn-sm px-3">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import {mapActions} from 'vuex'
export default {
    components: {TheNavigation},
    data(){
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods:{
        ...mapActions({
            login: 'auth/login'
        }),
        async submit(){
            this.$Progress.start();
            this.login(this.form).then(() => {
                this.$router.replace({
                    name: 'dashboard'
                })
                this.$toasted.show('Wei selamat datang gann!', {
                    position: 'bottom-right',
                    type: 'success',
                    duration: 2000
                })
            }).catch(() => {
                this.$toasted.show('Login Failed', {
                    position: 'bottom-right',
                    type: 'error',
                    duration: 2000
                })
            })
            this.$Progress.finish();
        }
    }
}
</script>

<style>

</style>