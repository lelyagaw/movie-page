import React from 'react'

export default function Headericon({Icon, title}) {
  return (
    <div>
        <Icon className="h-8"/>
        <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}
