import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocktmovies-api.onrender.com"
})