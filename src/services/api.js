import axios from "axios";

export const Api = axios.create({
  baseURL: "https://easy-cook-m3.herokuapp.com",
  timeout: 15000,
});
