<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <router-link :to="{name: 'home'}" class="brand-link">
            <img src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="Logo" class="brand-image elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">Lara<i class="fab fa-vuejs"></i>ueAuth</span>
        </router-link>
        <div class="sidebar">
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <template v-if="authenticated && user['role'] == 'Admin'">
                        <li class="nav-item">
                            <router-link exact :to="{name: 'dashboard'}" class="nav-link">
                                <i class="nav-icon fas fa-home"></i>
                                <p>Home</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard/blog" class="nav-link">
                                <i class="nav-icon fas fa-rss"></i>
                                <p>Kelola Blog</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="#" class="nav-link">
                                <i class="nav-icon fas fa-users"></i>
                                <p>Kelola User</p>
                            </router-link>
                        </li>
                    </template>
                    <template v-else-if="authenticated && user['role'] == 'Member'">
                        <li class="nav-item">
                            <router-link exact :to="{name: 'dashboard'}" class="nav-link">
                                <i class="nav-icon fas fa-home"></i>
                                <p>Home</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/dashboard/blog" class="nav-link">
                                <i class="nav-icon fas fa-rss"></i>
                                <p>Blog</p>
                            </router-link>
                        </li>
                    </template>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    }
}
</script>
