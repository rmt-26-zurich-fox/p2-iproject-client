import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://afvrhqzwvjbngbfswvfj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdnJocXp3dmpibmdiZnN3dmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA3MzI1OTQsImV4cCI6MTk3NjMwODU5NH0.c9ilSrunBUjrp1UC7R0wOIujh2s_3WTLdtO_8d6Mz3E"
);

export default supabase;
