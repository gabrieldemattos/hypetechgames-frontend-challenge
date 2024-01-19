import React from 'react'

import Modal from '@/core/components/modal'

import { FaTrophy } from 'react-icons/fa'

import { ranks } from '../../utils/utils'

import { useLanguageContext } from '../../hooks/useLanguageContext'

interface AvailableRanksProps {
  show: boolean
  toggle: Function
}

const AvailableRanks = ({ show, toggle }: AvailableRanksProps) => {
  const { selectedLanguage } = useLanguageContext()

  return (
    <Modal show={show} toggle={toggle}>
      <div className="p-5">
        <div className="flex">
          <div className="w-full">
            <h1 className="text-2xl uppercase text-center text-white">
              {selectedLanguage === 'pt-BR'
                ? 'Ranks disponíveis'
                : 'Available ranks'}
            </h1>
          </div>

          <div className="text-lg text-gray-600 hover:text-gray-400 transition-all cursor-pointer">
            <button onClick={() => toggle()}>X</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-14 mt-12">
          {ranks.map((rank) => (
            <div
              key={rank.namePT}
              className={`col-span-1 flex flex-col items-center justify-center ${rank.color}`}
            >
              <div>
                <FaTrophy className="h-16 w-16" />
              </div>

              {selectedLanguage === 'pt-BR' ? (
                <p className="text-sm text-center lg:text-base">
                  {rank.namePT}{' '}
                  {rank.maxLevel < 1000 ? (
                    <p className="whitespace-nowrap">
                      (Level {rank.minLevel} - {rank.maxLevel})
                    </p>
                  ) : (
                    <p>(Level {rank.minLevel} +)</p>
                  )}
                </p>
              ) : (
                <p className="text-sm text-center lg:text-base">
                  {rank.nameEN}{' '}
                  {rank.maxLevel < 1000 ? (
                    <p className="whitespace-nowrap">
                      (Level {rank.minLevel} - {rank.maxLevel})
                    </p>
                  ) : (
                    <p>(Level {rank.minLevel} +)</p>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default AvailableRanks
