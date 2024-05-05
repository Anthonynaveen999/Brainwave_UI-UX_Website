import React from 'react'
import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
import PricingList from './PricingList';
import {LeftLine,RightLine} from './design/Pricing';
const Pricing = () => {
  return (
    <Section className=' overflow-hidden' id='pricing'>
        <div className='container relative z-2'>
            <div className='hidden relative lg:flex justify-center mb-[6.5rem]'>
                <img 
                    src={smallSphere} 
                    alt="sphere" 
                    width={255} 
                    height={255}
                    className='relative z-1'
                />
                <div className='absolute w-[60rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                    <img 
                        src={stars} 
                        alt="stars" 
                        width={950} 
                        height={400} 
                        className='w-full'
                    />
                </div>
            </div>
            <Heading 
                tag="Get started with Brainwave"
                title="Pay once, use forever"
            />
            <div className='relative'>
                <PricingList />
                <LeftLine />
                <RightLine />
            </div>
            <div className='flex justify-center mt-10'>
                <a className='font-code font-bold text-xs uppercase border-b tracking-wider' href='/pricing'>See the full details</a>
            </div>
        </div>
    </Section>
  )
}

export default Pricing;