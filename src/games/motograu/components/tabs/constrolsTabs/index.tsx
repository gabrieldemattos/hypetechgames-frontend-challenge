import React from 'react'
import { IoIosRepeat } from 'react-icons/io'
import { PiCursorClickThin } from 'react-icons/pi'

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
  return (
    <div className="tabs p-1 rounded bg-gray-700 bg-opacity-20 flex w-full justify-center">
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
              {tab.title === 'Normal' ? (
                <PiCursorClickThin className="w-5 h-5" />
              ) : (
                <IoIosRepeat className="w-5 h-5" />
              )}
              {tab.title}
            </div>
          </a>
        )
      })}
    </div>
  )
}
