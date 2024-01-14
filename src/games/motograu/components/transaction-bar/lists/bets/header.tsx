import React from 'react'

import { useLanguageContext } from '../../../../hooks/useLanguageContext'

export default function Header() {
  const { selectedLanguage } = useLanguageContext()

  return (
    <div className="w-full bg-transparent rounded z-10 grid-cols-5 flex items-center text-xs p-2 text-white">
      {selectedLanguage === 'pt-BR' ? (
        <>
          <h1 className="w-1/4 flex gap-3 items-center font-bold capitalize">
            Apostador
          </h1>
          <h1 className="w-1/4 text-center font-bold capitalize">
            Valor
          </h1>
          <h1 className="w-1/4 text-center font-bold capitalize">
            Odd
          </h1>
          <div className="w-1/4 text-right font-bold capitalize">
            Lucro
          </div>
        </>
      ) : (
        <>
          <h1 className="w-1/4 flex gap-3 items-center font-bold capitalize">
            Bettor
          </h1>
          <h1 className="w-1/4 text-center font-bold capitalize">
            Amount
          </h1>
          <h1 className="w-1/4 text-center font-bold capitalize">
            Odd
          </h1>
          <div className="w-1/4 text-right font-bold capitalize">
            Profit
          </div>
        </>
      )}
    </div>
  )
}
