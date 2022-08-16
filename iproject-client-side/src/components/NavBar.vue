<template>
<nav class="navbar navbar-default" role="navigation">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">Quotes</a>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Profile</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><button @click.prevent="toLogin" v-if="!access_token" class="btn btn">Login</button></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><button @click.prevent="toLogout" v-if="access_token" class="btn btn">Logout</button></li>
    </ul>
  </div><!-- /.navbar-collapse -->
</nav>
</template>
<script>
import swall from 'sweetalert'

export default {
  
  data(){
    return{

      access_token: localStorage.access_token
    }
  },

  methods: {

    toLogin(){

      if(this.access_token){

        swall('youre already loggin')

      }else{

        this.$router.push('/login')
        
      }

    },

    toLogout(){

      if(this.access_token){
        swal({
          title: "Are you sure?",
          text: "You will not be able to see our Quotes anymore!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
        }).then(() => {
          swal("See you again buddy!", "Have a nice day.", "success");
          this.$router.push("/");
          localStorage.clear()
        });
      }else{
        
      }
    }
  }

}
</script>
