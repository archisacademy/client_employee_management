import axios from "axios"

// change this baseURL whereever your api is running
const api = axios.create({
  baseURL: "http://3.122.100.255:3001",
})

export { api }
