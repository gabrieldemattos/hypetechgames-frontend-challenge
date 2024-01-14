import React, { useContext, useEffect } from 'react'
import Display from './components/display'
import Snackbar from './components/snackbar/index'
import Results from './components/results/index'
import TransactionBar from './components/transaction-bar/index'
import Controls from './components/controls/crash-control'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { SessionContext } from '@/core/providers/session.provider'
import { GameStatus } from '@/core/providers/enums/game-status'
import Navbar from './components/navbar/index'
import { Chat } from './components/chat/desktop/index'
import ActivePlayers from './components/ActivePlayers'

export function HomePage() {
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
          <div style={{ zIndex: 100 }}>
            <Navbar
              game="motograu"
              executeAction={executeAction}
              balance={balance}
            />
          </div>
          <div className="grid p-3 gap-3 grow rounded w-full grid-cols-12">
            <div className="col-span-12 sm:col-span-4 grow xl:col-span-3 order-2 sm:order-1">
              {/* CONTROLES DE APOSTAS */}
              <Controls />

              {/* CHAT */}
              <div className="w-full h-full hidden xl:block">
                <Chat />
                <div className="pl-2">
                  <ActivePlayers />
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-8 xl:col-span-7 relative order-1 sm:order-1 lg:order-2">
              <div className="flex gap-3 h-full flex-col relative">
                <div className="grow relative z-0">
                  <iframe
                    ref={iframeRef}
                    className="rounded-md overflow-hidden w-full h-full pointer-events-none min-h-[15.625rem] sm:min-h-[18.75rem]"
                    src="/motograu/index.html"
                  ></iframe>
                  <div className="transform sm:translate-y-[-40.625rem] translate-y-[-12.5rem]">
                    {/* RODADA COMEÇA EM.... */}
                    <Display color={'blue'} />
                  </div>
                </div>

                {/* HISTORICO DE RESULTADOS */}
                <Results />
              </div>

              {/* MENSAGEM DE GANHO OU ERRO NA APOSTA */}
              <Snackbar />
            </div>

            <div className="col-span-12 xl:col-span-2 w-full h-full order-3">
              {/* APOSTAS} */}
              <TransactionBar />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
