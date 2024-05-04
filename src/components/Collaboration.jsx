import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import Button from './Button'
import {LeftCurve,RightCurve} from "./design/Collaboration";
const Collaboration = () => {
  return (
    <Section crosses >
        <div className='container lg:flex'>
            <div className='max-w-[25rem] '>
                <h2 className='h2 mb-4 md:mb-8'>
                    AI Chat App for seamless collaboration
                </h2>
                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {
                        collabContent.map((item) => (
                            <li className='mb-3 py-3' key={item.id}>
                                <div className='flex items-center'>
                                    <img 
                                        src={check} 
                                        height={24} 
                                        width={24}
                                        alt='check'
                                    />
                                    <h6 className='ml-5 body-2'>{item.title}</h6>
                                </div>
                                {
                                    item.text && 
                                    <p className='body-2 mt-3 text-n-4'>
                                        {item.text}
                                    </p>
                                }
                            </li>
                        ))
                    }
                </ul>
                <Button>Try it now</Button>
            </div>
            <div className=' lg:ml-auto xl:w-[38rem] mt-4'>
                <p className='body-2 text-n-4 mb-8 md:mb-16 lg:mb-32 lg:w-[22rem] xl:mx-auto'>
                    {collabText}
                </p>
                <div className='relative flex border border-n-6 left-1/2 w-[22rem] rounded-full -translate-x-1/2 aspect-square scale:75 md:scale:100'>
                    <div className='flex border border-n-6 aspect-square w-60 rounded-full m-auto'>
                        <div className='w-[6rem] rounded-full bg-conic-gradient p-[0.2rem] m-auto aspect-square'>
                            <div className='flex items-center justify-center bg-n-8 w-full h-full rounded-full'>
                                <img 
                                src={brainwaveSymbol} 
                                alt="brainwaveSymbol" 
                                width={48} 
                                height={48}
                                className=''
                                />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {
                            collabApps.map((app,index) => (
                                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index*45}`}>
                                    <div className={`bg-n-7 border border-n-1/15 relative -top-[1.6rem] h-[3.2rem] w-[3.2rem] flex rounded-xl -rotate-${index*45}`}>
                                        <img 
                                        src={app.icon} 
                                        alt={app.title} 
                                        width={app.width} 
                                        height={app.height}
                                        className='m-auto'
                                        />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <LeftCurve />
                    <RightCurve />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration