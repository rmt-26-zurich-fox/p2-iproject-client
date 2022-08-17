<script>
import wyr from "./apis/wyrApi";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://afvrhqzwvjbngbfswvfj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdnJocXp3dmpibmdiZnN3dmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA3MzI1OTQsImV4cCI6MTk3NjMwODU5NH0.c9ilSrunBUjrp1UC7R0wOIujh2s_3WTLdtO_8d6Mz3E"
);
export default {
  name: "App",
  methods: {
    async discordHandler() {
      const { user, session, error } = await supabase.auth.signIn({
        provider: "discord",
      });
      // supabase.auth.onAuthStateChange((event, session) => {
      //   console.log(event, session);
      // });
      console.log(user, session, error);
    },
  },
  beforeCreate() {
    console.log("beforecreate", supabase.auth.session());
  },
  created() {
    console.log("created", supabase.auth.session());
  },
  beforeMount() {
    console.log("bm", supabase.auth.session());
  },
  mounted() {
    console.log("m", supabase.auth.session());
  },
  beforeUpdate() {
    console.log("bu", supabase.auth.session());
  },
  updated() {
    console.log("u", supabase.auth.session());
  },
};
</script>
<template>
  <!-- <RouterView /> -->
  <button v-on:click="this.discordHandler" class="m-5 outline">Discord</button>
</template>
