import React from 'react'
import { ResultColor, ResultItem } from '../../index'
import { useSelector } from 'react-redux'

type Props = {
  results: ResultItem[]
}

type Odd = {
  color: string
  result: string
}

function Rounds(props: Props) {
  const odds = useSelector((state) => state.odd.odds)

  return (
    <div className="flex flex-col h-10">
      <div className="flex flex-row-reverse pointer-events-auto gap-2 overflow-x-auto scrollbar-h-1 scrollbar-track-slate-500 scrollbar-thumb-slate-700 scrollbar scrollbar-track-rounded scrollbar-thumb-rounded">
        {[...odds].reverse().map((item, index) => {
          switch (item.color) {
            case ResultColor.RED:
              return (
                <div
                  key={index}
                  className="bg-[#ff1e4c] text-gray-100 min-w-[2rem] min-h-[2rem] rounded-sm flex justify-center items-center"
                >
                  <span className="border-gray-100 rounded-full w-[1.4375rem] h-[1.4375rem] border-2 flex justify-center items-center font-bold text-[0.625rem]">
                    {item.result}
                  </span>
                </div>
              )

            case ResultColor.BLACK:
              return (
                <div
                  key={index}
                  className="bg-[#002236] text-gray-100 min-w-[2rem] min-h-[2rem] rounded-sm flex justify-center items-center"
                >
                  <span className="border-gray-300 rounded-full w-[1.4375rem] h-[1.4375rem] border-2 flex justify-center items-center font-bold text-[0.625rem]">
                    {item.result}
                  </span>
                </div>
              )

            case ResultColor.WHITE:
              return (
                <div
                  key={index}
                  className="bg-gray-100 min-w-[2rem] min-h-[2rem] rounded-sm flex justify-center items-center"
                >
                  <span className="rounded-full w-[1.4375rem] h-[1.4375rem] font-bold text-[#ff1e4c] flex justify-center items-center text-md">
                    V
                  </span>
                </div>
              )
          }
        })}
      </div>
    </div>
  )
}

export default Rounds
