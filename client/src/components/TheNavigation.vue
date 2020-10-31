<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Lara<i class="fab fa-vuejs"></i>ueAuth</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link exact to="/" class="nav-link"><i class="fas fa-home mr-1"></i> Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blog" class="nav-link"><i class="fas fa-rss mr-1"></i> Blog</router-link>
                </li>
                <template v-if="authenticated">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user mr-1"></i> {{ user.name }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/dashboard" class="dropdown-item"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
                            <a class="dropdown-item" href="#" @click.prevent="logOut"><i class="fas fa-power-off mr-1"></i> Logout</a>
                        </div>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link"><i class="fas fa-sign-in-alt mr-1"></i> Login</router-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    methods:{
        ...mapActions({
            logoutAction: 'auth/logout'
        }),
        logOut(){
            this.$Progress.start();
            this.logoutAction().then(() => {
                this.$router.replace({
                    name: 'home'
                });

                this.$toasted.show('Berhasil logout', {
                    position: 'bottom-right',
                    type: 'success',
                    duration: 2000
                });
            })
            this.$Progress.finish();
        }
    }
}
</script>

<style>
/* .router-link-exact-active .router-link-active{
    color: red;
} */
</style>