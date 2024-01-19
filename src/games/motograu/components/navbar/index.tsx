import React, { useState, useEffect, useRef, useContext } from 'react'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import DailyChallenges from '../DailyChallenges/index'

import { HiMiniStar } from 'react-icons/hi2'

import { useLanguageContext } from '../../hooks/useLanguageContext'

type Props = {
  game: string
  balance: string | number
  executeAction: Function
  openChatHandler?: Function
}

import {
  ChatBubbleLeftIcon,
  InformationCircleIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { getHowToPlay } from '@/core/helpers'
import GameLimitsModal from '@/core/components/provably-fair/game-limits'
import { Chat } from '../chat/mobile/index'
import LanguageSelector from '../LanguageSelector/language-selector'
import ActivePlayers from '../ActivePlayers'
import UserRank from '../UserRank'
import { useUserLevel } from '../../hooks/useUserLevel'
import {
  ranks,
  challengesPT,
  challengesEN,
  status,
} from '../../utils/utils'
import AvailableRanks from '../AvailableRanks/available-ranks'

interface Status {
  statusPT: string
  statusEN: string
  stylesIcon: string
}

export default function Navbar({
  game,
  balance,
  executeAction,
}: Props) {
  const { selectedLanguage } = useLanguageContext()

  const HowToPlay = getHowToPlay(game)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showModalRanks, setShowModalRanks] = useState<boolean>(false)
  const [showChat, setShowChat] = useState(false)
  const [showGameLimitsModal, setShowGameLimitsModal] =
    useState<boolean>(false)

  const [showDailyChallenges, setShowDailyChallenges] =
    useState<boolean>(false)

  const [animationEnabled, setAnimationEnabled] = useState(true)
  const [musicEnabled, setMusicEnabled] = useState(true)
  const [audioContextAllowed, setAudioContextAllowed] = useState(true) //////////////////////////////////////

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const dropdownRef = useRef(null)
  const {
    soundEnabled,
    setSoundEnabled,
    soundClick,
    playerName,
    betsHistory,
    getBetsHistory,
  } = useContext<any>(CrashGameContext)

  const { userLevel } = useUserLevel(betsHistory)

  useEffect(() => {
    getBetsHistory()
  }, [])

  const [challenge, setChallenge] = useState<string>('')

  const drawChallenge = () => {
    if (selectedLanguage === 'pt-BR') {
      const index = Math.floor(Math.random() * challengesPT.length)

      setChallenge(challengesPT[index])
    } else {
      const index = Math.floor(Math.random() * challengesEN.length)

      setChallenge(challengesEN[index])
    }
  }

  useEffect(() => {
    drawChallenge()
  }, [selectedLanguage])

  const [statusBarVisible, setStatusBarVisible] =
    useState<boolean>(false)

  const [currentStatus, setCurrentStatus] = useState<Status[]>([
    status[0],
  ])

  const handleSoundEnabled = (event) => {
    const { checked } = event.target
    executeAction(checked ? 'soundsOn' : 'soundsOff')
    setSoundEnabled(checked)
  }

  const handleMusicEnabled = (event) => {
    const { checked } = event.target

    executeAction(checked ? 'musicOn' : 'musicOff')
    setMusicEnabled(checked)
  }

  const handleAnimationEnabled = (event) => {
    const { checked } = event.target
    executeAction(checked ? 'animationOff' : 'animationOn')
    setAnimationEnabled(checked)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    setStatusBarVisible(false)
    setShowChat(false)
    setShowDailyChallenges(false)
    soundClick()
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    setTimeout(() => {
      if (window.AudioContext == false) {
        setAudioContextAllowed(false)
      }
    }, 2000)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false)
    }
    setAudioContextAllowed(false)
  }

  const handleClickDailyChallenge = () => {
    setShowDailyChallenges(!showDailyChallenges)
    setShowChat(false)
    soundClick()
  }

  const handleClickChat = () => {
    setShowChat(!showChat)
    setShowDailyChallenges(false)
    soundClick()
  }

  const handleShowModalRanks = () => {
    setShowModalRanks(!showModalRanks)
    setShowChat(false)
    setShowDailyChallenges(false)
    soundClick()
  }

  const isMobileDevice =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

  return (
    <div className="pt-4">
      <div className="navbar mx-auto my-auto sm:px-3 h-12 flex items-center w-full justify-end">
        <div className="flex flex-col gap-2 items-start pl-0 xl:pl-2">
          <div className="p-0 mt-0">
            <LanguageSelector />
          </div>

          <div className="xl:hidden">
            <ActivePlayers />
          </div>
        </div>

        <div className="flex items-center ml-auto gap-2">
          <button
            onClick={() => {
              setShowModal(!showModal)
              soundClick()
            }}
            className="btn btn-sm py-1 px-3 flex items-center text-white bg-green-500 gap-1 rounded-md capitalize text-sm font-semibold hover:bg-green-800"
          >
            <InformationCircleIcon className="h-5 w-5 font-semibold" />
            <span className="hidden sm:inline">
              {selectedLanguage === 'pt-BR'
                ? 'Instruções'
                : 'Instructions'}
            </span>
          </button>

          <div className="text-xs xl:text-sm text-center font-bold border rounded-lg py-1 px-1 xl:px-2 border-gray-500 border-opacity-60 lg:px-3">
            <div className="flex items-center gap-2">
              <CurrencyDollarIcon className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-300" />
              <span>{balance}</span>
            </div>
          </div>

          {/* DAILY CHALLENGE */}
          <div className="relative">
            <div className="flex items-center animate-[wiggle_.5s_ease-in-out_infinite]">
              <HiMiniStar
                className="h-7 w-7 text-yellow-300 cursor-pointer"
                onClick={handleClickDailyChallenge}
              />
            </div>
            {showDailyChallenges && (
              <div className="mt-10 rounded w-[17.5rem] max-w-[18.75rem] absolute top-[0.575rem] right-0 z-10 bg-gray-800 p-5">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="mb-3 font-bold text-white text-lg">
                    {selectedLanguage === 'pt-BR'
                      ? 'Desafio Diário'
                      : 'Daily Challenge'}
                  </h2>
                  <DailyChallenges challenge={challenge} />
                </div>
              </div>
            )}
          </div>

          <div className="border-l h-6 border-gray-400 border-opacity-50"></div>

          <div
            className="dropdown dropdown-end flex items-center gap-2"
            ref={dropdownRef}
          >
            <div
              className="hidden xl:block px-2 cursor-pointer"
              onClick={handleShowModalRanks}
            >
              <UserRank />
            </div>

            <div className="flex relative items-center gap-2">
              <button onClick={toggleDropdown} className="h-10 w-10">
                <img
                  src="https://api.multiavatar.com/NOME.svg"
                  className="h-10 invert rounded-lg"
                  alt={`avatar de ${playerName}`}
                />
              </button>

              <div className="absolute right-0 bottom-0">
                {currentStatus.map((status) =>
                  selectedLanguage === 'pt-BR' ? (
                    <span
                      key={status.statusPT}
                      className={`${status.stylesIcon} 
                    ${
                      status.statusPT === 'disponível'
                        ? 'shadow-green-custom shadow-md'
                        : ''
                    }
                    ${
                      status.statusPT === 'ausente'
                        ? 'shadow-yellow-300 shadow-md'
                        : ''
                    }
                    ${
                      status.statusPT === 'ocupado'
                        ? 'shadow-red-600 shadow-md'
                        : ''
                    }
                    ${
                      status.statusPT === 'invisível'
                        ? 'shadow-gray-300 shadow-md'
                        : ''
                    }
                    `}
                    ></span>
                  ) : (
                    <span
                      key={status.statusEN}
                      className={`${status.stylesIcon} 
                    ${
                      status.statusEN === 'disponível'
                        ? 'shadow-green-custom shadow-md'
                        : ''
                    }
                    ${
                      status.statusEN === 'ausente'
                        ? 'shadow-yellow-300 shadow-md'
                        : ''
                    }
                    ${
                      status.statusEN === 'ocupado'
                        ? 'shadow-red-600 shadow-md'
                        : ''
                    }
                    ${
                      status.statusEN === 'invisível'
                        ? 'shadow-gray-300 shadow-md'
                        : ''
                    }
                    `}
                    ></span>
                  )
                )}
              </div>
            </div>

            {isDropdownOpen && (
              <div className="mt-2 menu menu-compact rounded py-2 w-[17.5rem] max-w-[18.75rem] absolute top-[2.575rem] right-[1.875rem] z-10 bg-gray-800">
                <div className="flex gap-4 p-4">
                  <img
                    src="https://api.multiavatar.com/NOME.svg"
                    className="h-12 invert rounded-lg"
                    alt={`avatar de ${playerName}`}
                  />
                  <div className="mt-1 flex flex-col">
                    <div className="font-bold text-xs text-white">
                      {/* Nome do Jogador */}
                      {playerName}
                    </div>
                    <div className="text-xs flex mt-1 gap-2">
                      {currentStatus.map((status, index) => (
                        <div className="flex" key={index}>
                          <p
                            className={`${status.stylesIcon} mr-2`}
                          ></p>
                          <p className="capitalize">
                            {selectedLanguage === 'pt-BR'
                              ? status.statusPT
                              : status.statusEN}
                          </p>
                        </div>
                      ))}

                      <div className="flex items-center justify-center">
                        <button>
                          <ChevronDownIcon
                            className={`h-4 w-4 ${
                              statusBarVisible ? 'rotate-180' : ''
                            } transition-all duration-200`}
                            onClick={() =>
                              setStatusBarVisible(!statusBarVisible)
                            }
                          />
                        </button>
                      </div>
                    </div>

                    {statusBarVisible && (
                      <div className="text-xs mt-2 ml-3 flex flex-col gap-1 z-50">
                        {status.map((e) => (
                          <button
                            className="flex w-fit"
                            key={
                              selectedLanguage === 'pt-BR'
                                ? e.statusPT
                                : e.statusEN
                            }
                            onClick={() => setCurrentStatus([e])}
                          >
                            <p className={e.stylesIcon}></p>
                            <p className="capitalize">
                              {selectedLanguage === 'pt-BR'
                                ? e.statusPT
                                : e.statusEN}
                            </p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="px-3 py-2 hover:font-bold text-xs flex justify-between xl:hidden cursor-pointer"
                  onClick={handleShowModalRanks}
                >
                  <div className="flex gap-1">
                    <span>
                      {selectedLanguage === 'pt-BR'
                        ? 'Nível'
                        : 'Level'}
                    </span>
                    {ranks.map(
                      (rank) =>
                        userLevel >= rank.minLevel &&
                        userLevel <= rank.maxLevel && (
                          <div
                            key={rank.namePT}
                            className={`${rank.color}`}
                          >
                            <p className="text-xs">
                              (
                              {selectedLanguage === 'pt-BR'
                                ? rank.namePT
                                : rank.nameEN}
                              )
                            </p>
                          </div>
                        )
                    )}
                  </div>
                  <label className="text-white text-xs">
                    {userLevel}
                  </label>
                </div>

                <div className="px-2 text-xs item">
                  <div className="form-control">
                    <label className="label hover:font-bold cursor-pointer">
                      <span className="label-text text-xs opacity-90">
                        {selectedLanguage === 'pt-BR'
                          ? 'Som'
                          : 'Sound'}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={soundEnabled}
                          onChange={handleSoundEnabled}
                          className="sr-only peer"
                        />
                        <div className="w-8 h-4 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[0rem] after:left-[0rem] after:bg-gray-700 after:border-gray-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-custom"></div>
                      </label>
                    </label>
                  </div>
                </div>
                <div className="px-2 text-xs item">
                  <div className="form-control">
                    <label className="label hover:font-bold cursor-pointer">
                      <span className="label-text text-xs opacity-90">
                        {selectedLanguage === 'pt-BR'
                          ? 'Música'
                          : 'Music'}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={musicEnabled}
                          onChange={handleMusicEnabled}
                          className="sr-only peer"
                        />
                        <div className="w-8 h-4 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent rounded-full peer bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:bg-gray-700 after:border-gray-500 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-custom"></div>
                      </label>
                    </label>
                  </div>
                </div>

                <div
                  className="px-3 cursor-pointer py-3 hover:font-bold text-xs item"
                  onClick={() => {
                    setShowGameLimitsModal(!showGameLimitsModal)
                    soundClick()
                  }}
                >
                  <label className="cursor-pointer text-white text-xs opacity-75">
                    {selectedLanguage === 'pt-BR'
                      ? 'Limites de Jogo'
                      : 'Game Limits'}
                  </label>
                </div>

                <a
                  className="px-3 cursor-pointer py-3 hover:font-bold text-xs item"
                  href=""
                >
                  <label className="cursor-pointer text-white text-xs opacity-75">
                    {selectedLanguage === 'pt-BR'
                      ? 'Suporte ao jogador Hypetech'
                      : 'Hypetech player support'}
                  </label>
                </a>
              </div>
            )}
          </div>

          <div className="block xl:hidden pt-2">
            <button
              className="btn btn-sm px-1 btn-ghost"
              onClick={handleClickChat}
            >
              <ChatBubbleLeftIcon className="w-7 h-7 bg-opacity-50" />
            </button>
          </div>
        </div>
      </div>

      <HowToPlay show={showModal} toggle={setShowModal} />
      <AvailableRanks
        show={showModalRanks}
        toggle={setShowModalRanks}
      />

      <GameLimitsModal
        show={showGameLimitsModal}
        toggle={setShowGameLimitsModal}
      />

      <Chat show={showChat} />
    </div>
  )
}
