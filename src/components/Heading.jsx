import React from 'react'

const Heading = ({className,title}) => {
  return (
    <div className={`${className} max-w-[50rem] mb-12 lg:mb-20 mx-auto`}>
        {title && <h2 className='h2'>{title}</h2>}
    </div>
  )
}

export default Heading