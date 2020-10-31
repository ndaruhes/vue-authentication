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
                <form action="">
                    <div class="form-group">
                        <label for="judul">Judul Blog: </label>
                        <input type="text" class="form-control" id="judul">
                    </div>

                    <div class="form-group">
                        <label for="judul">Konten: </label>
                        <textarea class="form-control" id="konten"></textarea>
                    </div>

                    <button type="button" class="btn btn-outline-secondary btn-sm mr-2" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary btn-sm">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>