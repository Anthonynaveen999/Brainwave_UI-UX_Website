import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { check, service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import Generating from './Generating'
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from './design/Services'

const Services = () => {
  return (
    <Section id="how-to-use">
        <div className='container'>
        <Heading 
            title="Generative AI made for creators." 
            text="Brainwave unlocks the potential of AI-powered applications"
        />
            <div className='relative'>
                <div className='relative flex z-1 items-center h-[39rem] xl:h-[46rem] mb-5 p-8 lg:p-20 border border-n-1/10 rounded-3xl overflow-hidden'>
                    <div className='w-full h-full absolute top-0 left-0 pointer-events-none md:w-3/5 xl:w-auto'>
                        <img 
                        src={service1} 
                        alt="smartest AI" 
                        width={800}
                        height={730}
                        className='w-full h-full object-cover md:object-right'
                        />
                    </div>
                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <h4 className='h4 mb-4'>Smartest AI</h4>
                        <p className='body-2 text-n-3 mb-[3rem]'>Brainwave unlocks the potential of AI-powered applications</p>
                        <ul className='body-2 '>
                            {
                                brainwaveServices.map((item,index) => (
                                    <li key={index} className='flex items-start border-t border-n-6 py-4'>
                                        <img src={check} width={24} height={24}/>
                                        <p className='ml-4'>{item}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Generating className="absolute bottom-4 left-4 right-4 lg:left-1/2 lg:bottom-8 lg:-translate-x-1/2 border border-n-1/10 "/>
                </div>
                <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                    <div className='relative min-h-[39rem] overflow-hidden border border-n-1/10 rounded-3xl'>
                        <div className='absolute inset-0'>
                            <img 
                            src={service2}  
                            className='w-full h-full object-cover'
                            width={630}
                            height={750}
                            alt='roboot'
                            />
                        </div>
                        <div className='absolute flex items-start justify-end flex-col inset-0 p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90'>
                            <h4 className='h4 mb-4'>Photo editing</h4>
                            <p className='body-2 text-n-3 mb-[3rem]'>
                            Automatically enhance your photos using our AI app's photo editing feature. Try it now!
                            </p>
                        </div>
                        <PhotoChatMessage />
                    </div>
                    <div className='p-4 overflow-hidden lg:min-h-[46rem] rounded-3xl bg-n-7'>
                        <div className='py-12 px-4 xl:px-8'>
                            <h4 className='h4 mb-4'>Video generation</h4>
                            <p className='body-2 mb-[2rem] text-n-3'>
                                The world’s most powerful AI photo and video art generation engine. What will you create?
                            </p>
                            <ul className='flex items-center justify-between'>
                               {
                                brainwaveServicesIcons.map((item,index) => (
                                    <li key={index} className={`rounded-2xl flex items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}>
                                        <div className={`${index === 2 ? "bg-n-7 rounded-[1rem] w-full h-full flex items-center justify-center" : ""}`}>
                                            <img 
                                                src={item} 
                                                alt={item} 
                                                width={24} 
                                                height={24} 
                                            />
                                        </div>
                                    </li>
                                ))
                               } 
                            </ul>
                        </div>
                        <div className='bg-n-8 rounded-xl relative overflow-hidden h-[20rem] md:h-[25rem]'>
                            <img 
                            src={service3} 
                            alt="scary robot" 
                            width={520} 
                            height={400} 
                            className='w-full h-full object-cover' 
                        />
                        <VideoChatMessage />
                        <VideoBar />
                        </div>
                    </div>
                </div>
                <Gradient />
            </div>
        </div>
    </Section>
  )
}

export default Services