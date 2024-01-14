import React from 'react'

import { useLanguageContext } from '../../hooks/useLanguageContext'

type Props = {
  value: number
  max: number
  color: string
}

const getBackgroundColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-[#1b648f]'
    case 'lime':
      return 'bg-[#28a909]'
    case 'yellow':
      return 'bg-yellow-400'
    case 'amber':
      return 'bg-amber-600'
    case 'red':
      return 'bg-red-700'
    case 'pink':
      return 'bg-pink-700'
    case 'rose':
      return 'bg-rose-700'
    case 'gray':
      return 'bg-gray-400'
    default:
      return 'bg-black'
  }
}

export default function ProgressBar({ max, value, color }: Props) {
  const { selectedLanguage } = useLanguageContext()

  return (
    <div className="w-[28.125rem] relative flex items-center border border-gray-500 bg-gray-600 border-opacity-50 rounded-md h-9 dark:bg-gray-700 p-1">
      <div
        className={`${getBackgroundColor(
          color
        )} h-full transition-all duration-100 rounded-md`}
        style={{
          width: `${(value / max) * 100}%`,
          transitionTimingFunction: 'linear',
          transitionDuration: '990ms',
        }}
      ></div>

      <small className="absolute w-full h-full font-semibold text-center text-xs pointer-events-none flex items-center justify-center text-gray-200 uppercase tracking-wide">
        {selectedLanguage === 'pt-BR'
          ? 'A próxima rodada começará em'
          : 'Next round starts in'}{' '}
        {Math.abs(value)}{' '}
        {selectedLanguage === 'pt-BR'
          ? value > 1
            ? 'segundos'
            : 'segundo'
          : value > 1
          ? 'seconds'
          : 'second'}
        .{' '}
        {selectedLanguage === 'pt-BR'
          ? 'Prepare-se!'
          : 'Prepare yourself!'}
      </small>
    </div>
  )
}
