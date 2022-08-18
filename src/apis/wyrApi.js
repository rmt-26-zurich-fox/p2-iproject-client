import axios from "axios";

const wyr = axios.create({
  baseURL: "http://localhost:3000",
});

export default wyr;
