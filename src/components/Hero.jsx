import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";
import {BackgroundCircles,Gradient,BottomLine} from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
const Hero = () => {
    const parallaxRef = useRef(null)
  return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crossesOffset="lg:translate-y-[5.25rem]"
        crosses
        id="hero"
        customPaddings
    >
        <div className="container relative" ref={parallaxRef}>
            <div className="relative text-center mx-auto z-1 max-w-[62rem] mb-[4rem] md:mb-20 lg:mb-[6rem]">
                <h1 className="h1 mb-6">
                    Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
                    <span className="relative inline-block">
                        Brainwave
                        <img 
                            src={curve} 
                            className="absolute top-full left-0 w-full xl:-mt-2"
                            width={624}
                            height={28}
                            alt="curve"
                        />
                    </span>
                </h1>
                    <p className=" body-1 text-n-2 max-w-3xl mb-6 lg:mb-8 mx-auto"> Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                    <Button white href="/pricing">
                        get started
                    </Button>
            </div>
            <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
                <div className="relative z-1 rounded-2xl p-0.5 bg-conic-gradient">
                    <div className="relative rounded-[1rem] bg-n-8">
                        <div className="relative rounded-t-[0.9rem]  bg-n-10 h-[1.4rem]" />
                        <div className="rounded-b-[0.9rem] aspect-[33/40] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img 
                                src={robot} 
                                width={1024}
                                height={490}
                                alt="AI"
                                className="scale-[1.7] -translate-y-[8%] w-full md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[23%]"
                            />
                            <Generating className="absolute left-4 right-4 bottom-5 md:w-[31rem] md:left-1/2 md:right-auto md:-translate-x-1/2 md:bottom-8"/>
                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 backdrop-blur bg-n-9/40 border border-n-1/10 rounded-2xl xl:flex">
                                    {
                                        heroIcons.map((icon,index) => (
                                            <li className="p-5 " key={index}>
                                                <img src={icon} alt={icon} height={25} width={24}/>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </ScrollParallax>
                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification 
                                className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                    title="Code generation"
                                />
                            </ScrollParallax>
                        </div>
                    </div>
                    <Gradient />
                </div>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                    <img 
                        src={heroBackground} 
                        alt="hero" 
                        width={1440} 
                        height={1800} 
                        className=" "
                    />
                </div>
                <BackgroundCircles />
            </div>
            <CompanyLogos className='hidden mt-20 z-10 relative lg:block'/>
        </div>
        <BottomLine />
    </Section>
  )
}

export default Hero