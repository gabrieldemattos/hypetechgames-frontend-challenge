import React, { useContext } from 'react'
import { RiVipCrownFill } from 'react-icons/ri'

import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { useUserLevel } from '../../hooks/useUserLevel'

import { ranks } from '../../utils/utils'

import { useLanguageContext } from '../../hooks/useLanguageContext'

const UserRank = () => {
  const { selectedLanguage } = useLanguageContext()

  const { betsHistory } = useContext<any>(CrashGameContext)

  const { userLevel, xpToNextLevel } = useUserLevel(betsHistory)

  return (
    <div className="flex flex-col w-full gap-1">
      {selectedLanguage === 'pt-BR' ? (
        <>
          <div className="flex items-center justify-between w-full gap-3">
            {ranks.map(
              (rank) =>
                userLevel >= rank.minLevel &&
                userLevel <= rank.maxLevel && (
                  <div
                    key={rank.namePT}
                    className={`flex items-center gap-1 ${rank.color}`}
                  >
                    <RiVipCrownFill className="h-5 w-5" />
                    <p className="text-xs">{rank.namePT}</p>
                  </div>
                )
            )}

            <p className="text-xs hidden xl:block">
              Nível {userLevel}
            </p>
          </div>

          <div className="w-full h-1 rounded bg-gray-700">
            {ranks.map(
              (rank) =>
                userLevel >= rank.minLevel &&
                userLevel <= rank.maxLevel && (
                  <div
                    className={`h-full rounded ${rank.bg}`}
                    key={rank.namePT}
                    style={{ width: `${xpToNextLevel}%` }}
                  ></div>
                )
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between w-full gap-3">
            {ranks.map(
              (rank) =>
                userLevel >= rank.minLevel &&
                userLevel <= rank.maxLevel && (
                  <div
                    key={rank.nameEN}
                    className={`flex items-center gap-1 ${rank.color}`}
                  >
                    <RiVipCrownFill className="h-5 w-5" />
                    <p className="text-xs">{rank.nameEN}</p>
                  </div>
                )
            )}

            <p className="text-xs hidden xl:block">
              Level {userLevel}
            </p>
          </div>

          <div className="w-full h-1 rounded bg-gray-700">
            {ranks.map(
              (rank) =>
                userLevel >= rank.minLevel &&
                userLevel <= rank.maxLevel && (
                  <div
                    className={`h-full rounded ${rank.bg}`}
                    key={rank.nameEN}
                    style={{ width: `${xpToNextLevel}%` }}
                  ></div>
                )
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default UserRank
