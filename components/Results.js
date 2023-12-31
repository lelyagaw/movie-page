import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xlg:gid-cols-4'>
      {results.map((result) => (
        <Card key={result.id} result={result}/>
      ))}

    </div>
  )
}
