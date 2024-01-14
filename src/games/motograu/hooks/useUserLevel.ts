import { useEffect, useState } from 'react'

export const useUserLevel = (bets: []) => {
  const [userLevel, setUserLevel] = useState<number>(1)
  const [xpToNextLevel, setXpToNextLevel] = useState<number>(0)

  const totalBets = bets.length
  const XP_PER_BET = 2

  const calculateLevelAndXp = () => {
    const xpForNextLevel = XP_PER_BET * 50
    const totalXp = totalBets * XP_PER_BET

    const newLevel = Math.floor(totalXp / xpForNextLevel) + 1
    const remainingXp = totalXp % xpForNextLevel

    setUserLevel(newLevel)
    setXpToNextLevel(remainingXp)
  }

  useEffect(() => {
    calculateLevelAndXp()
  }, [totalBets])

  return {
    userLevel,
    xpToNextLevel,
  }
}
