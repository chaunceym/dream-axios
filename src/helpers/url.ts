import { isDate, isPlainObject } from './util'
/**
 * 转换字符串
 * @param val 转换过得字符串
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
/**
 * 拼接路径
 * @param url 请求路径
 * @param params 请求参数
 */
export function buildURL(url: string, params: any): string {
  if (!params) return url
  const parts: string[] = []
  // 处理 params
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') return
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = parts.join('&')
  if (serializedParams) {
    // 吃掉 # 号
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    // url 是否有参数
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
