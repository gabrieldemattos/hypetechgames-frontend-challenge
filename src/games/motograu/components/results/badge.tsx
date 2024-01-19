import React from 'react'

type Props = {
  multipler: string
  textColor: string
}

export default function MultiplierBadge({
  multipler,
  textColor,
}: Props) {
  return (
    <>
      <button
        className={`bg-black h-6 border border-gray-700 py-3 hover:border-gray-600 border-opacity-50 font-bold rounded-xl flex capitalize opacity-75 hover:opacity-100 transition items-center justify-center px-3 text-xs ${textColor}`}
      >
        {parseFloat(multipler).toFixed(2)}x
      </button>
    </>
  )
}
