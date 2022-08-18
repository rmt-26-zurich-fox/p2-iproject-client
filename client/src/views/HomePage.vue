<script>
import CourseCard from "../components/CourseCard.vue";
export default { components: { CourseCard } };
</script>

<template>
  <body>
    <div class="grid-cols-3 grid float-left p-4">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
    <div class="flex float-right">
      <!-- <img src="../assets/img/books.jpg" alt="" /> -->
    </div>
  </body>
</template>
