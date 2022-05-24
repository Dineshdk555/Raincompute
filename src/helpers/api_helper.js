// import axios from "axios"
// import accessToken from "./jwt-token-access/accessToken"

// //pass new generated access token here
// const token = accessToken

// //apply base url for axios
// const API_URL = ""

// const axiosApi = axios.create({
//   baseURL: API_URL,
// })

// axiosApi.defaults.headers.common["Authorization"] = token

// axiosApi.interceptors.response.use(
//   response => response,
//   error => Promise.reject(error)
// )

// export async function get(url, config = {}) {
//   return await axiosApi.get(url, { ...config }).then(response => response.data)
// }

// export async function post(url, data, config = {}) {
//   return axiosApi
//     .post(url, { ...data }, { ...config })
//     .then(response => response.data)
// }

// export async function put(url, data, config = {}) {
//   return axiosApi
//     .put(url, { ...data }, { ...config })
//     .then(response => response.data)
// }

// export async function del(url, config = {}) {
//   return await axiosApi
//     .delete(url, { ...config })
//     .then(response => response.data)
// }


import axios from "axios";
import config from "../config";
import { GFL } from "../utils/storage";
const instance = axios.create({
  baseURL: config.WS_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = GFL("token");
  config.headers.token = token ? token : "hi";
  config.headers.ContentType = "application/json";
  return config;
});

export const userLogin = async (email, password) =>
  await instance.post("user/login", { email, password });

export const userRegister = async (email,  UserName, password) =>
  await instance.post("user/register", {

    email,
    UserName,
    password,
  });