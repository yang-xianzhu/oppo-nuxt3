import type { AsyncData, UseFetchOptions } from "nuxt/dist/app/composables";

const BASE_URL = "http://codercba.com:9060/oppo-nuxt/api/";

type Mehtods = "GET" | "POST";

export interface IResultData<T> {
  code: number;
  data: T;
}

class Request {
  request<T = any>(
    url: string,
    method: Mehtods,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const opt: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method,
        ...options,
      };
      switch (method) {
        case "GET":
          opt.query = data;
          break;
        case "POST":
          opt.body = data;
          break;
      }

      useFetch<T>(url, opt as any)
        .then((res) => {
          resolve(res as AsyncData<T, Error>);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "GET", params, options);
  }

  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request<T>(url, "POST", data, options);
  }
}

export default new Request();
