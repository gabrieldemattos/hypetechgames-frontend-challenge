import './index.css'

import React, { useContext, useEffect } from 'react'
import Display from './components/display'
import Snackbar from '../motograu/components/snackbar/index'
import Results from './components/results/index'
import TransactionBar from './components/transaction-bar/index'
import Controls from './components/controls/crash-control'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { SessionContext } from '@/core/providers/session.provider'
import { GameStatus } from '@/core/providers/enums/game-status'
import Navbar from './components/navbar/index'
import { Chat } from './components/chat/desktop/index'
import ActivePlayers from './components/ActivePlayers'

function HomePage() {
  const { setLoading } = useContext<any>(SessionContext)
  const { iframeRef, gameStatus, executeAction, balance } =
    useContext<any>(CrashGameContext)

  useEffect(() => {
    iframeRef.current?.contentWindow.addEventListener(
      'instance-created',
      () => {
        setLoading(false)
        if (gameStatus == GameStatus.RUNNING)
          setTimeout(() => executeAction('start'), 1000)
      }
    )
  }, [iframeRef])

  return (
    <div className="flex min-h-screen overflow-hidden bg-gradient-to-r motograu-game">
      <div className="flex w-full sm:gap-3 min-h-screen relative">
        <section className="flex flex-col h-full grow p-0">
          {/* MENU DE NAVEGAÇÃO */}
          <div style={{ zIndex: 100 }}>
            <Navbar
              game="motograu"
              executeAction={executeAction}
              balance={balance}
            />
          </div>
          <div className="grid p-3 gap-3 grow rounded w-full grid-cols-12">
            {/* PARTE ESQUERDA, HISTÓRICO, APOSTAS E CHAT */}
            <div className="col-span-12 grow xl:col-span-3 xl:order-1 order-1 flex flex-col">
              <TransactionBar />

              <div className="w-full h-full hidden xl:block">
                <Chat />
                <div className="pl-2">
                  <ActivePlayers />
                </div>
              </div>
            </div>

            {/* DIREITA, TELA DE JOGO, CONTROLES DE APOSTA E HISTÓRICO DAS RODADAS ANTERIORES */}
            <div className="col-span-12 xl:col-span-9 relative xl:order-2">
              <div className="flex gap-3 h-full flex-col relative">
                <div className="grow relative z-0">
                  <iframe
                    ref={iframeRef}
                    className="rounded-md overflow-hidden w-full h-full pointer-events-none min-h-[15.625rem] sm:min-h-[18.75rem]"
                    src="/motograu/index.html"
                  ></iframe>
                  <div className="transform xl:translate-y-[-30.625rem] translate-y-[-12.5rem] md:translate-y-[-15.625rem]">
                    {/* RODADA COMEÇA EM.... */}
                    <Display color={'blue'} />
                  </div>
                </div>

                {/* HISTORICO DE RESULTADOS */}
                <Results />

                {/* CONTROLES DE APOSTAS */}
                <div className="div sm:mb-10 xl:mb-0">
                  <Controls />
                </div>
              </div>

              {/* MENSAGEM DE GANHO OU ERRO NA APOSTA */}
              <Snackbar />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
