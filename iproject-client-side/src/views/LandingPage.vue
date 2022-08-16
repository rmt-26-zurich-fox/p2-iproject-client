<template>

<div class="text-center">
    <p>Landing Page</p>
    <QuoteCard />
    <div>
        <label for="tes">Message</label>
    <input name="tes" type="text" v-model="inputMessage">
  <button type="submit" @click="testingMessage">send</button>
  </div>
</div>
</template>
<script>
import QuoteCard from '../components/QuoteCard.vue'
import { mapActions } from 'pinia'
import { useQuoteStore } from '../stores/qoutes'



export default{

    data(){
        return{

            inputMessage: ''
        }
    },
    components: {
    QuoteCard,

},

    // data(){
    //     return{

    //         socket: io(),
    //         users: []
    //     }
    // },  

    methods: {

        ...mapActions(useQuoteStore, ['setupSocketConnection', 'fetchQuotes']),

        testingMessage(){
            // console.log('masuk')
            this.setupSocketConnection({
                message: this.inputMessage
            })
        },
        
        
    },


  created() {
    this.fetchQuotes();
  },

}
</script>
