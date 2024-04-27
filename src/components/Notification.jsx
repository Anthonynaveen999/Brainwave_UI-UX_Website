import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({className,title}) => {
  return (
    <div className={`flex items-center gap-5 p-4 pr-6 backdrop-blur border rounded-2xl border-n-1/10 bg-n-9/40 ${className || ""}`}>
        <img src={notification1} width={62} height={62} alt='image' className='rounded-xl'/>
        <div className='flex-1'>
            <h6 className='mb-1 text-base font-semibold'>{title}</h6>
            <div className='flex justify-between items-center'>
                <ul className='flex -m-0.5 '>
                    {
                        notificationImages.map((item,index)=>(
                            <li key={index} className='flex w-6 h-6 border-2 rounded-full border-n-12 overflow-hidden'>
                                <img 
                                    src={item} 
                                    alt="item" 
                                    className='w-full ' 
                                    height={20} 
                                    width={20}
                                />
                            </li>
                        ))
                    }
                </ul>
                <div className='body-2 text-n-13'>1m ago</div>
            </div>
        </div>
    </div>
  )
}

export default Notification