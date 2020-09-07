import daxios, { DaxiosError, DaxiosResponse } from '../../src/index'
import { DaxiosError } from '../../src/helpers/error'

daxios({
  method: 'get',
  url: '/error/get1'
})
  .then(res => console.log(res))
  .catch((e: DaxiosError) => console.dir(e))

daxios({
  method: 'get',
  url: '/error/get'
})
  .then(res => console.log(res))
  .catch(e => console.dir(e))

daxios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
})
  .then(res => console.log(res))
  .catch((e: DaxiosError) => console.log(e))

setTimeout(() => {
  daxios({
    method: 'get',
    url: '/error/get'
  })
    .then(res => console.log(res))
    .catch((e: DaxiosError) => {
      console.log(e)
    })
}, 5000)
