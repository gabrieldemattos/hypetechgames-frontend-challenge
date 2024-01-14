import React, { useContext, useEffect, useState } from 'react'
import Badge from './badge'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'

export default function MultiplierResults() {
  const [expand, setExpand] = useState(false)
  const { results, getResults } = useContext<any>(CrashGameContext)
  const { roundInfo, getRoundInfo } =
    useContext<any>(CrashGameContext)

  const [showInfo, setShowInfo] = useState<boolean>(false)

  const showRoundInfo = (roundId) => {
    getRoundInfo(roundId)
    setShowInfo(true)
  }

  useEffect(() => {
    getResults()
  }, [])

  return (
    <div className="w-full h-10 relative z-10">
      <div className="flex items-center overflow-x-auto gap-2 pb-1 results md:sm:[&::-webkit-scrollbar]:block [&::-webkit-scrollbar]:hidden">
        {results?.map((result, idx) => {
          return (
            <Badge
              key={idx}
              showRoundInfo={showRoundInfo}
              textColor={
                result.point < 2
                  ? 'text-[#34b4ff]'
                  : result.point < 10
                  ? 'text-[#913ef8]'
                  : 'text-[#c017b4]'
              }
              roundId={result.round_id}
              multipler={result.point}
            />
          )
        })}
      </div>
    </div>
  )
}
