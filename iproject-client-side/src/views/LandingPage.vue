<template>
<div class="text-center">
    <p>Landing Page</p>
    <!-- <QuoteCard /> -->
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
// import io from 'socket.io-client'
// import { io } from 'socket.io-client';

// class SocketioService {
    // socket;
    // // constructor() {}
  
    // setupSocketConnection() {
    //   this.socket = io('http://localhost:4000');
    // }


    // setupSocketConnection() {  

    //     this.socket = io('http://localhost:4000');  
        
    //     this.socket.emit('my message', 'Hello there from Vue.');

    //     this.socket.on('my broadcast', (data) => {
    //         console.log(data, 'ini data');
    //       });
        
    //   }
      
    //   disconnect() {
    //     if (this.socket) {
    //         this.socket.disconnect();
    //     }
    // }
    
//   }

export default{

    data(){
        return{

            inputMessage: ''
        }
    },
    components: {
        QuoteCard
    },

    // data(){
    //     return{

    //         socket: io(),
    //         users: []
    //     }
    // },  

    methods: {

        ...mapActions(useQuoteStore, ['setupSocketConnection']),

        testingMessage(){
            // console.log('masuk')
            this.setupSocketConnection({
                message: this.inputMessage
            })
        },
        
        
    },
    created(){
    //  this.setupSocketConnection({
    //     message: this.inputMessage
    //  });
  }
}
</script>
