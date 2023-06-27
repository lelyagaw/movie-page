import Image from 'next/image'
import React from 'react'

export default function Card({result}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className='p-3 cursor-pointer hover:text-yellow-200 active:text-red-400'>
        <Image layout='responsive'
          src={BASE_URL+result.backdrop_path}
            height={100}
            width={200}
        />
        <div className='p-2'>
            <p className='truncate text-lg'>{result.overview}</p>
            <h2 className='text-lg font-bold'>{result.title || result.name}</h2>
            <p>{result.release_date || result.first_air_date}</p>
        </div>
    </div>
  )
}
