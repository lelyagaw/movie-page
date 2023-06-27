import Image from 'next/image'
import React from 'react'

export default function Card({result}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
        <Image layout='responsive'
          src={BASE_URL+result.backdrop_path}
            height={100}
            width={200}
        />
        <div className=''>
            <p className='truncate'>{result.overview}</p>
            <h2>{result.title || result.name}</h2>
            <p>{result.release_date || result.first_air_date}</p>
        </div>
    </div>
  )
}
