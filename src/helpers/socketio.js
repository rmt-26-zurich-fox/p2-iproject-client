import io from "socket.io-client";
import supabase from "./supabase";
let query = {};
if (supabase.auth.user()) {
  query.email = supabase.auth.user().email;
}
const socket = io("http://192.168.18.2:3000", { query });
export default socket;
