<script>
import { mapActions, mapState } from "pinia";
import CourseCard from "../components/CourseCard.vue";
import { main } from "../stores/counter";
export default {
  components: { CourseCard },
  computed: { ...mapState(main, ["dataCourse", "isLoggedIn"]) },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    ...mapActions(main, ["fetchCourse"]),
    nextPage() {
      if (this.page < this.dataCourse.totalPages) {
        this.page++;
        this.fetchCourse(this.page);
      }
    },
    prevPage() {
      if (this.page > 0) {
        this.page--;
        this.fetchCourse(this.page);
      }
    },
  },
  created() {
    this.fetchCourse(this.page);
    if (localStorage.access_token) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<template>
  <body>
    <div class="grid-cols-3 grid float-left p-4">
      <CourseCard v-for="el in dataCourse.news" :key="el.id" :course="el" />
    </div>
    <div class="flex absolute lg:bottom-[-8vh] xl:bottom-[-6vh] w-[100%]">
      <div class="mx-auto flex flex-col items-center">
        <span
          >Page <span>{{ dataCourse.currentPage + 1 }}</span> /
          <span>{{ dataCourse.totalPages }}</span></span
        >
        <div class="inline-flex mt-2 xs:mt-0">
          <button
            class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Prev</button
          ><button
            class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </body>
</template>
