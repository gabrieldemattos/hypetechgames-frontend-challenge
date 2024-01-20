import React, { useContext, useEffect, useRef, useState } from 'react'

import If from '../../conditions/if'

import { useLanguageContext } from '../../../hooks/useLanguageContext'

import EmojiPicker, {
  Theme,
  Categories,
  EmojiClickData,
} from 'emoji-picker-react'
import {
  ArrowDownIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { IGameMessage } from '../../../../../core/providers/interfaces/game-message.interface'
import { getDateToHumanReadable } from '../../../utils/date'

export const Chat = () => {
  const { selectedLanguage } = useLanguageContext()

  const { messages, sendMessage, session } =
    useContext(CrashGameContext)
  const [showEmojiPicker, setShowEmojiPicker] =
    useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const [showChat, setShowChat] = useState<boolean>(true)

  const chatContainerRef = useRef<HTMLDivElement>(null)

  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    event.stopPropagation()
    setMessage(message + ' ' + emojiData.emoji)
  }

  function handleShowEmojiPicker(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.stopPropagation()

    setShowEmojiPicker(!showEmojiPicker)
  }

  const attemptSendMessage = () => {
    const parsed = message.trim()
    setShowEmojiPicker(false)

    if (parsed.length > 0) {
      sendMessage(message)
      setMessage('')
    }
  }

  const handleMessage = (e) => {
    if (e.key && e.key.toUpperCase() == 'ENTER') attemptSendMessage()
    else setMessage(e.target.value)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current

    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }

  const chatProperties = {
    height: showChat
      ? 'h-[90%] transition-height ease-out duration-500'
      : 'h-0 mb-7',
    border: showChat
      ? 'border-gray-600 border border-opacity-20'
      : 'border-none',
    bg: showChat
      ? 'bg-black bg-opacity-20 shadow-xl shadow-slate-900'
      : 'bg-transparent',
    messageDiv: showChat ? 'block' : 'hidden',
    icon: showChat ? (
      <ChevronDoubleUpIcon className="h-4 w-4" />
    ) : (
      <ChevronDoubleDownIcon className="h-4 w-4" />
    ),
  }

  const handleShowChat = () => {
    setShowChat(!showChat)
    setShowEmojiPicker(false)
  }

  return (
    <div
      className={`w-full mt-1 py-2 px-2 text-base rounded-lg z-40 ${chatProperties.height} ${chatProperties.border} ${chatProperties.bg}`}
    >
      <div className="flex flex-col relative gap-3 h-full">
        <div
          ref={chatContainerRef}
          className={`p-2 pr-4 flex-grow basis-0 overflow-x-hidden overflow-y-auto scrollbar-w-2 scrollbar-track-transparent scrollbar-thumb-gray-700 scrollbar scrollbar-track-rounded scrollbar-thumb-rounded relative ${chatProperties.messageDiv}`}
        >
          {messages.map((data: IGameMessage, idx: number) => {
            return (
              <div key={idx}>
                <If
                  condition={data.userId == session.userId}
                  key={idx}
                >
                  <div className="chat chat-end mt-2">
                    <div className="chat-image avatar">
                      <div className="w-5 rounded-full">
                        <img
                          src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
                          alt="user image"
                        />
                      </div>
                    </div>

                    <div className="chat-bubble min-h-fit break-words bg-green-500">
                      {data.message}
                    </div>
                    <div className="chat-footer text-xs opacity-50 mt-1">
                      {getDateToHumanReadable(
                        data.createdAt,
                        selectedLanguage
                      )}
                    </div>
                  </div>
                </If>

                <If condition={data.userId != session.userId}>
                  <div className="chat chat-start mt-2">
                    <div className="chat-image avatar">
                      <div className="w-5 rounded-full">
                        <img
                          src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
                          alt="user image"
                        />
                      </div>
                    </div>
                    <div className="chat-bubble min-h-0 break-words">
                      {data.message}
                    </div>
                    <div className="chat-footer text-xs opacity-50 mt-1">
                      {getDateToHumanReadable(
                        data.createdAt,
                        selectedLanguage
                      )}
                    </div>
                  </div>
                </If>
              </div>
            )
          })}

          <div className="flex justify-center mt-4">
            <button
              className="btn border border-gray-900 bg-gray-900 bg-opacity-5 rounded-full fixed bottom-[8%] btn-sm animate-bounce"
              onClick={scrollToBottom}
            >
              <ArrowDownIcon className="h-4 w-4 font-bold" />
            </button>
          </div>
        </div>

        <div className="sticky bottom-2">
          <If condition={showEmojiPicker}>
            <div className="absolute bottom-10 w-full">
              <EmojiPicker
                onEmojiClick={onClick}
                autoFocusSearch={false}
                height={'300px'}
                width={'100%'}
                previewConfig={{
                  showPreview: false,
                }}
                theme={Theme.DARK}
                searchDisabled
                skinTonesDisabled
                categories={[
                  {
                    name: 'Smiles & Emotions',
                    category: Categories.SMILEYS_PEOPLE,
                  },
                  {
                    name: 'Fun and Games',
                    category: Categories.ACTIVITIES,
                  },

                  {
                    name: 'Flags',
                    category: Categories.FLAGS,
                  },
                ]}
              />
            </div>
          </If>
          <div className="form-control">
            <div className="input-group gap-1">
              <button className="btn btn-sm" onClick={handleShowChat}>
                {chatProperties.icon}
              </button>

              <button
                className="btn btn-sm"
                onClick={(e) => handleShowEmojiPicker(e)}
                disabled={showChat ? false : true}
              >
                <FaceSmileIcon className="w-4 h-4" />
              </button>

              <input
                className="input input-sm w-full outline-none focus:outline-none"
                maxLength={100}
                placeholder={
                  selectedLanguage == 'pt-BR'
                    ? 'Max: 200 caracteres'
                    : 'Max: 200 characters'
                }
                value={message}
                onChange={handleMessage}
                onKeyDown={handleMessage}
                disabled={showChat ? false : true}
              />

              <button
                className="btn btn-sm capitalize"
                onClick={attemptSendMessage}
                disabled={showChat ? false : true}
              >
                {selectedLanguage == 'pt-BR' ? 'Enviar' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
