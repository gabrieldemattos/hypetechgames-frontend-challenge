import { useContext } from 'react'
import { LanguageContext } from './../context/LanguageContext'

export const useLanguageContext = () => {
  const context = useContext<any>(LanguageContext)

  if (!context) console.log('Ocorreu um erro ao selecionar o idioma.')

  return context
}
