import { BsCoin } from 'react-icons/bs'
import { GoHistory } from 'react-icons/go'
import React from 'react'

import { useLanguageContext } from '../../../hooks/useLanguageContext'

export type Tab = {
  key: string
  title: string
}

type Props = {
  tabs: Tab[]
  active: string
  size: string
  toggle: Function
}

export default function Tabs({ tabs, size, active, toggle }: Props) {
  const { selectedLanguage } = useLanguageContext()

  return (
    <div className="tabs p-1 rounded bg-gray-700 bg-opacity-20 flex w-full justify-center">
      {selectedLanguage === 'pt-BR' && (
        <>
          {tabs.map((tab) => {
            return (
              <a
                key={tab.key}
                className={`tab tab-sm flex max:w-[50%] items-center text-xs font-medium ${size} ${
                  active == tab.key
                    ? `rounded bg-gray-700 bg-opacity-25 text-gray-300`
                    : ''
                }`}
                onClick={() => toggle(tab.key)}
              >
                <div className="flex gap-2 items-center">
                  {tab.title === 'Histórico' ? (
                    <GoHistory className="w-5 h-5 text-gray-400" />
                  ) : (
                    <BsCoin className="w-5 h-5 text-yellow-300" />
                  )}
                  {tab.title}
                </div>
              </a>
            )
          })}
        </>
      )}

      {selectedLanguage === 'en-US' && (
        <>
          {tabs.map((tab) => {
            return (
              <a
                key={tab.key}
                className={`tab tab-sm flex max:w-[50%] items-center text-xs font-medium ${size} ${
                  active == tab.key
                    ? `rounded bg-gray-700 bg-opacity-25 text-gray-300`
                    : ''
                }`}
                onClick={() => toggle(tab.key)}
              >
                <div className="flex gap-2 items-center">
                  {tab.title === 'History' ? (
                    <GoHistory className="w-5 h-5 text-gray-400" />
                  ) : (
                    <BsCoin className="w-5 h-5 text-yellow-300" />
                  )}
                  {tab.title}
                </div>
              </a>
            )
          })}
        </>
      )}
    </div>
  )
}
