import React, { useState, useEffect, useContext } from 'react'
import { Transaction } from '.'
import If from '@/core/components/conditions/if'
import { formatCoin } from '../../../../utils/format-currency'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { useLanguageContext } from '../../../../hooks/useLanguageContext'

type Props = {
  data: Transaction
}

export default function ListItem({ data }: Props) {
  const { gameStatus } = useContext<any>(CrashGameContext)

  console.log(gameStatus)

  const { selectedLanguage } = useLanguageContext()

  const isGreen = data.outcome == 'win'
  const [randomNumber, setRandomNumber] = useState<number>(0)

  // Gere o número aleatório uma única vez quando o componente for montado
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 21)
    setRandomNumber(randomNum)
  }, []) // O array vazio [] garante que o efeito seja executado apenas uma vez

  return (
    <div
      className={`flex items-center rounded mb-1 border text-xs border-transparent p-1.5 gap-1 ${
        isGreen
          ? 'border-green-700 bg-green-600 bg-opacity-20'
          : ' border-gray-700 bg-gray-600 bg-opacity-20'
      } `}
    >
      <h1 className="w-1/3 flex gap-3 overflow-hidden items-center">
        <img
          src={`https://api.multiavatar.com/${randomNumber}.svg`}
          className="w-5 h-5 rounded invert"
        />
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">
          {data.player.username}
        </span>
      </h1>
      <h1 className="w-1/4 text-center items-center gap-2">
        <span
          className={`w-10 text-right ${
            data.outcome !== 'win' &&
            gameStatus === 'game_over' &&
            'text-red-500 text-opacity-70'
          }`}
        >
          {formatCoin(
            Number(data.amount.toFixed(2)),
            selectedLanguage
          )}
        </span>
      </h1>
      <h1 className="w-1/4 items-center text-center gap-2">
        <If condition={data.outcome == 'win'}>
          <span className="bg-green-500 text-center mx-auto rounded-full text-xs h-5 flex items-center justify-center text-gray-100 w-12">
            {data.payout}x
          </span>
        </If>

        <If
          condition={
            data.outcome !== 'win' && gameStatus === 'game_over'
          }
        >
          <span className="text-red-500">-</span>
        </If>
      </h1>
      <div className="w-1/4 text-right">
        <If condition={data.outcome === 'win'}>
          {data.profit !== undefined &&
          typeof data.profit === 'number'
            ? `R$ ${data.profit.toFixed(2)}`
            : '0,00'}
        </If>

        <If
          condition={
            data.outcome !== 'win' && gameStatus === 'game_over'
          }
        >
          <span className="text-red-500 pr-4">-</span>
        </If>
      </div>
    </div>
  )
}
