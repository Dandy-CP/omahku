import axios from "axios";
import qs from "querystring";
import { QueryClient } from "@tanstack/react-query";
import { QueryFetchOptions, ApiError } from "@/types/client.type";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 45000,
  headers: {
    Accept: "application/json",
  },
});

export async function queryFetch({
  url,
  inputParams,
}: QueryFetchOptions): Promise<any> {
  let params = "";

  if (inputParams) {
    params = qs.stringify(inputParams);
  }

  return new Promise(async (resolve, reject) => {
    try {
      let fetchUrl = url;

      if (params) {
        fetchUrl += "?" + params;
      }

      const res = await client.get(fetchUrl);
      const json = await res.data;

      resolve(json);
    } catch (e: any) {
      reject(e as ApiError);
    }
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
