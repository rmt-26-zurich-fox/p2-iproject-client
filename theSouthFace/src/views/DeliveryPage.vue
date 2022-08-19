<template>
<h2 class="headerFee">All items are sent from Bandung, Jawa Barat and sent via JNE courier. <br> 
You only have to pay 2kg of shipping fee, the rest is on us.</h2>

<form @submit.prevent="submitFee(inputCity)">
<label class="input"> SELECT CITY</label>
<select class="form-select" aria-label="Default select example" v-model="inputCity">
  <option selected disabled>Select City</option>
  <option v-for="(element,index) in city" v-bind:key="element.city_id" v-bind:value="element.city_id">{{element.city_name}}</option>
</select>
<br>
<button type="submit"> Calculate Delivery Fee</button>
</form>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import {theSouthFace} from '../stores/theSouthFace'
import Swal from 'sweetalert2';

export default{
    name:"credential",
    data(){
        return{
            inputCity:''
        }
    },
    computed:{
        ...mapState(theSouthFace, ['province', 'city'])
    },
    methods:{
        ...mapActions(theSouthFace, ['getProvince','getCity','getFee']),
        submitFee(destination){
            this.getFee(+destination)
        }
    },
    created(){
        this.getProvince()
        this.getCity()
    }

}
</script>

<style>
form{
    margin-top: 100px;
}
.input{
    color: white;
}
.headerFee{
    color: white;
    text-align: center;
    margin-top: 30px;
}
</style>