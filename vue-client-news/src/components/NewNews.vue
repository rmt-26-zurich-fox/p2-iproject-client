<template>
  <form @submit.prevent="createNewNews">
    <div class="container my-3">
      <div class="row">
        <div class="card" style="background: blanchedalmond">
          <div class="card-body">
            <div class="container">
              <h1 class="text-center">Create News</h1>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="createTitle">Title</label>
                  <input
                    v-model="title"
                    type="text"
                    class="form-control"
                    id="createTitle"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="createImage">ImageUrl</label>
                  <input
                    v-model="imageUrl"
                    type="text"
                    class="form-control"
                    id="createImage"
                    placeholder="http://...."
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="createContent">Content</label>
                <input
                  v-model="content"
                  type="text"
                  class="form-control"
                  id="createContent"
                  placeholder="Content..."
                />
              </div>
              <div class="form-group col-md-4">
                <label for="createCategoryId">News Category</label>
                <select
                  id="createCategoryId"
                  class="form-control"
                  v-model="categoryId"
                >
                  <option selected>Choose...</option>
                  <option value="1">Tools</option>
                  <option value="2">Sports</option>
                  <option value="3">Movies</option>
                </select>
              </div>
              <button
                type="submit"
                style="margin-top: 1em"
                class="btn btn-primary"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imageUrl: "",
      content: "",
      categoryId: "",
    };
  },
  emits: ["createNews"],
  methods: {
    createNewNews() {
      this.$emit(
        "createNews",
        this.title,
        this.imageUrl,
        this.content,
        this.categoryId
      );
    },
  },
};
</script>
