import React from 'react'

export default function Headericon({Icon, title}) {
  return (
    <div className='mx-4 flex flex-col cursor-pointer active:text-red-400 hover:text-white lg:mx-6'>
        <Icon className="h-8"/>
        <p className="my-2">{title}</p>
    </div>
  )
}
