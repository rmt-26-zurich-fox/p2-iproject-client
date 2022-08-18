import axios from "axios";

const instance = axios.create({
  baseURL: "https://iproject-londreeh.herokuapp.com",
});

export default instance;
