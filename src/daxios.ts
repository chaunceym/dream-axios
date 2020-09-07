import { DaxiosRequestConfig, DaxiosPromise, DaxiosResponse } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/header'
/**
 * axios 请求函数
 * @param config 请求配置
 */
function daxios(config: DaxiosRequestConfig): DaxiosPromise {
  processConfig(config)
  return xhr(config).then(res => transformResponseData(res))
}
/**
 * 处理config
 * @param config 请求配置
 */
function processConfig(config: DaxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}
/**
 * 转换 URL
 * @param config 请求配置
 */
function transformURL(config: DaxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: DaxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: DaxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformResponseData(response: DaxiosResponse): DaxiosResponse {
  response.data = transformResponse(response.data)
  return response
}
export default daxios
