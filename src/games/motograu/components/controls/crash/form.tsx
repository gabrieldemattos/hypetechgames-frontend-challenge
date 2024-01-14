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
    <div className="bg-black border border-gray-600 bg-opacity-20 border-opacity-20 crash-form w-full h-45 md:w-full flex rounded-md p-3 relative px-10">
      <form
        ref={formRef}
        method="POST"
        className="w-full xl:w-[100%] mx-auto justify-center"
        onSubmit={(e) => submitTransaction(e)}
      >
        <input type="hidden" name="teste" />
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
        <section className="flex flex-col gap-3">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 h-12 lg:h-14">
              <div className="w-full">
                <TextField
                  id="valueInput"
                  name="amount"
                  disabled={
                    transaction.status !=
                    TransactionStatus.UNREGISTERED
                  }
                  value={transaction.amount}
                  setValue={updateAmount}
                  label={
                    selectedLanguage === 'pt-BR'
                      ? 'Valor da aposta'
                      : 'Bet value'
                  }
                />
              </div>

              <div className="w-1/2">
                <div className="grid gap-2 h-full grid-cols-2">
                  <div className="col-span-1">
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

                  <div className="col-span-1">
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
            </div>

            <div className="my-2 flex gap-2 items-center justify-between">
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

            <div className="flex gap-3 h-14">
              <TextField
                id="valueInput"
                name="amount"
                disabled={
                  transaction.status != TransactionStatus.UNREGISTERED
                }
                value={transaction.exitValue}
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
              </If>
            </div>
          </div>

          <div className="w-full mt-2">
            <If
              condition={
                transaction == null ||
                transaction?.status == TransactionStatus.UNREGISTERED
              }
            >
              <button
                className={`py-2 lg:py-3 uppercase flex items-center text-lg lg:text-xl rounded ${getBackgroundColor(
                  'green'
                )} flex flex-col text-white h-full w-full tracking-widest transition-all duration-300 saturate-200 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)]`}
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
                className={`py-2 lg:py-3 uppercase flex items-center text-xl rounded saturate-100 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)] ${getBackgroundColor(
                  'red'
                )} flex flex-col text-white h-full w-full transition-all duration-300`}
                onClick={() => cancelTransaction(position)}
              >
                <If condition={transaction.autoStarted}>
                  <span className="text-lg lg:text-xl">
                    {selectedLanguage === 'pt-BR'
                      ? 'Cancelar'
                      : 'Cancel bet of $ '}{' '}
                    {transaction.amount} ({transaction.roundCount + 1}
                    )
                  </span>
                </If>

                <If condition={!transaction.autoStarted}>
                  <span className="text-lg lg:text-xl">
                    {selectedLanguage === 'pt-BR'
                      ? 'Cancelar aposta de R$ '
                      : 'Cancel bet of $ '}{' '}
                    {transaction.amount}
                  </span>
                </If>
              </button>
            </If>

            <If
              condition={
                gameStatus != GameStatus.IDLE &&
                transaction?.status == TransactionStatus.PENDING
              }
            >
              <div className="flex flex-col w-full h-full">
                <button
                  className={`py-2 lg:py-3 uppercase flex items-center text-xl rounded saturate-100 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)] ${getBackgroundColor(
                    'red'
                  )} flex flex-col text-white h-full w-full transition-all duration-300`}
                  onClick={cancelFuterTransaction}
                >
                  <If condition={transaction.autoStarted}>
                    <span className="text-lg lg:text-xl">
                      {selectedLanguage === 'pt-BR'
                        ? 'Cancelar'
                        : 'Cancel'}{' '}
                      ({transaction.roundCount})
                    </span>
                  </If>

                  <If condition={!transaction.autoStarted}>
                    <span className="text-lg lg:text-xl">
                      {selectedLanguage === 'pt-BR'
                        ? 'Cancelar'
                        : 'Cancel'}
                    </span>
                  </If>
                </button>
              </div>
            </If>

            <If
              condition={
                gameStatus == GameStatus.RUNNING &&
                transaction?.status == TransactionStatus.REGISTERED
              }
            >
              <button
                className={`py-2 lg:py-3 uppercase flex items-center text-xl rounded ${getBackgroundColor(
                  'amber'
                )} flex flex-col text-white h-full w-full saturate-100 [text-shadow:2px_2px_2px_rgb(0_0_0_/_40%)] tracking-widest transition-all duration-300`}
                onClick={() => cashOut(position)}
              >
                <If condition={transaction.autoStarted}>
                  <span className="text-lg lg:text-xl">
                    {selectedLanguage === 'pt-BR'
                      ? 'Retirar R$'
                      : 'Withdraw $'}{' '}
                    {(transaction.amount * multiplier).toFixed(2)}
                  </span>
                </If>

                <If condition={!transaction.autoStarted}>
                  <span className="text-lg lg:text-xl">
                    {selectedLanguage === 'pt-BR'
                      ? 'Retirar R$'
                      : 'Withdraw $'}{' '}
                    {(transaction.amount * multiplier).toFixed(2)}
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
