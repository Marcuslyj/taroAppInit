import service from "./service";
import { Obj } from "types/common";
import { RequestType } from "./service";

const { HOST, PREFIX } = ProcessEnv;
console.log("ProcessEnv", ProcessEnv);

const request = (option: any = {}) => {
  const { url, method, params, data } = option;
  debugger;
  return service({
    baseURL: HOST + PREFIX, // opton中的会baseURL覆盖
    requestType: RequestType.normal,
    ...option,
    ...(option.baseURL ? { customBaseURL: option.baseURL } : {}),
    url: url,
    method,
    params,
    data,
  });
};

export const get = async <T = any>(
  url: string,
  params: Obj = {},
  option: Obj = {}
) => {
  const res = await request({ ...option, url, method: "GET", params });
  return res?.data as unknown as T;
};

export const post = async <T = any>(
  url: string,
  data: Obj = {},
  option: Obj = {}
) => {
  debugger;
  const res = await request({ ...option, url, method: "POST", data });
  return res?.data as unknown as T;
};

export const postOriginal = async (
  url: string,
  data: Obj = {},
  option: Obj = {}
) => {
  const res = await request({ ...option, url, method: "POST", data });
  return res;
};
