<template>
  <ul>
     <li>list</li>
 </ul>
</template>

<script>
export default {
    props: ['trip'],
    created() {
        console.log(trip)
    }
}
</script>