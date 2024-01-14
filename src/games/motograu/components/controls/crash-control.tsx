import React from 'react'
import MobileControl from './mobile-control'
import DesktopControl from './desktop-control'

export default function CrashControl() {
  return (
    <div className="w-full flex justify-center flex-wrap md:flex-nowrap">
      <MobileControl />

      <DesktopControl />
    </div>
  )
}
