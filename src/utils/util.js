import dateFormat from 'dateformat'
import queryString from 'query-string'

export function formatTime(date, pattern = 'yyyy-mm-dd HH:MM:ss') {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return dateFormat(date, pattern)
}

export function getQuery(name, str) {
  var qs = queryString.parse(str)
  return qs[name]
}
