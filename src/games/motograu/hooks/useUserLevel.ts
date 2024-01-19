import { useEffect, useState } from 'react'

export const useUserLevel = (bets: []) => {
  const [userLevel, setUserLevel] = useState<number>(1)
  const [xpToNextLevel, setXpToNextLevel] = useState<number>(0)

  const totalBets = bets.length
  const XP_PER_BET = 2
  const TOTAL_BETS_REQUIRED_TO_UP_A_LEVEL = 50

  const calculateLevelAndXp = () => {
    // Calcula a quantidade total de XP necessária para subir de nível (valor: 100)
    const xpForNextLevel =
      XP_PER_BET * TOTAL_BETS_REQUIRED_TO_UP_A_LEVEL

    // Calcula o total de XP com base nas apostas feitas
    const totalXp = totalBets * XP_PER_BET

    // Calcula o novo nível do usuário
    const newLevel = Math.floor(totalXp / xpForNextLevel) + 1

    // Calcula a quantidade de XP restante para o próximo nível
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
