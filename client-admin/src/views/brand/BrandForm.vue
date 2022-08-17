<script>
export default {

}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Create Movie</h3>
                <p>Add new movie</p>
                <form id="form-add-movie" autocomplete="off" class="mt-4">
                    <div class="form-group mb-3">
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" class="form-control mt-2" autofocus>
                    </div>
                    <div class="form-group mb-3">
                        <label for="rating">Rating</label>
                        <input type="number" id="rating" name="rating" class="form-control mt-2">
                    </div>

                    <div class="form-group mb-3">
                        <label for="trailerUrl">Trailer Url</label>
                        <input type="text" id="trailerUrl" name="trailerUrl" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="imgUrl">Image Url</label>
                        <input type="text" id="imgUrl" name="imgUrl" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="genreId">Genre</label>
                        <select id="genreId" name="genreId" class="form-control mt-2">

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="synopsis">Synopsis</label>
                        <textarea id="synopsis" name="synopsis" class="form-control mt-2" cols="30" rows="5"></textarea>
                    </div>
                    <div class="form-group mt-4">
                        <a href="" id="btn-cancel-add-movie" class="btn btn-outline-primary float-start">Cancel</a>
                        <button type="submit" class="btn btn-primary float-end">Add Movie</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>