import { isPlainObject } from './util'

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return headers
}

export function normalizeHeaderName(headers: any, normalize: any): any {
  if (!headers) return
  Object.keys(headers).forEach(name => {
    if (name !== normalize && name.toUpperCase() === normalize.toUpperCase()) {
      headers[normalize] = headers[name]
      delete headers[name]
    }
  })
}

export function parseResponseHeaders(responseHeaders: string): any {
  const parsed: any = {}
  responseHeaders.split('\r\n').forEach(line => {
    let [key, value] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) return
    if (value) value = value.trim()
    parsed[key] = value
  })
  return parsed
}
