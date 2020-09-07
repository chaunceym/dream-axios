import { DaxiosRequestConfig, DaxiosResponse, DaxiosPromise } from './types/index'
import { parseResponseHeaders } from './helpers/header'
import { createError, DaxiosError } from './helpers/error'
import { create } from 'domain'

export default function xhr(config: DaxiosRequestConfig): DaxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    if (timeout) request.timeout = timeout
    request.onreadystatechange = () => {
      if (request.readyState !== 4) return
      if (request.status === 0) return
      const response: DaxiosResponse = {
        data: responseType === 'text' ? request.responseText : request.response,
        status: request.status,
        headers: parseResponseHeaders(request.getAllResponseHeaders()),
        statusText: request.statusText,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = () => {
      console.log(1)
      reject(createError('NETWORK ERROR', config, null, request))
    }
    request.ontimeout = () => {
      reject(createError(`Timeout at ${timeout} ms`, config, 'ECONNABORTED', request))
    }
    Object.keys(headers).forEach(header => {
      if (data === null && header.toLowerCase() === 'content-type') {
        delete headers[header]
      } else {
        request.setRequestHeader(header, headers[header])
      }
    })

    request.send(data)

    function handleResponse(response: DaxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
