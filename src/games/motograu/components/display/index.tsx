import React, { useContext } from 'react'
import ProgressBar from '../progress-bar/index'
import If from '../conditions/if'
import { GameStatus } from '@/core/providers/enums/game-status'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'

import { useLanguageContext } from '../../hooks/useLanguageContext'

type Props = {
  color: string
}

export default function Display({ color }: Props) {
  const { selectedLanguage } = useLanguageContext()

  const { startTimeout, gameStatus, multiplier } =
    useContext<any>(CrashGameContext)

  return (
    <div className="absolute top-0 pointer-events-none left-0 flex flex-col gap-3 justify-center items-center w-full h-full">
      <If condition={gameStatus == GameStatus.IDLE}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-auto">
            <ProgressBar
              max={10}
              value={startTimeout}
              color={color}
            />
          </div>
        </div>
      </If>

      <If condition={gameStatus == GameStatus.RUNNING}>
        <div className="relative flex justify-center items-center">
          <h1
            className="text-5xl xl:text-6xl font-bold text-gray-200 drop-shadow-lg"
            style={{
              fontFamily: 'marhey',
            }}
          >
            {multiplier?.toFixed(2)}x
          </h1>
        </div>
      </If>

      <If condition={gameStatus == GameStatus.MAINTENANCE}>
        <div className="relative flex justify-center items-center">
          <h1
            className="text-2xl md:text-3xl uppercase lg:text-3xl font-bold text-gray-200 drop-shadow-lg"
            style={{
              WebkitTextStroke: '1px #000',
            }}
          >
            {selectedLanguage === 'pt-BR'
              ? 'Em manutenção'
              : 'Under maintenance'}
          </h1>
        </div>
      </If>

      <If condition={gameStatus == GameStatus.GAME_OVER}>
        <h1
          className="text-3xl xl:text-6xl text-gray-200 font-extrabold uppercase mt-10"
          style={{
            fontFamily: 'marhey',
          }}
        >
          {selectedLanguage === 'pt-BR'
            ? 'O piloto caiu!'
            : 'The pilot crashed!'}
        </h1>
        <h1
          className={`text-5xl xl:text-6xl font-bold text-red-600 drop-shadow`}
          style={{
            fontFamily: 'marhey',
          }}
        >
          {multiplier.toFixed(2)}x
        </h1>
      </If>
    </div>
  )
}
