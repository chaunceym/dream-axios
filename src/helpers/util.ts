import { type } from 'os'

const toString = Object.prototype.toString

/**
 * 类型保护 Date
 * @param val
 */
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

/**
 * 类型保护 Object
 * @param val
 */
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
