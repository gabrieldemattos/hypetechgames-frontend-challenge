import React from 'react'
import MobileControl from './mobile-control'
import DesktopControl from './desktop-control'

export default function CrashControl() {
  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="block sm:hidden">
        <MobileControl />
      </div>

      <div className="hidden sm:block">
        <DesktopControl />
      </div>
    </div>
  )
}
