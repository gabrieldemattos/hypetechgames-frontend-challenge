import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Tabs from '@/core/components/tabs'
import If from '@/core/components/conditions/if'
import TextField from '../../text-field/index'
import { GameStatus } from '@/core/providers/enums/game-status'

import { useLanguageContext } from '../../../hooks/useLanguageContext'

import {
  formatCurrencyToNumber,
  formatOdd,
  formatBRLCurrency,
} from '@/core/helpers/format-currency'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { TransactionStatus } from '@/core/providers/enums/transaction'
import { TransactionMode } from '@/core/providers/enums/transaction'
import { MAX_AMOUNT, MIN_AMOUNT } from '@/core/constants'
import FastBetButton from '../../FastBetButton'
import { formatCoin } from '../../../utils/utils'

interface FormProps {
  position: string
}

const getBackgroundColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-600 hover:bg-blue-700'
    case 'green':
      return 'bg-gradient-to-b from-emerald-600 to-emerald-800 hover:saturate-[300%]'
    case 'amber':
      return 'bg-gradient-to-b from-amber-500 to-amber-700 hover:saturate-[125%]'
    case 'yellow':
      return 'bg-yellow-400 hover:bg-yellow-500'
    case 'red':
      return 'bg-gradient-to-b from-red-600 to-red-800 hover:saturate-[125%]'
    case 'redDark':
      return 'bg-red-800 hover:bg-red-800'
    case 'pink':
      return 'bg-pink-700 hover:bg-pink-800'
    case 'rose':
      return 'bg-rose-700 hover:bg-rose-800'
    case 'custom-freestyle-v2':
      return 'custom-button-freestyle-v2'
    case 'purple':
      return 'bg-purple-600 hover:bg-purple-700'
    case 'blue2':
      return 'bg-blue-800 hover:bg-blue-700'
  }
}

