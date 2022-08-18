import axios from 'axios'

const instance = axios.create({
  baseURL: "https://serum-rysaldi.herokuapp.com/"
})

export default instance