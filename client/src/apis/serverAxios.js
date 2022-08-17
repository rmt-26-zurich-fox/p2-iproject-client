import axios from "axios";

const serverAxios = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://hacktiv8-news-app-ekpp.herokuapp.com",
});

export default serverAxios;
