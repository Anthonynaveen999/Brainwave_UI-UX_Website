import React from 'react'
import { pricing } from '../constants'
import Button from './Button'
import { check } from '../assets'

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
        {
            pricing.map((item) => (
                <div 
                    className='w-[19rem] max-lg:w-full h-full bg-n-8 border border-n-6 rounded-[2rem] px-6 lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3' 
                    key={item.id}
                >
                    <h4 className='h4 mb-4'>{item.title}</h4>
                    <p className='body-2 text-n-1/50 mb-3 min-h-[4rem]'>{item.description}</p>
                    <div className='flex items-center mb-6 h-[5.5rem]'>
                        {
                            item.price && (
                                <>
                                    <div className='h3'>$</div>
                                    <div className='text-[5.5rem] leading-none font-bold'>{item.price}</div>
                                </>
                            )
                        }
                    </div>
                    <Button 
                        className='w-full mb-6'
                        href={item.price ? '/pricing' : 'mailto:anthonynaveen999@gmail.com'}
                        white={!!item.price}
                    >
                        { item.price ? "get started" : "contact us"}
                    </Button>
                    <ul>
                        {item.features.map((feature,index) => (
                            <li className='flex border-t border-n-6 items-start py-5' key={index}>
                                <img 
                                    src={check} 
                                    alt="check" 
                                    width={24} 
                                    height={24}
                                />
                                <p className='body-2 ml-4'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default PricingList