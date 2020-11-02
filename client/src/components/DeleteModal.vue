<template>
<!-- Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel">Yakin lu?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-footer">
                <button type="submit" @click="deleteData" class="btn btn-danger">Skuyy</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="modalClose">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props : [
        'id',
        'method'
    ],
    methods: {
        deleteData(){
            this.$Progress.start()
            this.$store.dispatch(this.$props.method, this.$props.id).then(() => {
                this.$refs.modalClose.click();
                this.$toasted.show('Data berhasil dihapus', {
                    type: 'success',
                    position: 'bottom-right',
                    duration: 2000
                })
            }).catch(() => {
                this.$toasted.show('Data gagal dihapus', {
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