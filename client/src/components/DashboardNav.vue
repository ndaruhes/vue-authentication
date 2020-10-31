<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#">
                    <i class="fas fa-bars"></i>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <template v-if="authenticated">
                <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user mr-2"></i>Halo, {{ user.name }}
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" @click.prevent="logout"><i class="fas fa-power-off mr-2"></i>Logout</a>
                </div>
            </li>
            </template>
        </ul>
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
    methods: {
        ...mapActions({
            logoutAction: 'auth/logout'
        }),
        logout(){
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