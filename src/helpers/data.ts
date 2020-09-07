import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(responseData: any): any {
  if (typeof responseData === 'string') {
    try {
      responseData = JSON.parse(responseData)
    } catch (e) {
      // nothing
    }
  }
  return responseData
}
