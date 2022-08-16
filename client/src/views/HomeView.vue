<template>
  <!-- banner -->
  <div class="container-fluid p-0">
    <div class="text-banner">
      <h1>HiLING SKUY</h1>
      <p>SOLUSI HILING TANPA PUSING</p>
    </div>
    <div class="banner d-flex" style="height: 80vh;">
      <div class="col-4" style="background-color: #183fa8; height: 100%;">
      </div>
      <div class="col-8">
        <div class="img-background overflow-hidden" style="height: 100%;">
          <img src="/bglogin.png" alt="" class="img-banner">
        </div>
      </div>
    </div>
    <!-- search section -->
    <div class="card p-3 w-50 mx-auto d-flex shadow-sm position-relative" style="z-index:3; top: -30px;">
      <div class="d-flex gap-3 justify-content-center mt-1 flex-wrap">
        <h5>
          <router-link to="" class="category-link" @click="handleCategory(undefined)">Semua</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Taman</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Alam</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Budaya</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Agrowisata</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">KWT</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Minat Khusus</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Edukasi</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Kolam Renang</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Religi</router-link>
        </h5>
        <h5>
          <router-link to="" class="category-link">Lain-lain</router-link>
        </h5>
      </div>
    </div>
  </div>

  <!-- content section -->
  <div class="container">
    <h4 class="text-primary text-center">Rekomendasi</h4>
    <!-- card-contain -->
    <div class="container-card d-flex mt-3 gap-3 flex-wrap">
      <!-- card -->
      <CardComponent v-for="location in dataLocation" :key="location.id" :location="location" />
    </div>
    <!-- pagination -->
        <div class="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" @click.prevent="handleCategory('-')"><i class="fa-solid fa-arrow-left-long"></i> Prev</a>
                </li>
                <li class="page-item"><a class="page-link" @click.prevent="handleCategory('+')">Next <i
                            class="fa-solid fa-arrow-right-long"></i></a></li>
            </ul>
        </nav>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import Pagination from "../components/Pagination.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from '../stores/index'
export default {
  components: {
    CardComponent,
    Pagination
  },
  data(){
    return {
      data: {
        category: '',
        page: 0,
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchData']),
      handleCategory(value){
        if(value === '-'){
          this.data.page = this.data.page - 1
        }else{
          this.data.page = this.data.page + 1
        }
        console.log(this.fetchData(this.data))
    }
  },
  computed: {
    ...mapState(useCounterStore, ['dataLocation'])
  },
  created() {
    this.fetchData(this.data)
  }
}
</script>


<style>
.category-link {
  color: rgb(49, 48, 48);
  text-decoration: none;
}

.category-link:hover {
  color: rgb(255, 187, 1);
}


.text-banner {
  position: absolute;
  top: 200px;
  left: 50px;
}

.text-banner h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 4.3em;
  color: #ffe803;
}

.text-banner p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6em;
  color: #f6f6f6;
  line-height: 0%;
}

.img-banner {
  height: 600px;
}
</style>
