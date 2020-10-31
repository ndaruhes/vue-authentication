<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb px-0">
            <template v-if="isDashboard">
                <li class="breadcrumb-item active" aria-current="page"><router-link to="/dashboard"><i class="fas fa-home mr-1"></i> Home</router-link></li>
            </template>
            <template v-if="isIndexBlog">
                <li class="breadcrumb-item"><router-link to="/dashboard"><i class="fas fa-home mr-1"></i> Home</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Blog</li>
            </template>
        </ol>
    </nav>
</template>

<script>
export default {
    computed: {
        isDashboard(){
            return this.$route.name === 'dashboard';
        },
        isIndexBlog(){
            return this.$route.name === 'page.blog';
        },
    }
}
</script>

<style scoped>
.breadcrumb{
    background: none !important;
}
</style>