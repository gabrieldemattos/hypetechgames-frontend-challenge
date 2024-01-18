import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

export const getDateToHumanReadable = (
  date: string,
  language: string
): string => {
  if (language === 'en-US') {
    return dayjs(date).locale('en-US').fromNow()
  }

  return dayjs(date).locale('pt-BR').fromNow()
}
