import React from 'react'
import CrashForm from './crash/form'

export default function DesktopControl() {
  return (
    <div className="hidden w-full gap-3 flex-wrap md:flex-wrap md:flex">
      <CrashForm position="left" />

      <CrashForm position="right" />
    </div>
  )
}