export default function CrashForm({ position }: FormProps) {
  const { selectedLanguage } = useLanguageContext()

  const formRef = useRef<any>(null)
  const betValues = [5, 10, 20, 50, 100, 500]

  const {
    gameStatus,
    multiplier,
    registerTransaction,
    cancelTransaction,
    transactions,
    setTransactions,
    cashOut,
  } = useContext<any>(CrashGameContext)

  const transaction = transactions[position]

  useEffect(() => {
    updateAmount(formatBRLCurrency(1.0))
    updateExitValue(formatBRLCurrency(100.0))
  }, [])

  function submitTransaction(e) {
    e.preventDefault()
    registerTransaction(position)
  }

  function cancelFuterTransaction() {
    transaction.status = TransactionStatus.UNREGISTERED
    setTransactions({ ...transactions, [position]: transaction })
  }

  const updateMode = (value: string) => {
    transaction.mode = value
    setTransactions({ ...transactions, [position]: transaction })
  }

  const updateAmount = (value: string) => {
    let newAmount = formatCurrencyToNumber(value)

    if (newAmount < MIN_AMOUNT) newAmount = MIN_AMOUNT
    else if (newAmount > MAX_AMOUNT) newAmount = MAX_AMOUNT

    transaction.amount = formatOdd(newAmount)
    setTransactions({ ...transactions, [position]: transaction })
  }

  const updateExitValue = (value: string) => {
    const multiplier = formatCurrencyToNumber(value)

    transaction.exitValue = formatOdd(multiplier)
    // Verifica se o novo valor é menor que 1.5, se for, define como 1.5 - NUNCA pode ser menor que 1.5 pois reflete em um grande problema
    if (multiplier < 1.5) {
      transaction.exitValue = formatOdd(1.5)
    } else {
      transaction.exitValue = formatOdd(multiplier)
    }
    setTransactions({ ...transactions, [position]: transaction })
  }

  const updateRoundCount = (value) => {
    let parsed = parseInt(value)

    if (isNaN(parsed)) parsed = 0
    else if (parsed < 0) parsed = 0
    else if (parsed > 100) parsed = 100

    transaction.roundCount = parsed
    setTransactions({ ...transactions, [position]: transaction })
  }

  const doubleAmount = () => {
    const realAmount = transaction.amount
    updateAmount(formatBRLCurrency(realAmount * 2))
  }

  const divideAmount = () => {
    const realAmount = transaction.amount
    updateAmount(formatBRLCurrency(realAmount / 2))
  }

  const tabs = [
    { key: TransactionMode.COMMON, title: 'Normal' },
    { key: TransactionMode.AUTO, title: 'Auto' },
  ]

  return (
    <div className="bg-black border border-gray-600 bg-opacity-20 border-opacity-20 w-full md:w-full flex rounded-md py-3 relative px-8 lg:px-3">
      <form
        ref={formRef}
        method="POST"
        className="w-full xl:w-[100%]"
        onSubmit={(e) => submitTransaction(e)}
      >
        <div className="w-full flex justify-center mb-3">
          <div className="w-[100%] flex gap-5">
            <Tabs
              tabs={tabs}
              size="w-1/2"
              active={transaction.mode}
              toggle={updateMode}
              variant={'gray'}
            />
          </div>
        </div>
        <section className="flex gap-3 flex-col lg:flex-col xl:flex-row">
          <div className="flex w-full flex-col justify-center gap-3">
            {/* CAMPO VALOR DA APOSTA */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div className="flex h-12 lg:h-14 gap-2">
                <div className="w-full">
                  <TextField
                    id="valueInput"
                    name="amount"
                    disabled={
                      transaction.status !=
                      TransactionStatus.UNREGISTERED
                    }
                    value={formatCoin(
                      transaction.amount,
                      selectedLanguage
                    )}
                    setValue={updateAmount}
                    label={
                      selectedLanguage === 'pt-BR'
                        ? 'Valor da aposta'
                        : 'Bet value'
                    }
                  />
                </div>

                {/* BOTÃO 1/2 e 2x PARTE MOBILE*/}
                <div className="flex gap-2 lg:hidden xl">
                  <div>
                    <button
                      onClick={divideAmount}
                      type="button"
                      disabled={
                        transaction.status !=
                        TransactionStatus.UNREGISTERED
                      }
                      className="btn btn-ghost flex-1 w-full h-full rounded text-base lg:text-xl font-bold disabled:bg-gray-700 disabled:bg-opacity-30 border-gray-700 border-opacity-40"
                    >
                      &frac12;
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={doubleAmount}
                      type="button"
                      disabled={
                        transaction.status !=
                        TransactionStatus.UNREGISTERED
                      }
                      className="btn btn-ghost grow w-full h-full rounded capitalize text-sm lg:text-base font-bold disabled:bg-gray-700 disabled:bg-opacity-30 border-gray-700 border-opacity-40"
                    >
                      2x
                    </button>
                  </div>
                </div>
              </div>

              {/* FAST BETS MOBILE*/}
              <div className="flex gap-2 items-center justify-between lg:hidden">
                {betValues.map((value) => (
                  <FastBetButton
                    key={value}
                    value={value}
                    disabled={
                      transaction.status !=
                      TransactionStatus.UNREGISTERED
                    }
                    onClick={() =>
                      updateAmount(formatBRLCurrency(value))
                    }
                  />
                ))}
              </div>

              {/* AUTO RETIRAR */}
              <div className="flex gap-3 h-14 lg:w-full xl:w-auto">
                <TextField
                  id="valueInput"
                  name="amount"
                  disabled={
                    transaction.status !=
                    TransactionStatus.UNREGISTERED
                  }
                  value={formatCoin(
                    transaction.exitValue,
                    selectedLanguage
                  )}
                  setValue={updateExitValue}
                  label={
                    selectedLanguage === 'pt-BR'
                      ? 'Auto Retirar'
                      : 'Auto Withdraw'
                  }
                />
                <If
                  condition={transaction.mode == TransactionMode.AUTO}
                >
                  <div className="w-[50%]">
                    <TextField
                      id="valueInput"
                      name="amount"
                      disabled={
                        transaction.status !=
                        TransactionStatus.UNREGISTERED
                      }
                      value={transaction.roundCount}
                      setValue={updateRoundCount}
                      label={
                        selectedLanguage === 'pt-BR'
                          ? 'Quantidade'
                          : 'Quantity'
                      }
                    />
                  </div>
                </If>
              </div>
            </div>

            {/* FAST BETS DESKTOP*/}
            <div className="hidden gap-2 items-center justify-between lg:flex">
              {betValues.map((value) => (
                <FastBetButton
                  key={value}
                  value={value}
                  disabled={
                    transaction.status !=
                    TransactionStatus.UNREGISTERED
                  }
                  onClick={() =>
                    updateAmount(formatBRLCurrency(value))
                  }
                />
              ))}
            </div>
          </div>

          {/* BOTÃO INICIAR APOSTA */}
          <div className="w-full flex gap-2">
            {/* BOTÃO 1/2 e 2x PARTE DESKTOP*/}
            <div className="hidden flex-col gap-2 lg:flex lg:flex-row xl:flex-col">
              <div>
                <button
                  onClick={divideAmount}
                  type="button"
                  disabled={
                    transaction.status !=
                    TransactionStatus.UNREGISTERED
                  }
                  className="btn btn-ghost flex-1 w-full h-full rounded text-base lg:text-xl font-bold disabled:bg-gray-700 disabled:bg-opacity-30 border-gray-700 border-opacity-40"
                >
                  &frac12;
                </button>
              </div>

              <div>
                <button
                  onClick={doubleAmount}
                  type="button"
                  disabled={
                    transaction.status !=
                    TransactionStatus.UNREGISTERED
                  }
                  className="btn btn-ghost grow w-full h-full rounded capitalize text-sm lg:text-base font-bold disabled:bg-gray-700 disabled:bg-opacity-30 border-gray-700 border-opacity-40"
                >
                  2x
                </button>
              </div>
            </div>
            <If
              condition={
                transaction == null ||
                transaction?.status == TransactionStatus.UNREGISTERED
              }
            >
              <button
                className={`py-2 lg:py-3 uppercase flex items-center justify-center text-lg rounded ${getBackgroundColor(
                  'green'
                )} text-white h-full w-full tracking-widest transition-all duration-300 saturate-200 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)]`}
              >
                <span className="font-normal text-white">
                  {transaction.mode == TransactionMode.COMMON
                    ? selectedLanguage === 'pt-BR'
                      ? 'Iniciar Aposta'
                      : 'Start Bet'
                    : selectedLanguage === 'pt-BR'
                    ? 'Iniciar Auto'
                    : 'Start Auto'}
                </span>
              </button>
            </If>

            <If
              condition={
                gameStatus != GameStatus.RUNNING &&
                transaction?.status == TransactionStatus.REGISTERED
              }
            >
              <button
                className={`py-2 lg:py-3 uppercase flex items-center justify-center text-xl rounded saturate-100 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)] ${getBackgroundColor(
                  'red'
                )} text-white h-full w-full transition-all duration-300`}
                onClick={() => cancelTransaction(position)}
              >
                {/* AUTO START QUANTIDADE MAIOR QUE ZERO */}
                <If condition={transaction.autoStarted}>
                  <div className="text-lg flex lg:flex-col gap-1 lg:gap-0">
                    <span>
                      {selectedLanguage === 'pt-BR'
                        ? 'Cancelar aposta'
                        : 'Cancel bet'}
                    </span>
                    <span className="block">
                      {selectedLanguage === 'pt-BR' ? 'de ' : 'of '}
                      {formatCoin(
                        transaction.amount,
                        selectedLanguage
                      )}{' '}
                      ({transaction.roundCount + 1})
                    </span>
                  </div>
                </If>

                {/* APOSTA MANUAL */}
                <If condition={!transaction.autoStarted}>
                  <div className="text-lg flex lg:flex-col gap-1 lg:gap-0">
                    <span>
                      {selectedLanguage === 'pt-BR'
                        ? 'Cancelar aposta '
                        : 'Cancel bet '}
                    </span>
                    <span className="block">
                      {selectedLanguage === 'pt-BR' ? 'de ' : 'of '}
                      {formatCoin(
                        transaction.amount,
                        selectedLanguage
                      )}
                    </span>
                  </div>
                </If>
              </button>
            </If>

            {/* BOTÃO DE CANCELAR QUANDO A RODADA ESTIVER EM ANDAMENTO E O JOGADOR DEIXAR A APOSTA PREPARADA PARA A PRÓXIMA RODADA */}
            <If
              condition={
                gameStatus != GameStatus.IDLE &&
                transaction?.status == TransactionStatus.PENDING
              }
            >
              <div className="flex flex-col w-full h-full">
                <button
                  className={`py-2 lg:py-3 uppercase flex items-center justify-center text-xl rounded saturate-100 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)] ${getBackgroundColor(
                    'red'
                  )} text-white h-full w-full transition-all duration-300`}
                  onClick={cancelFuterTransaction}
                >
                  <If condition={transaction.autoStarted}>
                    <span className="text-lg lg:text-xl">
                      {selectedLanguage === 'pt-BR'
                        ? 'Cancelar aposta'
                        : 'Cancel bet'}{' '}
                      ({transaction.roundCount})
                    </span>
                  </If>

                  <If condition={!transaction.autoStarted}>
                    <span className="text-lg lg:text-xl">
                      {selectedLanguage === 'pt-BR'
                        ? 'Cancelar aposta'
                        : 'Cancel bet'}
                    </span>
                  </If>
                </button>
              </div>
            </If>

            {/* BOTÃO DE RETIRAR O DINHEIRO DURANTE A RODADA EM ANDAMENTO */}
            <If
              condition={
                gameStatus == GameStatus.RUNNING &&
                transaction?.status == TransactionStatus.REGISTERED
              }
            >
              <button
                className={`py-2 lg:py-3 uppercase flex items-center justify-center text-xl rounded ${getBackgroundColor(
                  'amber'
                )} text-white h-full w-full saturate-100 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)] tracking-widest transition-all duration-300`}
                onClick={() => cashOut(position)}
              >
                <If condition={transaction.autoStarted}>
                  <span className="text-lg lg:text-xl">
                    {selectedLanguage === 'pt-BR'
                      ? 'Retirar '
                      : 'Withdraw '}{' '}
                    {formatCoin(
                      transaction.amount * multiplier,
                      selectedLanguage
                    )}
                  </span>
                </If>

                <If condition={!transaction.autoStarted}>
                  <span className="text-lg lg:text-xl">
                    {selectedLanguage === 'pt-BR'
                      ? 'Retirar '
                      : 'Withdraw '}{' '}
                    {formatCoin(
                      transaction.amount * multiplier,
                      selectedLanguage
                    )}
                  </span>
                </If>
              </button>
            </If>
          </div>
        </section>
      </form>
    </div>
  )
}
