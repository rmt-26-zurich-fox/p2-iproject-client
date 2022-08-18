import axios from 'axios'

const instance = axios.create({
  baseURL: "https://p2-individual-project-beauty8.herokuapp.com"
})

export default instance;
