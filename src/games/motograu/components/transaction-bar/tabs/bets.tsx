import React, { useContext, useEffect } from 'react'
import BetList from '../lists/bets'

import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import Header from '../lists/bets/header'

import { useLanguageContext } from '../../../hooks/useLanguageContext'
import { formatCoin } from '../../../utils/format-currency'

export default function BetsTab() {
  const { selectedLanguage } = useLanguageContext()

  const { registeredBets, getRegisteredBets } =
    useContext(CrashGameContext)

  const sum = (bets = []) => {
    let sum = 0
    bets.map((bet) => {
      sum += parseFloat(bet.amount)
    })

    return formatCoin(Number(sum.toFixed(2)), selectedLanguage)
  }

  useEffect(() => {
    getRegisteredBets()
  }, [])

  return (
    <div className="flex flex-col flex-1">
      <section className="py-3  w-full">
        <div className="flex justify-between rounded bg-opacity-25 items-center ">
          <div className="text-sm font-bold text-white">
            {registeredBets.length}{' '}
            {selectedLanguage === 'pt-BR' ? 'apostadores' : 'bettors'}{' '}
            <span className="font-normal text-xs text-gray-400">
              {selectedLanguage === 'pt-BR'
                ? 'na rodada'
                : 'in the round'}
            </span>
          </div>

          <span className="text-sm font-bold text-white">
            {sum(registeredBets)}
          </span>
        </div>
      </section>

      <Header />
      <section className="h-full flex-shrink-1 flex-grow basis-0 overflow-y-scroll scrollbar-w-0 scrollbar-track-gray-400 scrollbar-thumb-gray-600 scrollbar scrollbar-track-rounded scrollbar-thumb-rounded">
        <BetList items={registeredBets} />
      </section>
    </div>
  )
}
