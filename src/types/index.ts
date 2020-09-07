export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface DaxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface DaxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: DaxiosRequestConfig
  request: any
}

export interface DaxiosPromise extends Promise<DaxiosResponse> {}

export interface DaxiosError extends Error {
  isDaxiosError: boolean
  config: DaxiosRequestConfig
  code?: string | null
  request?: any
  response?: DaxiosResponse
}
