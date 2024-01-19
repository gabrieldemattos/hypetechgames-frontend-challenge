import React, { useState } from 'react'

import About from '../modal-provably-fair/index'

export default function Footer({}) {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className="flex min-h-7 w-full rounded p-1">
      <div className="flex items-center flex-grow">
        <p className="pl-2 text-white text-sm xl:text-[.625rem]">
          This game is{' '}
        </p>
        <i className="fi fi-rs-shield-check pl-1 text-green-500 items-center">
          <img
            src="../images/icons/SecureLogo.svg"
            className="h-4 mx-auto"
          />
        </i>
        <button
          onClick={() => {
            setShowModal(!showModal)
          }}
          className="pl-1 text-sm xl:text-[.75rem] text-white items-center"
        >
          <span className="">Provably Fair</span>
        </button>
      </div>
      <div className="flex items-center pr-3">
        <p className="text-white text-sm xl:text-[.6875rem] font-thin">
          powered by
        </p>
        <p className="pl-1 text-white underline">
          <a
            href="https://hypetech.games/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../images/logos/hypetech.png"
              alt="logotipo da Hypetech"
              className="w-24 xl:w-16"
            />
          </a>
        </p>
      </div>{' '}
      <About show={showModal} toggle={setShowModal} />
    </div>
  )
}
