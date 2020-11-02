<template>
<!-- Modal -->
<div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="createModalLabel">Create Blog</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <label for="judul">Judul Blog: </label>
                        <input type="text" class="form-control" v-model="form.judul" id="judul">
                    </div>

                    <div class="form-group">
                        <label for="judul">Konten: </label>
                        <textarea class="form-control" v-model="form.content" id="konten"></textarea>
                    </div>

                    <button type="button" class="btn btn-outline-secondary btn-sm mr-2" data-dismiss="modal" ref="modalClose">Close</button>
                    <button type="submit" class="btn btn-primary btn-sm">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            form:{
                judul: '',
                content: ''
            }
        }
    },
    computed:{
        ...mapGetters({
            message: 'blog/message'
        })
    },
    methods : {
        submit(){
            this.$Progress.start()
            this.$store.dispatch('blog/createBlog', this.form).then(() => {
                this.form.judul = '';
                this.form.content = '';
                this.$refs.modalClose.click();
                this.$toasted.show(this.message, {
                    type: 'success',
                    position: 'bottom-right',
                    duration: 2000
                })
            }).catch(() => {
                this.$toasted.show('Data gagal dikirim', {
                    type: 'error',
                    position: 'bottom-right',
                    duration: 2000
                })
            })
            this.$Progress.finish()
        }
    }

}
</script>

<style>

</style>