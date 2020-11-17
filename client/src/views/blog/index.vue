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
                    <DeleteModal :method="method" :id="id"/>
                    <updateModal :id="id" />

                    <template v-if="loading">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-grow" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <table class="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Judul Blog</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(blog, index) in blogs" :key="blog.id">
                                    <td>{{ ++index }}</td>
                                    <td>{{ blog.title }}</td>
                                    <td>
                                        <button class="btn btn-outline-secondary btn-sm mx-2"><i class="fas fa-eye mr-1"></i> Show</button>
                                        <button class="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#updateModal" @click="updateModal(blog.id)"><i class="fas fa-pencil-alt mr-1"></i> Edit</button>
                                        <button class="btn btn-outline-danger btn-sm mx-2" data-toggle="modal" data-target="#deleteModal" @click="deleteModal(blog.id)"><i class="fas fa-trash-alt mr-1"></i> Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
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
import DeleteModal from '@/components/DeleteModal'
import createBlog from './create';
import updateModal from './update'
import {mapGetters} from 'vuex'
// import axios from 'axios'

export default {
    data(){
        return{
            id : null,
            method : "blog/deleteBlog"
        }
    },
    components: { DashboardNavbar, DashboardFooter, DashboardSidebar, Breadcrumb, createBlog, DeleteModal, updateModal },
    created(){
        document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')
        this.getBlogs()
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            blogs: 'blog/blogs',
            loading: 'blog/loading'
        }),
    },
    methods: {
        deleteModal(blog){
            this.id = blog
        },
        updateModal(blog){
            this.id = blog
        },
        getBlogs(){
            this.$store.dispatch('blog/getBlogs')
        }
    }
}
</script>

<style>

</style>