import Modal from '@/core/components/modal'
import { BanknotesIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

import { useLanguageContext } from '../../hooks/useLanguageContext'

type Props = {
  show: boolean
  toggle: Function
}

export default function About({ show, toggle }: Props) {
  const { selectedLanguage } = useLanguageContext()

  return (
    <>
      {selectedLanguage === 'pt-BR' ? (
        <Modal show={show} toggle={toggle}>
          <div className="py-0">
            <section
              className="py-2 flex justify-between items-center px-3 pt-3"
              style={{
                position: 'sticky',
                top: 0,
                backgroundColor: '#141414',
                zIndex: 9999,
              }}
            >
              <h1 className="text-xl uppercase font-bold pl-1 flex gap-4 w-full items-center justify-center text-white">
                <BanknotesIcon className="w-6 h-6" /> O Que é Provably
                Fair?
              </h1>
              <button
                onClick={() => toggle()}
                className="btn p-0 btn-sm hover:bg-transparent hover:text-white btn-ghost "
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </section>
            <div className="p-4 text-base">
              <div className="flex flex-col gap-8 py-4">
                <img
                  src="../images/icons/SecureLogo.svg"
                  className="h-35 mx-auto"
                />
                <p className="font-semibold text-center text-white">
                  ProvablyFair - 100% FAIR GAME
                </p>
                <div>
                  <p className="font-semibold text-center text-red-400">
                    Este jogo é baseado em tecnologia criptográfica
                    chamada "Provably Fair". Esta tecnologia garante
                    100% de justiça no resultado do jogo. Com esta
                    tecnologia, é impossível que terceiros interfiram
                    no processo do jogo.
                  </p>
                </div>
              </div>

              <hr className="my-5" />

              <p className="text-lg font-bold text-white mt-12 mb-6">
                COMO ISTO FUNCIONA
              </p>

              <div className="flex flex-col gap-1 mt-7">
                <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                  Explicação rápida
                </h3>

                <div className="flex flex-col pl-4 gap-4">
                  <p>
                    <span className="text-xl pr-2">&#9755;</span>O
                    resultado de cada rodada (multiplicador "Fly away"
                    do jogo) não é gerado em nossos servidores. É
                    gerado com a ajuda de jogadores redondos e é
                    totalmente transparente. Dessa forma, é impossível
                    alguém manipular a saída do jogo. Além disso,
                    qualquer pessoa pode verificar e confirmar a
                    imparcialidade do jogo
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-7">
                <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                  Mais informações
                </h3>

                <div className="flex flex-col pl-4 gap-4">
                  <p>
                    <span className="text-xl pr-2">&#9755;</span>O
                    resultado da rodada é gerado a partir de quatro
                    participantes independentes da rodada: o operador
                    do jogo e os 3 primeiros apostadores da rodada. O
                    operador está gerando a semente do servidor (16
                    símbolos aleatórios). A versão hash desta semente
                    de servidor está disponível publicamente antes do
                    início da rodada (no menu do usuário, marque
                    "Configurações provavelmente justas" e depois
                    "Semente do próximo servidor SHA256") A semente do
                    cliente é gerada ao lado de cada jogador e quando
                    a rodada começa, os 3 primeiros apostadores são
                    participando na geração do resultado redondo.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>
                    Quando a rodada começa, o jogo mescla a semente do
                    servidor com três sementes do cliente. A partir
                    dos símbolos mesclados é gerado o hash SHA512, e a
                    partir desse hash - o resultado do jogo.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="../images/icons/provably.svg"
                  className=" w-[100%] px-3 py-16"
                />

                <p className="text-lg font-bold text-white mb-6">
                  COMO CHECAR
                </p>

                <div className="flex flex-col pl-4 gap-4">
                  <p>
                    <span className="text-xl pr-2">&#9755;</span> Você
                    pode verificar a justiça de cada rodada do jogo no
                    histórico, clicando no ícone verde.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>
                    Na janela aberta, você verá a semente do servidor,
                    3 pares de sementes dos jogadores, hash combinado
                    e resultado da rodada.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>A
                    versão hash da semente do servidor das próximas
                    rodadas está disponível publicamente na janela de
                    configurações (no menu do usuário, marque
                    "Configurações provavelmente justas" e depois
                    "Próxima semente do servidor SHA256"). Você também
                    pode alterar a semente do seu cliente aqui.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>
                    Se você quiser participar da geração de resultados
                    da rodada, certifique-se de estar entre os 3
                    primeiros jogadores que apostam naquela rodada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal show={show} toggle={toggle}>
          <div className="py-0">
            <section
              className="py-2 flex justify-between items-center px-3 pt-3"
              style={{
                position: 'sticky',
                top: 0,
                backgroundColor: '#141414',
                zIndex: 9999,
              }}
            >
              <h1 className="text-xl uppercase font-bold pl-1 flex gap-4 w-full items-center justify-center text-white">
                <BanknotesIcon className="w-6 h-6" /> What is Provably
                Fair?
              </h1>
              <button
                onClick={() => toggle()}
                className="btn p-0 btn-sm hover:bg-transparent hover:text-white btn-ghost "
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </section>
            <div className="p-4 text-base">
              <div className="flex flex-col gap-8 py-4">
                <img
                  src="../images/icons/SecureLogo.svg"
                  className="h-35 mx-auto"
                />
                <p className="font-semibold text-center text-white">
                  ProvablyFair - 100% FAIR GAME
                </p>
                <div>
                  <p className="font-semibold text-center text-red-400">
                    This game is based on cryptographic technology
                    called "Provably Fair". This technology ensures
                    100% fairness in the game outcome. With this
                    technology, it is impossible for third parties to
                    interfere with the game process.
                  </p>
                </div>
              </div>

              <hr className="my-5" />

              <p className="text-lg font-bold text-white mt-12 mb-6">
                HOW IT WORKS
              </p>

              <div className="flex flex-col gap-1 mt-7">
                <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                  Quick Explanation
                </h3>

                <div className="flex flex-col pl-4 gap-4">
                  <p>
                    <span className="text-xl pr-2">&#9755;</span>The
                    result of each round (the "Fly away" multiplier of
                    the game) is not generated on our servers. It is
                    generated with the help of participating players
                    and is fully transparent. This way, it is
                    impossible for anyone to manipulate the game
                    outcome. Additionally, anyone can verify and
                    confirm the fairness of the game.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1 mt-7">
                <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                  More Information
                </h3>

                <div className="flex flex-col pl-4 gap-4">
                  <p>
                    <span className="text-xl pr-2">&#9755;</span>The
                    round result is generated from four independent
                    participants of the round: the game operator and
                    the first 3 bettors of the round. The operator is
                    generating the server seed (16 random symbols).
                    The hash version of this server seed is publicly
                    available before the round begins (in the user
                    menu, check "Provably Fair Settings" and then
                    "Next Server Seed SHA256"). The client seed is
                    generated alongside each player, and when the
                    round starts, the first 3 bettors participate in
                    generating the round result.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>When
                    the round begins, the game combines the server
                    seed with three client seeds. From the merged
                    symbols, the SHA512 hash is generated, and from
                    that hash - the game result.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="../images/icons/provably.svg"
                  className=" w-[100%] px-3 py-16"
                />

                <p className="text-lg font-bold text-white mb-6">
                  HOW TO CHECK
                </p>

                <div className="flex flex-col pl-4 gap-4">
                  <p>
                    <span className="text-xl pr-2">&#9755;</span>You
                    can check the fairness of each round in the game
                    history by clicking on the green icon.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>In
                    the opened window, you will see the server seed, 3
                    pairs of player seeds, combined hash, and round
                    result.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>The
                    hash version of the next round's server seed is
                    publicly available in the settings window (in the
                    user menu, check "Provably Fair Settings" and then
                    "Next Server Seed SHA256"). You can also change
                    your client seed here.
                  </p>

                  <p>
                    <span className="text-xl pr-2">&#9755;</span>If
                    you want to participate in generating round
                    results, make sure to be among the first 3 players
                    to bet in that round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
