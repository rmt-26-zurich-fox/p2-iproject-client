<script>
import CourseCard from "../components/CourseCard.vue";

import { mapState, mapActions } from "pinia";
import { main } from "../stores/counter";

export default {
  methods: { ...mapActions(main, ["fetchCourseList"]) },
  computed: { ...mapState(main, ["dataCourse"]) },
  components: { CourseCard },
  created() {
    this.fetchCourseList();
  },
};
</script>

<template>
  <div>
    <CourseCard
      v-for="el in dataCourse.Course"
      :key="el.id"
      :course="el.Course"
    />
  </div>
  <div>
    <a
      class="float-right mx-5 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
      href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar&response_type=code&client_id=799821746713-7385u0fqcftgk1utord95u2ki45bku5d.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fu%2F0%2Fr"
      >Google Calendar</a
    >
  </div>
</template>
