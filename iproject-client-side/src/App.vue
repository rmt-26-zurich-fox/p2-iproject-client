
<template>
  <RouterView />
  
</template>

<script>
import SocketioService from './services/socketio.service.js'
import NavBar from './components/NavBar.vue';

export default {
  components: {

  },
  // sockets: {
    
  //   connect(){
  //     console.log('socket connected....')
  //   },

  //   disconnect(){
  //     console.log('socket disconnected')
  //   }
  // }
  // created(){
  //    SocketioService.setupSocketConnection();
  // },
  beforeUnmount() {
    SocketioService.disconnect();
  }
}
</script>