import { DaxiosRequestConfig, DaxiosResponse } from '../types/index'
export class DaxiosError extends Error {
  isDaxiosError: boolean
  config: DaxiosRequestConfig
  code?: string | null
  request?: any
  response?: DaxiosResponse
  constructor(
    message: string,
    config: DaxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: DaxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.response = response
    this.isDaxiosError = true
    // 解決 TS bug
    Object.setPrototypeOf(this, DaxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: DaxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: DaxiosResponse
) {
  return new DaxiosError(message, config, code, request, response)
}
