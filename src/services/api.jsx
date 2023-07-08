import axios from 'axios'

const token = localStorage.getItem('@Easy:Token')

export const BASE_URL = 'http://127.0.0.1:8000/api'
export const BearerToken = `Bearer ${token}`

export const Api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
