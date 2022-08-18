import io from "socket.io-client";
import supabase from "./supabase";
let query = {};
if (supabase.auth.user()) {
  query.email = supabase.auth.user().email;
}
const socket = io("https://would-you-rather-zf.herokuapp.com", { query });
export default socket;
