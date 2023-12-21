export type MutationMethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface QueryFetchOptions {
  url: string;
  inputParams?: any;
}

export interface MutationFetchOptions {
  url: string;
  method: MutationMethodType;
  body?: any;
  baseURL?: string;
}

export interface MessageResult {
  status: number;
  message: string;
}

export interface ApiError {
  message: string;
  name: string;
  stack: string;
  config: any;
  code: string;
  status: null | number;
}
