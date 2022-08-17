<script>

export default {
    props: ['cart']
}

</script>

<template>
<div class="col-md-4 ">
          <div class="card">
            <img :src="cart.Item.imageUrl" class="card-img-top" height="380"/>
            <div class="card-body">
              <h5 class="card-title">{{cart.Item.name}}</h5>
              <p class="card-text">{{cart.Item.description}}</p>
              <p class="card-text">Rp .{{cart.Item.sellPrice}}</p>
              <div class="btn-group">
              <a href="" class="btn btn-primary">Delete from cart</a>
            </div>
            </div>
          </div>
        </div>
</template>