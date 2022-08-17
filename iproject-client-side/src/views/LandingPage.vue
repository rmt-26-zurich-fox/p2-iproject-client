<template>
  
  <div class="geeks">
    <h1>Make youre own quotes here...</h1>
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
<style>
body {
  background: rgb(247, 170, 140);
}
h1 {
  display: flex;
  justify-content: center;
  color: rgb(0, 0, 0);
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
}

.geeks {
  width: 400px;
  height: 250px;
  background: white;
  position: absolute;
  top: 25%;
  left: 35%;
  border-radius: 20px;
}

.geeks::after {
  content: "";
  position: absolute;
  bottom: -30px;
  background: rgb(43, 42, 42);
  width: 90%;
  height: 4px;
  left: 3%;
  border-radius: 50%;
  filter: blur(3px);
}
</style>
