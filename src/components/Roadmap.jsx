import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { roadmap } from '../constants'
import { check2, grid, loading1 } from '../assets'
import Tagline from './Tagline'
import { Gradient } from "./design/Roadmap";
import Button from './Button'
const Roadmap = () => {
  return (
    <Section className='overflow-hidden' id='roadmap'>
        <div className='container md:pb-10'>
            <Heading
                tag="ready to get started" 
                title='What we’re working on'
            />
            <div className='relative grid gap-6 md:gap-4 md:grid-cols-2 md:pb-[7rem]'>
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress"
                    return(
                        <div 
                            key={item.id} 
                            className={`md:flex p-0.25 even:md:translate-y-[7rem] rounded-[2.5rem] ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}
                        >
                            <div className='relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15'>
                                <div className='absolute top-0 left-0 max-w-full'>
                                    <img 
                                    src={grid} 
                                    alt="Grid"
                                    height={550}
                                    width={550}
                                    className='w-full'
                                    />
                                </div>
                                <div className='relative z-1'>
                                    <div className='flex items-center justify-between max-w-[27rem] mb-8 md:mb-20'>
                                        <Tagline>{item.date}</Tagline>
                                        <div className='flex items-center bg-n-1 rounded px-4 py-1 text-n-8'>
                                            <img 
                                                src={item.status === 'done' ? check2 : loading1} 
                                                alt="status" 
                                                height={16} 
                                                width={16} 
                                                className='mr-2.5' 
                                            />
                                            <div className='tagline'>{status}</div>
                                        </div>
                                    </div>
                                    <div className='mb-10 -my-10 -mx-15'>
                                        <img 
                                            src={item.imageUrl} 
                                            alt={item.title} 
                                            className='w-full' 
                                            width={630} 
                                            height={420} 
                                        />
                                    </div>
                                    <h4 className='h4 mb-4'>{item.title}</h4>
                                    <p className='body-2 text-n-4'>{item.text}</p>
                                </div>
                            </div>
                        </div>  
                    );
                })}
                <Gradient />
            </div>

            <div className='flex justify-center mt-12 md:mt-15 xl:mt-20'>
                <Button href='/roadmap'>
                    our roadmap
                </Button>
            </div>
        </div>
    </Section>
  )
}

export default Roadmap;