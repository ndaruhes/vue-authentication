<template>
  <div id="app">
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$Progress.finish();
  },
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
  @import '~admin-lte/dist/css/adminlte.css';
  @import '~overlayscrollbars/css/OverlayScrollbars.css';
  @import '~@fortawesome/fontawesome-free/css/all.min.css';
</style>