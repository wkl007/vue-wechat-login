import dayjs from 'dayjs'
import numeral from 'numeral'

/**
 * 格式化时间
 * @param date
 * @param format
 * @returns {string}
 */
export function dateFormat (date, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return
  return dayjs(date).format(format)
}

/**
 * 格式化数字
 * @param number
 * @param format
 * @returns {*}
 */
export function numberFormat (number, format = '0,00.00') {
  return numeral(number).format(format)
}
