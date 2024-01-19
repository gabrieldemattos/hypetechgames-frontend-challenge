import React, { useContext, useState } from 'react'

import If from '../../conditions/if'

import {
  selectedLanguage,
  useLanguageContext,
} from '../../../hooks/useLanguageContext'

import EmojiPicker, {
  Theme,
  Categories,
  EmojiClickData,
} from 'emoji-picker-react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'
import { IGameMessage } from '../../../../../core/providers/interfaces/game-message.interface'
import { getDateToHumanReadable } from '../../../utils/date'
type Props = {
  show: boolean
}

export const Chat = ({ show }: Props) => {
  const { selectedLanguage } = useLanguageContext()

  const { messages, sendMessage, session } =
    useContext(CrashGameContext)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [message, setMessage] = useState<string>('')

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

  return (
    <div className="block xl:hidden">
      <If condition={show}>
        <div className="w-80 mr-2 py-2 px-2 border-gray-600 border border-opacity-70 text-sm rounded-lg bg-black absolute right-0 z-40 h-[30%]">
          <div className="flex flex-col relative gap-3 h-full">
            <div className="p-2 pr-4 flex-grow basis-0 overflow-x-hidden overflow-y-auto scrollbar-w-2 scrollbar-track-transparent scrollbar-thumb-gray-700 scrollbar scrollbar-track-rounded scrollbar-thumb-rounded">
              {messages.map((data: IGameMessage, idx: number) => {
                return (
                  <div key={idx}>
                    <If condition={data.userId == session.userId}>
                      <div className="chat chat-end mt-2" key={idx}>
                        <div className="chat-image avatar">
                          <div className="w-5 rounded-full">
                            <img src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png" />
                          </div>
                        </div>

                        <div className="chat-bubble min-h-0 break-words bg-green-500">
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
                      <div className="chat chat-start mt-2" key={idx}>
                        <div className="chat-image avatar">
                          <div className="w-5 rounded-full">
                            <img src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png" />
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
            </div>

            <div className="sticky  bottom-2">
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
                <div className="input-group">
                  <button
                    className="btn btn-sm"
                    onClick={(e) => handleShowEmojiPicker(e)}
                  >
                    <FaceSmileIcon className="w-4 h-4" />
                  </button>
                  <input
                    className="input input-sm w-full outline-none focus:outline-none"
                    maxLength={100}
                    placeholder="Max: 200 caracteres"
                    value={message}
                    onChange={handleMessage}
                    onKeyDown={handleMessage}
                  />

                  <button
                    className="btn btn-sm capitalize"
                    onClick={attemptSendMessage}
                  >
                    {selectedLanguage === 'pt-BR' ? 'Enviar' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </If>
    </div>
  )
}
