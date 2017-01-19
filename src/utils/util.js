import dateFormat from 'dateformat'
import queryString from 'query-string'

/**
 * 时间格式化
 * @param  {Date}   date    时间对象、new Date 可接受的值
 * @param  {String} pattern 格式模板
 * @return {String}         格式化的时间
 */
export function formatTime(date, pattern = 'yyyy-mm-dd HH:MM:ss') {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return dateFormat(date, pattern)
}

/**
 * 取参数
 * @param  {String} name 参数名
 * @param  {String} str  取值的字符串
 * @return {String}      值
 */
export function getQuery(name, str) {
  var qs = queryString.parse(str)
  return qs[name]
}
