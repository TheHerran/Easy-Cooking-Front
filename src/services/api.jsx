import axios from 'axios'

const token = localStorage.getItem('@Easy:Token')

export const BASE_URL = 'https://easy-cooking-api.onrender.com/api'
export const BearerToken = `Bearer ${token}`

export const Api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
