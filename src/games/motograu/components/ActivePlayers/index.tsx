import React, { useEffect, useState } from 'react'

import { useLanguageContext } from '../../hooks/useLanguageContext'

const ActivePlayers = () => {
  const [activePlayers, setActivePlayers] = useState<number>(0)

  useEffect(() => {
    const randomInterval = setInterval(() => {
      setActivePlayers(Math.floor(Math.random() * 100))
    }, 3000)

    return () => clearTimeout(randomInterval)
  }, [])

  const { selectedLanguage } = useLanguageContext()

  return (
    <div className="flex items-center gap-1">
      <div className="block rounded-full bg-green-custom h-2 w-2"></div>
      <div className="text-semibold text-white text-sm">
        {selectedLanguage === 'pt-BR' ? (
          <span>
            {activePlayers}{' '}
            {activePlayers === 1 ? 'jogador' : 'jogadores'} online
          </span>
        ) : (
          <span>
            {activePlayers}{' '}
            {activePlayers === 1 ? 'player' : 'players'} online
          </span>
        )}
      </div>
    </div>
  )
}

export default ActivePlayers
