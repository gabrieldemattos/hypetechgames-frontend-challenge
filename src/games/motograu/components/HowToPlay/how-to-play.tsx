import React from 'react'
import Modal from '@/core/components/modal'

import { BanknotesIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useLanguageContext } from '../../hooks/useLanguageContext'

type Props = {
  show: boolean
  toggle: Function
}

export default function HowToPlay({ show, toggle }: Props) {
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
                <BanknotesIcon className="w-6 h-6" /> Como jogar moto
                grau?
              </h1>
              <button
                onClick={() => toggle()}
                className="btn p-0 btn-sm hover:bg-transparent hover:text-white btn-ghost "
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </section>

            <div className="p-4 text-base ">
              <div className="flex flex-col gap-8 align-center py-4">
                <img
                  src="../images/logos/hypetech.png"
                  className="h-10 mx-auto"
                />
                <p className="font-semibold ">
                  A Hypetech é o último grito em entretenimento de
                  jogo para uma nova geração de jogadores. Poderá
                  ganhar várias vezes essa quantia em apenas alguns
                  segundos! Nossos Jogos Turbo baseiam-se em uma forma
                  que pode ser verificado no momento e é considerado
                  como a única garantia real de funcionamento de
                  justiça na indústria do jogo.
                </p>
              </div>

              <hr className="my-5" />

              <div className="p-0">
                <div className="flex flex-col gap-8 mb-8">
                  <div className="w-full">
                    <img
                      className="mx-auto min-w-[80%]"
                      src="../images/HTP/motograu/step-pt-1.png"
                    />
                    <div className="text-center mt-1 ">
                      <p
                        className="text-white font-semibold text-base italic"
                        style={{ lineHeight: '2' }}
                      >
                        Digite o valor desejado e clique em APOSTAR
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <img
                      className="mx-auto min-w-[80%]"
                      src="../images/HTP/motograu/step-2.png"
                    />
                    <div className="text-center mt-1 ">
                      <p
                        className="text-white font-semibold text-base italic"
                        style={{ lineHeight: '2' }}
                      >
                        Veja como o motoqueiro dá o grau e as
                        probabilidades sobem!
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <img
                      className="mx-auto min-w-[80%]"
                      src="../images/HTP/motograu/step-pt-3.png"
                    />
                    <div className="text-center mt-1">
                      <p
                        className="text-white font-semibold text-base italic"
                        style={{ lineHeight: '2' }}
                      >
                        Retirar antes do motoqueiro perder o
                        equilibrio e ganhar X vezes!
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-base text-red-400 italic">
                  No entanto, não se esqueça que tem um limite de
                  tempo. Tem de se retirar antes do motoqueiro perder
                  o equilibrio, caso contrário perderá a sua aposta.
                  Jogar <b>Moto Grau</b> é puro jogo de azar! É aqui
                  que se arrisca e ganha. Tudo depende de si!
                </p>

                <p className="text-lg font-bold text-white mt-12 mb-6">
                  Como jogar e quais são as regras?
                </p>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      Para fazer uma aposta, você precisa selecionar o
                      valor desejado e clicar no botão{' '}
                      <b>"INICIAR APOSTA"</b>. Caso você selecione um
                      valor pré definido, o valor selecionado será o
                      valor da aposta e será apostado automaticamente,
                      sem a necessidade de clicar no botão de{' '}
                      <b>INICIAR APOSTA</b>.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      Dito isto, não há necessidade de se limitar a
                      apenas uma aposta de cada vez. Você pode fazer
                      duas apostas ao mesmo tempo usando o painel de
                      apostas superior e inferior.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      Para retirar os seus ganhos, é necessário clicar
                      no botão <b>"RETIRAR"</b>. Os seus ganhos
                      consistem no total da sua aposta multiplicado
                      pelo multiplicador de cashout.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      Se não se retirar antes do motoqueiro perder o
                      equilibrio, a aposta é perdida.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mt-12 mb-6">
                  Aposta automática e retirada automática
                </h2>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>A
                      aposta automática pode ser ativada no painel de
                      qualquer aposta ao clicar na aba <b>Auto</b>.
                      Nesse caso, as apostas são feitas
                      automaticamente. No entanto, para retirar os
                      ganhos, você ainda precisa pressionar o botão
                      "Retirar" a cada rodada.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      Se você deseja automatizar completamente o jogo,
                      é possível configurar a retirada automática de
                      ganhos. Para fazer isso, você deve definir no
                      painel de apostas o valor de "Auto Retirar" e
                      quantas vezes deseja repetir esta jogada no
                      campo "Quantidade", e então, iniciar o jogo
                      automático clicando em <b>"APOSTA AUTO"</b>.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mt-12">
                  A nossa interface de jogo
                </h2>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Apostas ao vivo e Estatísticas
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p className="text-base hidden xl:block">
                      <span className="text-2xl pr-2">&#9755;</span> À
                      esquerda existe o painel "Apostas ao vivo".
                      Mostra as apostas que foram feitas na rodada
                      atual.
                    </p>

                    <p className="text-base xl:hidden">
                      <span className="text-xl pr-2">&#9755;</span>Ao
                      final da tela existe o painel "Apostas ao vivo".
                      Mostra as apostas que foram feitas na rodada
                      atual.
                    </p>

                    <p className="text-base ">
                      <span className="text-xl pr-2">&#9755;</span>O
                      painel <b>"Histórico"</b> exibe detalhes sobre
                      as apostas realizadas e os levantamentos ao
                      longo da participação do jogador no jogo.
                    </p>

                    <p className="text-base ">
                      <span className="text-xl pr-2">&#9755;</span>Os
                      resultados das rodadas anteriores são exibidos
                      entre a tela do jogo e os botões de aposta,
                      apresentando informações sobre os
                      multiplicadores das últimas rodadas.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Conversa dentro do jogo
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p className="text-base xl:hidden">
                      <span className="text-xl pr-2">&#9755;</span>
                      No canto superior direito, há uma barra de
                      bate-papo geral. Ele é projetado para se
                      comunicar com outros jogadores. Além disso, o
                      bate-papo apresenta automaticamente informações
                      sobre o recebimento de grandes ganhos.
                    </p>

                    <p className="text-base hidden xl:block">
                      <span className="text-xl pr-2">&#9755;</span>
                      No canto inferior esquerdo (abaixo das apostas e
                      histórico), você encontrará o bate-papo geral.
                      Ele é projetado para se comunicar com outros
                      jogadores. Além disso, o bate-papo apresenta
                      automaticamente informações sobre o recebimento
                      de grandes ganhos.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Desafios diários
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      Na barra de navegação você pode encontrar um
                      ícone de estrela, ao clicar você verá o desafio
                      diáro. Ao concluí-lo você receberá algumas
                      recompensas de acordo com a dificuldade do
                      desafio. O desafio muda ao término do dia.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Sistema de Rank
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      Você subirá de rank a cada 50 apostas, você pode
                      verificar todos os ranks clicando sobre o seu
                      nível atual.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Lidar com problemas técnicos
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-xl pr-2">&#9755;</span>O
                      operador não é responsável pela perda de uma
                      aposta devido a uma interrupção da conexão com a
                      Internet. Recomendamos jogar se você tiver uma
                      conexão estável.
                    </p>

                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      Caso ocorra uma falha no equipamento de jogo ou
                      no software do jogo, todas as apostas e
                      pagamentos serão confiscados. Entretanto, as
                      apostas serão reembolsadas na íntegra aos
                      jogadores afetados no prazo de 1 hora.
                    </p>
                  </div>
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
                <BanknotesIcon className="w-6 h-6" /> How to play
                wheelie?
              </h1>
              <button
                onClick={() => toggle()}
                className="btn p-0 btn-sm hover:bg-transparent hover:text-white btn-ghost "
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </section>

            <div className="p-4 text-base ">
              <div className="flex flex-col gap-8 align-center py-4">
                <img
                  src="../images/logos/hypetech.png"
                  className="h-10 mx-auto"
                />
                <p className="font-semibold ">
                  Hypetech is the latest in gaming entertainment for a
                  new generation of gamers. You can win several times
                  that amount in just a few seconds! Our Turbo Games
                  are based on a format that can be verified at the
                  moment and is considered the only real guarantee of
                  fairness in the gaming industry.
                </p>
              </div>

              <hr className="my-5" />

              <div className="p-0">
                <div className="flex flex-col gap-8 mb-8">
                  <div className="w-full">
                    <img
                      className="mx-auto min-w-[80%]"
                      src="../images/HTP/motograu/step-en-1.png"
                    />
                    <div className="text-center mt-1 ">
                      <p
                        className="text-white font-semibold text-base italic"
                        style={{ lineHeight: '2' }}
                      >
                        Enter the desired amount and click on BET
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <img
                      className="mx-auto min-w-[80%]"
                      src="../images/HTP/motograu/step-2.png"
                    />
                    <div className="text-center mt-1 ">
                      <p
                        className="text-white font-semibold text-base italic"
                        style={{ lineHeight: '2' }}
                      >
                        Watch as the rider does the wheelie and the
                        odds go up!
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <img
                      className="mx-auto min-w-[80%]"
                      src="../images/HTP/motograu/step-en-3.png"
                    />
                    <div className="text-center mt-1">
                      <p
                        className="text-white font-semibold text-base italic"
                        style={{ lineHeight: '2' }}
                      >
                        Withdraw before the rider loses balance and
                        win X times!
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-base text-red-400 italic">
                  However, don't forget that there is a time limit.
                  You must withdraw before the rider loses balance,
                  otherwise, you will lose your bet. Playing{' '}
                  <b>Wheelie</b> is pure gambling! This is where you
                  take risks and win. It all depends on you!
                </p>

                <p className="text-lg font-bold text-white mt-12 mb-6">
                  How to play and what are the rules?
                </p>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      To place a bet, you need to select the desired
                      amount and click the <b>"START BETTING"</b>{' '}
                      button. If you select a predefined amount, the
                      selected amount will be the bet amount and will
                      be automatically bet without the need to click
                      the <b>START BETTING</b> button.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      That said, there is no need to limit yourself to
                      just one bet at a time. You can place two bets
                      at the same time using the top and bottom
                      betting panels.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      To withdraw your winnings, you need to click the{' '}
                      <b>"WITHDRAW"</b> button. Your winnings consist
                      of the total of your bet multiplied by the
                      cashout multiplier.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      If you do not withdraw before the rider loses
                      balance, the bet is lost.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mt-12 mb-6">
                  Automatic betting and automatic withdrawal
                </h2>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>{' '}
                      Automatic betting can be activated on the panel
                      of any bet by clicking on the <b>Auto</b> tab.
                      In this case, bets are placed automatically.
                      However, to withdraw winnings, you still need to
                      press the "Withdraw" button after each round.
                    </p>

                    <p>
                      <span className="text-2xl pr-2">&#9755;</span>
                      If you want to fully automate the game, it is
                      possible to set up automatic withdrawal of
                      winnings. To do this, you must set the "Auto
                      Withdraw" amount in the betting panel and how
                      many times you want to repeat this play in the
                      "Quantity" field, and then start automatic play
                      by clicking on <b>"AUTO BET"</b>.
                    </p>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mt-12">
                  Our game interface
                </h2>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Live Bets and Statistics
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p className="text-base hidden xl:block">
                      <span className="text-2xl pr-2">&#9755;</span>{' '}
                      On the left is the "Live Bets" panel, displaying
                      bets placed in the current round.
                    </p>

                    <p className="text-base xl:hidden">
                      <span className="text-xl pr-2">&#9755;</span> At
                      the bottom of the screen is the "Live Bets"
                      panel, showing bets made in the current round.
                    </p>

                    <p className="text-base ">
                      <span className="text-xl pr-2">&#9755;</span>The
                      "History" panel provides details on bets placed
                      and withdrawals made during the player's
                      participation in the game.
                    </p>

                    <p className="text-base ">
                      <span className="text-xl pr-2">&#9755;</span>
                      Results from previous rounds are displayed
                      between the game screen and the bet buttons,
                      providing information on the multipliers from
                      the last rounds.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    In-game chat
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p className="text-base xl:hidden">
                      <span className="text-xl pr-2">&#9755;</span>
                      In the top right corner, there is a general chat
                      bar. It is designed to communicate with other
                      players. In addition, the chat automatically
                      displays information about receiving big wins.
                    </p>

                    <p className="text-base hidden xl:block">
                      <span className="text-xl pr-2">&#9755;</span> In
                      the bottom left corner (below bets and history),
                      you'll find the general chat. It is designed for
                      communication with other players. Additionally,
                      the chat automatically highlights information
                      about significant wins.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Daily challenges
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      In the navigation bar, you can find a star icon,
                      clicking on it you will see the daily challenge.
                      By completing it, you will receive some rewards
                      according to the difficulty of the challenge.
                      The challenge changes at the end of the day.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Rank system
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      You will move up in rank every 50 bets, you can
                      check all ranks by clicking on your current
                      level.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-7">
                  <h3 className="text-base text-light text-red-400 opacity-1 mb-2 text-center">
                    Dealing with technical issues
                  </h3>

                  <div className="flex flex-col pl-4 gap-4">
                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      The operator is not responsible for the loss of
                      a bet due to an interruption in the Internet
                      connection. We recommend playing if you have a
                      stable connection.
                    </p>

                    <p>
                      <span className="text-xl pr-2">&#9755;</span>
                      If there is a failure in the gaming equipment or
                      game software, all bets and payments will be
                      confiscated. However, bets will be fully
                      refunded to affected players within 1 hour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
