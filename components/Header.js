import Image from 'next/image'
import React from 'react'
import Headericon from './Headericon'
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/24/solid'


export default function Header() {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
        <div className='flex '>
            <Headericon Icon={HomeIcon} title="Home" />
            <Headericon Icon={UserIcon} title="Account" />
            <Headericon Icon={PhoneIcon} title="Contact" />
            <Headericon Icon={InformationCircleIcon} title="About" />
        </div>
        <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1920px-IMDB_Logo_2016.svg.png'}
            alt={'IMDB Logo'}
            width={100}
            height={100}
            className='cursor-pointer active:brightness-110'
            />
        </div>

  )
}
