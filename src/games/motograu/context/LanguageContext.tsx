import React, { createContext, useState } from 'react'

export const LanguageContext = createContext({})

interface LanguageContextProps {
  children: React.ReactNode
}

export const LanguageContextProvider = ({
  children,
}: LanguageContextProps) => {
  const userLanguage = navigator.language

  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    userLanguage === 'pt-BR' || userLanguage === 'en-US'
      ? userLanguage
      : 'pt-BR'
  )

  const setLanguage = (language: string) => {
    setSelectedLanguage(language)
  }

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
