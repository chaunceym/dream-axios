import daxios from '../../src/index'
import { search } from 'core-js/fn/symbol'

// daxios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// daxios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// daxios({
//   method: 'get',
//   url: '/base/get',
//   params: { date }
// })

// daxios({
//   method: 'get',
//   url: '/base/get',
//   params: { foo: '@;$, ' }
// })
// daxios({
//   method: 'get',
//   url: '/base/get',
//   params: { foo: 'bar', baz: null }
// })
// daxios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: { foo: 'bar' }
// })
// daxios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: { bar: 'baz' }
// })

daxios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=utf-8',
    name: 'chauncey'
  },
  responseType: 'json',
  data: {
    a: 1,
    b: 2
  }
}).then(res => console.log(res))
