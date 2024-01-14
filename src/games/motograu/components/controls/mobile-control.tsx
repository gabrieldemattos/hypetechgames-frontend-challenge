import React from 'react'

import CrashForm from './crash/form'

export default function MobileControl() {
  return (
    <div className="w-full flex gap-3 justify-center flex-wrap md:flex-nowrap md:hidden">
      <CrashForm position="left" />

      <CrashForm position="right" />
    </div>
  )
}
