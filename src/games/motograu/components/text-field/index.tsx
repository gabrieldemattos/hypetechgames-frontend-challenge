import React from 'react'

import { useLanguageContext } from '../../hooks/useLanguageContext'

type Props = {
  id: string
  name: string
  label: string
  disabled: boolean
  value: any
  setValue: Function
}

const TextField = ({
  id,
  name,
  label,
  disabled = false,
  value,
  setValue,
}: Props) => {
  const { selectedLanguage } = useLanguageContext()

  return (
    <div className="relative w-full h-full">
      <div
        className={`flex items-center justify-center h-full font-bold bg-gray-600 bg-opacity-40 input input-sm rounded px-2 pt-6 w-full border-0 border-gray-300 p-2 ${
          disabled
            ? 'bg-gray-700 bg-opacity-30 text-gray-700'
            : 'text-white'
        }`}
      >
        <input
          type="text"
          name={name}
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          id={id}
          autoComplete="off"
          className="h-full font-bold bg-transparent input p-0 input-sm w-full disabled:bg-transparent border-none text-base xl:text-2xl mt-[.0625rem] text-white outline-none focus:outline-none focus:ring-0"
          placeholder=" "
        />

        <span className="text-base xl:text-xl">
          {label === 'Quantidade'
            ? ''
            : selectedLanguage === 'pt-BR'
            ? 'R$'
            : '$'}
        </span>
      </div>
      <label
        htmlFor={id}
        className="absolute text-sm whitespace-nowrap capitalize text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 font-bold top-4 z-9 origin-[0] left-2 peer-focus:text-gray-400 peer-focus:dark:text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  )
}

export default TextField
