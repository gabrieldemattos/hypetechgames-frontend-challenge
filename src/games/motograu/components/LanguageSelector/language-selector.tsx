import React from 'react'

import { useLanguageContext } from '../../hooks/useLanguageContext'

const languageSelector = () => {
  const { setLanguage: setLanguageContext, selectedLanguage } =
    useLanguageContext()

  return (
    <div className="flex gap-2">
      <div
        className="cursor-pointer p-[.125rem]"
        onClick={() => setLanguageContext('pt-BR')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 640 480"
          className={`hover:scale-125 ${
            selectedLanguage === 'pt-BR' ? 'scale-125' : ''
          } transition-all duration-300`}
        >
          <g strokeWidth="1pt">
            <path
              fill="#229e45"
              fillRule="evenodd"
              d="M0 0h640v480H0z"
            />
            <path
              fill="#f8e509"
              fillRule="evenodd"
              d="m321.4 436l301.5-195.7L319.6 44L17.1 240.7z"
            />
            <path
              fill="#2b49a3"
              fillRule="evenodd"
              d="M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240"
            />
            <path
              fill="#ffffef"
              fillRule="evenodd"
              d="m283.3 316.3l-4-2.3l-4 2l.9-4.5l-3.2-3.4l4.5-.5l2.2-4l1.9 4.2l4.4.8l-3.3 3m86 26.3l-3.9-2.3l-4 2l.8-4.5l-3.1-3.3l4.5-.5l2.1-4.1l2 4.2l4.4.8l-3.4 3.1m-36.2-30l-3.4-2l-3.5 1.8l.8-3.9l-2.8-2.9l4-.4l1.8-3.6l1.6 3.7l3.9.7l-3 2.7m87-8.5l-3.4-2l-3.5 1.8l.8-3.9l-2.7-2.8l3.9-.4l1.8-3.5l1.6 3.6l3.8.7l-2.9 2.6m-87.3-22l-4-2.2l-4 2l.8-4.6l-3.1-3.3l4.5-.5l2.1-4.1l2 4.2l4.4.8l-3.4 3.2m-104.6-35l-4-2.2l-4 2l1-4.6l-3.3-3.3l4.6-.5l2-4.1l2 4.2l4.4.8l-3.3 3.1m13.3 57.2l-4-2.3l-4 2l.9-4.5l-3.2-3.3l4.5-.6l2.1-4l2 4.2l4.4.8l-3.3 3.1m132-67.3l-3.6-2l-3.6 1.8l.8-4l-2.8-3l4-.5l1.9-3.6l1.7 3.8l4 .7l-3 2.7m-6.7 38.3l-2.7-1.6l-2.9 1.4l.6-3.2l-2.2-2.3l3.2-.4l1.5-2.8l1.3 3l3 .5l-2.2 2.2m-142.2 50.4l-2.7-1.5l-2.7 1.3l.6-3l-2.1-2.2l3-.4l1.4-2.7l1.3 2.8l3 .6l-2.3 2M419 299.8l-2.2-1.1l-2.2 1l.5-2.3l-1.7-1.6l2.4-.3l1.2-2l1 2l2.5.5l-1.9 1.5"
            />
            <path
              fill="#ffffef"
              fillRule="evenodd"
              d="m219.3 287.6l-2.7-1.5l-2.7 1.3l.6-3l-2.1-2.2l3-.4l1.4-2.7l1.3 2.8l3 .6l-2.3 2"
            />
            <path
              fill="#ffffef"
              fillRule="evenodd"
              d="m219.3 287.6l-2.7-1.5l-2.7 1.3l.6-3l-2.1-2.2l3-.4l1.4-2.7l1.3 2.8l3 .6l-2.3 2m42.3 3l-2.6-1.4l-2.7 1.3l.6-3l-2.1-2.2l3-.4l1.4-2.7l1.3 2.8l3 .5l-2.3 2.1m-4.8 17l-2.6-1.5l-2.7 1.4l.6-3l-2.1-2.3l3-.4l1.4-2.7l1.3 2.8l3 .6l-2.3 2m87.4-22.2l-2.6-1.6l-2.8 1.4l.6-3l-2-2.3l3-.3l1.4-2.7l1.2 2.8l3 .5l-2.2 2.1m-25.1 3l-2.7-1.5l-2.7 1.4l.6-3l-2-2.3l3-.3l1.4-2.8l1.2 2.9l3 .5l-2.2 2.1m-68.8-5.8l-1.7-1l-1.7.8l.4-1.9l-1.3-1.4l1.9-.2l.8-1.7l.8 1.8l1.9.3l-1.4 1.3m167.8 45.4l-2.6-1.5l-2.7 1.4l.6-3l-2.1-2.3l3-.4l1.4-2.7l1.3 2.8l3 .6l-2.3 2m-20.8 6l-2.2-1.4l-2.3 1.2l.5-2.6l-1.7-1.8l2.5-.3l1.2-2.3l1 2.4l2.5.4l-1.9 1.8m10.4 2.3l-2-1.2l-2.1 1l.4-2.3l-1.6-1.7l2.3-.3l1.1-2l1 2l2.3.5l-1.7 1.6m29.1-22.8l-2-1l-2 1l.5-2.3l-1.6-1.7l2.3-.3l1-2l1 2.1l2.1.4l-1.6 1.6m-38.8 41.8l-2.5-1.4l-2.7 1.2l.6-2.8l-2-2l3-.3l1.3-2.5l1.2 2.6l3 .5l-2.3 1.9m.6 14.2l-2.4-1.4l-2.4 1.3l.6-2.8l-1.9-2l2.7-.4l1.2-2.5l1.1 2.6l2.7.5l-2 2m-19-23.1l-1.9-1.2l-2 1l.4-2.2l-1.5-1.7l2.2-.2l1-2l1 2l2.2.4l-1.6 1.6m-17.8 2.3l-2-1.2l-2 1l.5-2.2l-1.6-1.7l2.3-.2l1-2l1 2l2.1.4l-1.6 1.6m-30.4-24.6l-2-1.1l-2 1l.5-2.3l-1.6-1.6l2.2-.3l1-2l1 2l2.2.5l-1.6 1.5m3.7 57l-1.6-.9l-1.8.9l.4-2l-1.3-1.4l1.9-.2l.9-1.7l.8 1.8l1.9.3l-1.4 1.3m-46.2-86.6l-4-2.3l-4 2l.9-4.5l-3.2-3.3l4.5-.6l2.2-4l1.9 4.2l4.4.8l-3.3 3.1"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M444.4 285.8a124.6 124.6 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5 124.5 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6"
            />
            <path
              fill="#309e3a"
              d="m414 252.4l2.3 1.3a3.4 3.4 0 0 0-.3 2.2a3 3 0 0 0 1.4 1.7c.7.5 1.4.8 2 .7c.6 0 1-.3 1.3-.7a1.3 1.3 0 0 0 .2-.9a2.3 2.3 0 0 0-.5-1c-.2-.3-.7-1-1.5-1.8a7.7 7.7 0 0 1-1.8-3a3.7 3.7 0 0 1 2-4.4a3.8 3.8 0 0 1 2.3-.2a7 7 0 0 1 2.6 1.2c1.4 1 2.3 2 2.6 3.2a4.1 4.1 0 0 1-.6 3.3l-2.4-1.5c.3-.6.4-1.2.2-1.7c-.1-.5-.5-1-1.2-1.4a3.2 3.2 0 0 0-1.8-.7a1 1 0 0 0-.9.5c-.2.3-.2.6-.1 1s.6 1.2 1.6 2.2c1 1 1.6 1.9 2 2.5a3.9 3.9 0 0 1-.3 4.2a4.1 4.1 0 0 1-1.9 1.5a4 4 0 0 1-2.4.3c-.9-.2-1.8-.6-2.8-1.3c-1.5-1-2.4-2.1-2.7-3.3a5.4 5.4 0 0 1 .6-4zm-11.6-7.6l2.5 1.3a3.4 3.4 0 0 0-.2 2.2a3 3 0 0 0 1.4 1.6c.8.5 1.4.7 2 .6c.6 0 1-.3 1.3-.8a1.3 1.3 0 0 0 .2-.8c0-.3-.2-.7-.5-1a34.6 34.6 0 0 0-1.6-1.8c-1.1-1.1-1.8-2-2-2.8a3.7 3.7 0 0 1 .4-3.1a3.6 3.6 0 0 1 1.6-1.4a3.8 3.8 0 0 1 2.2-.3a7 7 0 0 1 2.6 1c1.5 1 2.4 2 2.7 3.1a4.1 4.1 0 0 1-.4 3.4l-2.5-1.4c.3-.7.4-1.2.2-1.7s-.6-1-1.3-1.4a3.2 3.2 0 0 0-1.9-.6a1 1 0 0 0-.8.5c-.2.3-.2.6-.1 1s.7 1.2 1.7 2.2c1 1 1.7 1.8 2 2.4a3.9 3.9 0 0 1 0 4.2a4.2 4.2 0 0 1-1.8 1.6a4 4 0 0 1-2.4.3a8 8 0 0 1-2.9-1.1a6 6 0 0 1-2.8-3.2a5.4 5.4 0 0 1 .4-4m-14.2-3.8l7.3-12l8.8 5.5l-1.2 2l-6.4-4l-1.6 2.7l6 3.7l-1.3 2l-6-3.7l-2 3.3l6.7 4l-1.2 2l-9-5.5zm-20.7-17l1.1-2l5.4 2.7l-2.5 5c-.8.2-1.8.3-3 .2a9.4 9.4 0 0 1-3.3-1a7.7 7.7 0 0 1-3-2.6a6 6 0 0 1-1-3.5a8.6 8.6 0 0 1 1-3.7a8 8 0 0 1 2.6-3a6.2 6.2 0 0 1 3.6-1.1c1 0 2 .3 3.2 1c1.6.7 2.6 1.7 3.1 2.8a5 5 0 0 1 .3 3.5l-2.7-.8a3 3 0 0 0-.2-2c-.3-.6-.8-1-1.6-1.4a3.8 3.8 0 0 0-3.1-.3c-1 .3-1.9 1.2-2.6 2.6c-.7 1.4-1 2.7-.7 3.8a3.7 3.7 0 0 0 2 2.4c.5.3 1.1.5 1.7.5a6 6 0 0 0 1.8 0l.8-1.6zm-90.2-22.3l2-14l4.2.7l1.1 9.8l3.9-9l4.2.6l-2 13.8l-2.7-.4l1.7-10.9l-4.4 10.5l-2.7-.4l-1.1-11.3l-1.6 11zm-14.1-1.7l1.3-14l10.3 1l-.2 2.4l-7.5-.7l-.3 3l7 .7l-.3 2.4l-7-.7l-.3 3.8l7.8.7l-.2 2.4z"
            />
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="M216.5 191.3c0-1.5.3-2.6.7-3.6a6.7 6.7 0 0 1 1.4-1.9a5.4 5.4 0 0 1 1.8-1.2c1-.3 2-.5 3-.5c2.1 0 3.7.8 5 2a7.4 7.4 0 0 1 1.6 5.5c0 2.2-.7 4-2 5.3a6.5 6.5 0 0 1-5 1.7a6.6 6.6 0 0 1-4.8-2a7.3 7.3 0 0 1-1.7-5.3"
              />
              <path
                fill="#f7ffff"
                d="M219.4 191.3c0 1.5.3 2.7 1 3.6c.7.8 1.6 1.3 2.8 1.3a3.5 3.5 0 0 0 2.8-1.1c.7-.8 1-2 1.1-3.7c0-1.6-.2-2.8-1-3.6a3.5 3.5 0 0 0-2.7-1.3a3.6 3.6 0 0 0-2.8 1.2c-.8.8-1.1 2-1.2 3.6"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="m233 198.5l.2-14h6c1.5 0 2.5.2 3.2.5c.7.2 1.2.7 1.6 1.3s.6 1.4.6 2.3a3.8 3.8 0 0 1-1 2.6a4.5 4.5 0 0 1-2.7 1.2l1.5 1.2c.4.4.9 1.2 1.5 2.3l1.7 2.8h-3.4l-2-3.2l-1.4-2a2.1 2.1 0 0 0-.9-.6a5 5 0 0 0-1.4-.2h-.6v5.8z"
              />
              <path
                fill="#fff"
                d="M236 190.5h2c1.4 0 2.3 0 2.6-.2c.3 0 .6-.3.8-.5s.3-.7.3-1c0-.6-.1-1-.4-1.2c-.2-.3-.6-.5-1-.6h-2l-2.3-.1z"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="m249 185.2l5.2.3c1.1 0 2 .1 2.6.3a4.7 4.7 0 0 1 2 1.4a6 6 0 0 1 1.2 2.4c.3.9.4 2 .3 3.3a9.3 9.3 0 0 1-.5 3c-.4 1-1 1.8-1.7 2.4a5 5 0 0 1-2 1c-.6.2-1.5.2-2.5.2l-5.3-.3z"
              />
              <path
                fill="#fff"
                d="m251.7 187.7l-.5 9.3h3.8c.5 0 .9-.2 1.2-.5c.3-.3.6-.7.8-1.3c.2-.6.4-1.5.4-2.6l-.1-2.5a3.2 3.2 0 0 0-.8-1.4a2.7 2.7 0 0 0-1.2-.7a13 13 0 0 0-2.3-.3z"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="m317.6 210.2l3.3-13.6l4.4 1l3.2 1c.7.4 1.3 1 1.6 1.9c.4.8.4 1.7.2 2.8c-.2.8-.5 1.5-1 2a3.9 3.9 0 0 1-3 1.4c-.7 0-1.7-.2-3-.5l-1.7-.5l-1.2 5.2z"
              />
              <path
                fill="#fff"
                d="m323 199.6l-.8 3.8l1.5.4c1 .2 1.8.4 2.2.3a1.9 1.9 0 0 0 1.6-1.5c0-.5 0-.9-.2-1.3a2 2 0 0 0-1-.9l-1.9-.5l-1.3-.3z"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="m330.6 214.1l4.7-13.2l5.5 2c1.5.5 2.4 1 3 1.4c.5.5.9 1 1 1.8s.2 1.5 0 2.3c-.4 1-1 1.7-1.8 2.2c-.8.4-1.8.5-3 .3c.4.5.8 1 1 1.6l.8 2.7l.6 3.1l-3.1-1.1l-1-3.6a19.5 19.5 0 0 0-.7-2.4a2.1 2.1 0 0 0-.6-.8c-.2-.3-.6-.5-1.3-.7l-.5-.2l-2 5.6z"
              />
              <path
                fill="#fff"
                d="m336 207.4l1.9.7c1.3.5 2.1.7 2.5.7c.3 0 .6 0 .9-.3c.3-.2.5-.5.6-.9c.2-.4.2-.8 0-1.2a1.7 1.7 0 0 0-.8-.9l-2-.7l-2-.7l-1.2 3.3z"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="M347 213.6a9 9 0 0 1 1.7-3.2a6.6 6.6 0 0 1 1.8-1.5a6 6 0 0 1 2-.7c1 0 2 0 3.1.4a6.5 6.5 0 0 1 4.2 3.3c.8 1.6.8 3.5.2 5.7a7.4 7.4 0 0 1-3.4 4.5c-1.5.9-3.3 1-5.2.4a6.6 6.6 0 0 1-4.2-3.3a7.3 7.3 0 0 1-.2-5.6"
              />
              <path
                fill="#fff"
                d="M349.8 214.4c-.4 1.5-.5 2.8 0 3.8s1.2 1.6 2.3 2c1 .3 2 .2 3-.4c1-.5 1.6-1.6 2.1-3.2c.5-1.5.5-2.7 0-3.7a3.5 3.5 0 0 0-2.2-2a3.6 3.6 0 0 0-3 .3c-1 .6-1.7 1.6-2.2 3.2"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="m374.3 233.1l6.4-12.4l5.3 2.7a10 10 0 0 1 2.7 1.9c.5.5.8 1.1.8 1.9s0 1.5-.4 2.2a3.8 3.8 0 0 1-2 2c-1 .2-2 .2-3.1-.2c.4.6.6 1.2.8 1.7c.2.6.3 1.5.4 2.8l.2 3.2l-3-1.5l-.4-3.7a20 20 0 0 0-.3-2.5a2 2 0 0 0-.5-1l-1.2-.7l-.5-.3l-2.7 5.2z"
              />
              <path
                fill="#fff"
                d="m380.5 227.2l1.9 1c1.2.6 2 1 2.3 1c.3 0 .7 0 1-.2c.3-.1.5-.4.7-.8c.2-.4.3-.8.2-1.2a2 2 0 0 0-.7-1a23.7 23.7 0 0 0-1.8-1l-2-1z"
              />
            </g>
            <g strokeOpacity=".5">
              <path
                fill="#309e3a"
                d="M426.1 258.7a8.9 8.9 0 0 1 2.5-2.6a6.6 6.6 0 0 1 2.2-.9a5.5 5.5 0 0 1 2.2 0c1 .2 1.9.6 2.8 1.2a6.6 6.6 0 0 1 3 4.4c.3 1.7-.2 3.6-1.4 5.5a7.3 7.3 0 0 1-4.5 3.3a6.5 6.5 0 0 1-5.2-1.1a6.6 6.6 0 0 1-3-4.4c-.3-1.8.2-3.6 1.4-5.4"
              />
              <path
                fill="#fff"
                d="M428.6 260.3c-1 1.3-1.3 2.5-1.1 3.6a3.6 3.6 0 0 0 1.6 2.5c1 .7 2 .9 3 .6c1-.3 2-1 2.9-2.4c.9-1.4 1.3-2.6 1.1-3.6c-.1-1-.7-1.9-1.6-2.6s-2-.8-3-.5c-1 .2-2 1-3 2.4z"
              />
            </g>
            <path
              fill="#309e3a"
              d="m301.8 204.5l2.3-9.8l7.2 1.7l-.3 1.6l-5.3-1.2l-.5 2.2l4.9 1.1l-.4 1.7l-4.9-1.2l-.6 2.7l5.5 1.3l-.4 1.6z"
            />
          </g>
        </svg>
      </div>
      <div
        className="cursor-pointer p-[.125rem]"
        onClick={() => setLanguageContext('en-US')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 640 480"
          className={`hover:scale-125 ${
            selectedLanguage === 'en-US' ? 'scale-125' : ''
          } transition-all duration-300`}
        >
          <path fill="#bd3d44" d="M0 0h640v480H0" />
          <path
            stroke="#fff"
            strokeWidth="37"
            d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
          />
          <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
          <marker id="flagUs4x30" markerHeight="30" markerWidth="30">
            <path fill="#fff" d="m14 0l9 27L0 10h28L5 27z" />
          </marker>
          <path
            fill="none"
            markerMid="url(#flagUs4x30)"
            d="m0 0l16 11h61h61h61h61h60L47 37h61h61h60h61L16 63h61h61h61h61h60L47 89h61h61h60h61L16 115h61h61h61h61h60L47 141h61h61h60h61L16 166h61h61h61h61h60L47 192h61h61h60h61L16 218h61h61h61h61h60z"
          />
        </svg>
      </div>
    </div>
  )
}

export default languageSelector
