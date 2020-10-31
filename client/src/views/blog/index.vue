<template>
    <div class="wrapper">
        <DashboardNavbar/>
        <DashboardSidebar/>
        <div class="content-wrapper">
            <div class="container">
                <Breadcrumb/>
                <h3 class="mb-3">Blog Page</h3>
                <template v-if="authenticated && user['role'] == 'Admin'">
                    <p>Halo Admin</p>
                </template>
                <template v-else-if="authenticated && user['role'] == 'Member'">
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#createModal">
                        <i class="fas fa-plus mr-1"></i> Create Blog
                    </button>
                    <createBlog/>
                    <table class="table table-striped mt-3">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Judul Blog</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Membuat aplikasi android</td>
                                <td>
                                    <button class="btn btn-outline-secondary btn-sm mx-2"><i class="fas fa-eye mr-1"></i> Show</button>
                                    <button class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt mr-1"></i> Edit</button>
                                    <button class="btn btn-outline-danger btn-sm mx-2"><i class="fas fa-trash-alt mr-1"></i> Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </template>
            </div>
        </div>
        <DashboardFooter/>
    </div>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNav'
import DashboardFooter from '@/components/DashboardFooter'
import DashboardSidebar from '@/components/DashboardSidebar'
import Breadcrumb from '@/components/Breadcrumb'
import createBlog from './create';
import {mapGetters} from 'vuex'
// import axios from 'axios'

export default {
    components: { DashboardNavbar, DashboardFooter, DashboardSidebar, Breadcrumb, createBlog },
    mounted(){
        document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')
        // console.log(this.authenticated['role']);
        this.getBlogs();
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        }),
    },
    methods: {
        getBlogs(){
            this.$store.dispatch('getBlogs');
        }
    }
}
</script>

<style>

</style>