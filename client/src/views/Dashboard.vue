<template>
    <div class="wrapper">
        <DashboardNavbar/>
        <DashboardSidebar/>
        <div class="content-wrapper">
          <div class="container">
            <Breadcrumb/>
            <h3 class="mb-3">Dashboard Page</h3>
            <template v-if="authenticated && user['role'] == 'Admin'">
              <p>Halo Admin</p>
            </template>
            <template v-else-if="authenticated && user['role'] == 'Member'">
              <p>Halo Member</p>
            </template>
          </div>
        </div>
        <DashboardFooter/>
    </div>
</template>

<script>
import DashboardNavbar from '../components/DashboardNav'
import DashboardFooter from '../components/DashboardFooter'
import DashboardSidebar from '../components/DashboardSidebar'
import Breadcrumb from '../components/Breadcrumb'
import {mapGetters} from 'vuex'
export default {
    components: { DashboardNavbar, DashboardFooter, DashboardSidebar, Breadcrumb },
    mounted(){
      document.body.classList.add('hold-transition', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed')
      // console.log(this.authenticated['role']);
    },
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user'
      })
    }
}
</script>

<style>

</style>