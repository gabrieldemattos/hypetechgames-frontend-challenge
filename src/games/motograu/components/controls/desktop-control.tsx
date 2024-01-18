import React from 'react'
import CrashForm from './crash/form'

export default function DesktopControl() {
  return (
    <div className="flex w-full gap-3">
      <CrashForm position="left" />

      <CrashForm position="right" />
    </div>
  )
}
