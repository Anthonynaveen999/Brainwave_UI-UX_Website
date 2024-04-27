import React from 'react'
import { loading } from '../assets'

const Generating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] bg-n-8/80 px-6 rounded-[1.7rem] text-base ${className || ""}`}>
        <img 
            src={loading} 
            alt="generating" 
            className='h-5 w-5 mr-4'
        />
        AI is generating
    </div>
  )
}

export default Generating