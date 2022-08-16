<script>

</script>


<template>
<h3 class="text-center">Item Detail</h3>
<div class="block">
      <div class="block__body">
        <h3 class="block__heading">
          Alkohol
        </h3>
        <p class="block__copy">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sequi minima illo quia optio amet? Explicabo ipsa placeat molestias nihil? Ratione culpa veritatis laboriosam eveniet consectetur nihil possimus deserunt hic.</p>
        <p class="block__copy">In Stock: 30</p>
        <p class="block__copy">Rp. 13000</p>
        <br>
        <button class="btn btn-primary">Add to Cart</button>
      </div>
      <div class="block__img">
        <img
          src="https://cf.shopee.co.id/file/3b2f74860b24ab7fb88f47a897421367"
          alt="placeholder image"
        />
      </div>
    </div>
</template>

<style scoped>
* {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }

      .block {
        border: 1px solid grey;
        margin: 10px;
        height: 70vh;

        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
      }

      .block__body {
        padding: 15px;
        text-align: center;
        vertical-align: baseline;
      }

      .block__img img {
        width: 40vw;
        /*height: 30vh;*/
        height: 100%;
      }
</style>