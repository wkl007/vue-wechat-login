import dayjs, { ConfigType } from 'dayjs'
import numeral from 'numeral'

/**
 * 格式化时间
 * @param date
 * @param format
 */
export function dateFormat (date: ConfigType, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(format)
}

/**
 * 格式化数字
 * @param number
 * @param format
 */
export function numberFormat (number: number, format = '0,00.00'): string {
  return numeral(number).format(format)
}
