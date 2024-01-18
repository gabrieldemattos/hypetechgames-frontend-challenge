import React, { useContext, useEffect, useState } from 'react'
import BetList, { TransactionStatus } from '../lists/history'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import Header from '../lists/history/header'

import { useLanguageContext } from '../../../hooks/useLanguageContext'
import { formatCoin } from '../../../utils/format-currency'

export default function HistoryTab() {
  const { selectedLanguage } = useLanguageContext()

  const { betsHistory, getBetsHistory } = useContext(CrashGameContext)

  const sum = (bets = []) => {
    let sum = 0
    bets.map((bet) => {
      sum += parseFloat(bet.amount)
    })

    return formatCoin(Number(sum.toFixed(2)), selectedLanguage)
  }

  useEffect(() => {
    getBetsHistory()
  }, [betsHistory])

  return (
    <div className="flex flex-col flex-1">
      <section className="py-3 w-full">
        {selectedLanguage === 'pt-BR' ? (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-sm">
                Você já apostou:{' '}
                <span className="text-white font-bold">
                  {betsHistory.length} vezes
                </span>
              </div>
            </div>

            <span className="text-sm font-bold text-white">
              {sum(betsHistory)}
            </span>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-sm">
                You have already bet:{' '}
                <span className="text-white font-bold">
                  {betsHistory.length} times
                </span>
              </div>
            </div>

            <span className="text-sm font-bold text-white">
              {sum(betsHistory)}
            </span>
          </div>
        )}
      </section>

      <Header />

      <section className="h-full flex-shrink-1 flex-grow basis-0  overflow-y-scroll scrollbar-w-0 scrollbar-track-gray-400 scrollbar-thumb-gray-700 scrollbar scrollbar-track-rounded scrollbar-thumb-rounded">
        <BetList items={betsHistory} />
      </section>
    </div>
  )
}
