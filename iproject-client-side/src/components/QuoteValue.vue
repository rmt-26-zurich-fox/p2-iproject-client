<template>
  <div class="col-xs-4 col-sm-6 col-md-3 col-lg-3">
    <a>
      <div class="card-flyer">
        <div class="text-box">
          <div class="image-box">
          </div>
          <div class="text-container">
            
            <h6>{{ quote.User.username }}</h6>
            <p>
              {{ quote.desc }}
            </p>
            <br>
            <span>Category: {{ quote.Category.name}}</span>
          </div>
          <hr>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bookmarks"
            viewBox="0 0 16 16"
            @click.prevent="onClick(quote.id)"
          >
            <path
              d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
            />
            <path
              d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
            />
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { mapActions } from 'pinia';
import { useQuoteStore } from '../stores/qoutes';

export default {
  props: ["quote"],

  methods: {

    ...mapActions(useQuoteStore, ['addFavorite']),

    onClick(PostId){

      // this.$router.push('/favorites')
      this.addFavorite(PostId)
    }
  }
};
</script>
