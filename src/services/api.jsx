import axios from 'axios'

const token = localStorage.getItem('@Easy:Token')

export const BASE_URL = 'https://easy-cooking-api.onrender.com/api'
export const BASE_URL_LOCAL = 'http://127.0.0.1:8000/api'
export const BearerToken = `Bearer ${token}`

export const Api = axios.create({
  baseURL: BASE_URL_LOCAL,
  timeout: 15000,
});
