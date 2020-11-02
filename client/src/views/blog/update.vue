<template>
<!-- Modal -->
<div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="updateModalLabel">Update Data</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p><b>Judul: </b></p>
                <p></p>
                {{ id }}
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Simpan</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="modalClose">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default{
    props: ['id'],
    mounted(){
        this.getBlog()
    },
    methods: {
        async getBlog(){
            await axios.get('blog/' + this.$props.id).then((response) => console.log(response.data))
        }
    }
}
</script>

<style>

</style>