import axios from "axios";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { config } from "./config";

const { request_timeout, default_headers } = config;

const { HOST, PREFIX, FILE_HOST, SALE_HOST, SALE_PREFIX } = ProcessEnv;

export enum RequestType {
  upload = "upload",
  sale = "sale",
  approval = "approval",
  normal = "normal",
  other = "other",
}

const baseURLMap = new Map<string, string>([
  [RequestType.upload, FILE_HOST],
  [RequestType.sale, SALE_HOST + SALE_PREFIX],
  [RequestType.approval, HOST],
  [RequestType.normal, HOST + PREFIX],
]);

// 创建axios实例
const service: AxiosInstance = axios.create({
  // baseURL: base_url, // api 的 base_url
  timeout: request_timeout, // 请求超时时间
  withCredentials: true, // 禁用 Cookie 等信息
  headers: {
    ...default_headers,
  },
});

// request拦截器
service.interceptors.request.use(
  (
    config: AxiosRequestConfig & {
      requestType: RequestType;
      customBaseURL: string;
    }
  ) => {
    // TODO: baseUrl override

    const requestType = config.requestType;
    // 如果指定 baseUrl 就不改了
    config.baseURL =
      config.customBaseURL ||
      baseURLMap.get(config.requestType) ||
      baseURLMap.get(RequestType.normal);

    if (requestType === RequestType.normal) {
      //
    }

    return config;
  }
);

// response拦截器
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
