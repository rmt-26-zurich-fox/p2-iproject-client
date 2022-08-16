<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-7 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 rounded-10 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-3 d-none d-lg-block"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                      Add your Quote here...
                    </h1>
                  </div>
                  <form action="">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                        v-model="inputQuote"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <select name="CategoryId" v-model="inputCategory">
                        <option value="1">Motivation</option>
                        <option value="2">Programmer</option>
                        <option value="3">Anime</option>
                      </select>
                    </div>
                      <button type="submit" @click.prevent="toAdd">Add</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia';
import { useQuoteStore } from '../stores/qoutes';

export default {
  data() {
    return {
      inputQuote: "",
      inputCategory: ''
    };
  },

  methods: {

    ...mapActions(useQuoteStore, ['addQuote']),
    toAdd(){
      this.addQuote({
        desc: this.inputQuote,
        CategoryId: this.inputCategory
      })
    },
  },
};
</script>
