import React from 'react'

import { BsCheck, BsXCircleFill } from 'react-icons/bs'

interface DailyChallengeProps {
  challenge: string
}

const DailyChallenges = ({ challenge }: DailyChallengeProps) => {
  const concluded = false

  return (
    <div className="flex gap-1 items-center justify-center">
      {concluded ? (
        <div className="rounded-full text-black bg-green-500">
          <BsCheck className="w-5 h-5" />
        </div>
      ) : (
        <div className="rounded-full text-red-500 p-1">
          <BsXCircleFill className="w-5 h-5" />
        </div>
      )}

      <div
        className={`font-bold p-1 text-center ${
          concluded && 'line-through opacity-30'
        }`}
      >
        {challenge}
      </div>
    </div>
  )
}

export default DailyChallenges
