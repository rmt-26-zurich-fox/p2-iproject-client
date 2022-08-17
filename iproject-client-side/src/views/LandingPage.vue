<template>
  <div class="text-center">
    <QuoteCard />
  </div>
</template>
<script>
import QuoteCard from "../components/QuoteCard.vue";
import { mapActions } from "pinia";
import { useQuoteStore } from "../stores/qoutes";

export default {
  data() {
    return {
      inputMessage: "",
    };
  },
  components: {
    QuoteCard,
  },


  methods: {
    ...mapActions(useQuoteStore, ["setupSocketConnection", "fetchQuotes"]), 
  },

  created() {
    this.fetchQuotes();
  },
};
</script>
