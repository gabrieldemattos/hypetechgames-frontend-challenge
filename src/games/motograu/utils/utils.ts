// available ranks
export const ranks = [
  {
    namePT: 'Bronze',
    nameEN: 'Bronze',
    minLevel: 1,
    maxLevel: 24,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500',
  },
  {
    namePT: 'Prata',
    nameEN: 'Silver',
    minLevel: 25,
    maxLevel: 49,
    color: 'text-[#c0c0c0]',
    bg: 'bg-[#c0c0c0]',
  },
  {
    namePT: 'Ouro',
    nameEN: 'Gold',
    minLevel: 50,
    maxLevel: 74,
    color: 'text-yellow-300',
    bg: 'bg-yellow-300',
  },
  {
    namePT: 'Diamante',
    nameEN: 'Diamond',
    minLevel: 75,
    maxLevel: 99,
    color: 'text-blue-300',
    bg: 'bg-blue-300',
  },
  {
    namePT: 'Platina',
    nameEN: 'Platinum',
    minLevel: 100,
    maxLevel: 999,
    color: 'text-white opacity-90',
    bg: 'bg-white opacity-90',
  },
  {
    namePT: 'Lenda',
    nameEN: 'Legend',
    minLevel: 1000,
    maxLevel: 99999,
    color: 'text-red-500',
    bg: 'bg-red-500',
  },
]

//daily challengs
export const challengesPT = [
  'Faça três apostas hoje.',
  'Alcance um multiplicador de 5x em uma rodada.',
  'Convide um amigo para juntar-se ao jogo.',
  'Faça uma aposta de R$ 10.',
  'Faça uma aposta mínima e uma aposta máxima durante o dia.',
  'Faça uma aposta automática.',
]

export const challengesEN = [
  'Place three bets today.',
  'Achieve a 5x multiplier in one round.',
  'Invite a friend to join the game.',
  'Place a bet of R$ 10.',
  'Place a minimum bet and a maximum bet during the day.',
  'Place an automatic bet.',
]

//available status
export const status = [
  {
    statusPT: 'disponível',
    statusEN: 'available',
    stylesIcon:
      'block mt-1 mr-1 rounded-full bg-green-custom h-2 w-2',
  },
  {
    statusPT: 'ausente',
    statusEN: 'away',
    stylesIcon: 'block mt-1 mr-1 rounded-full bg-yellow-300 h-2 w-2',
  },
  {
    statusPT: 'ocupado',
    statusEN: 'busy',
    stylesIcon: 'block mt-1 mr-1 rounded-full bg-red-600 h-2 w-2',
  },
  {
    statusPT: 'invisível',
    statusEN: 'invisible',
    stylesIcon: 'block mt-1 mr-1 rounded-full bg-gray-300 h-2 w-2',
  },
]

//format coin function
export const formatCoin = (value: number, language: string) => {
  if (language === 'pt-BR') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}
