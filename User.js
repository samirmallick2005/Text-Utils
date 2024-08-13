import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-white text-3xl p-3 m-4 text-center' > User : {userid} </h1>
    </div>
  )
}
