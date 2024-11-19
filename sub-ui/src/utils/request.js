import axios from "axios";



const request  = axios.create({
  headers: {
    'Access-Token': localStorage.getItem('yee-token')
  }
})


export default request;