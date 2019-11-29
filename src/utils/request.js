import axios from "axios";
import { ORIGIN } from "../constants";

// 添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error.response);
    if (error.response.status === 401) {
      window.location.pathname = "/login";
    }
    // ......在做别的统一处理
    return Promise.reject(error);
  }
);

export default function request(url, options = {}) {
  return axios({
    url: /^http/.test(url) ? url : `${ORIGIN}${url}`,
    method: "get",
    // 携带cookie信息
    withCredentials: true,
    ...options,
    data: options.body
  });
}
