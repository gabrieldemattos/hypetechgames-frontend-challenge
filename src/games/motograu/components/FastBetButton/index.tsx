import React from 'react'

import { useLanguageContext } from '../../hooks/useLanguageContext'

interface FastBetButtonProps {
  value: number | string
  disabled: boolean
  onClick: () => void
}

const FastBetButton = ({
  value,
  disabled = false,
  onClick,
}: FastBetButtonProps) => {
  const { selectedLanguage } = useLanguageContext()

  return (
    <button
      className={`px-1 rounded-lg text-sm flex items-center justify-center text-center py-[.0625rem] border font-semibold ${
        disabled
          ? 'bg-gray-700 bg-opacity-30 text-gray-700 border-transparent cursor-not-allowed'
          : 'text-white border-gray-800 hover:bg-gray-800'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {selectedLanguage === 'pt-BR' ? 'R$' : '$'} {value}
    </button>
  )
}

export default FastBetButton
