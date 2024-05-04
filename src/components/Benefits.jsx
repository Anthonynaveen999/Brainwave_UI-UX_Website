import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import {GradientLight} from"./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
const Benefits = () => {
  return (
    <Section id="features">
        <div className=" container relative z-2">
            <Heading className="md:max-w-md lg:max-w-2xl " title="Chat Smarter, Not Harder with Brainwave"/>
            <div className="flex flex-wrap gap-10 mb-10">
                {
                    benefits.map((item) => (
                        <div
                        key={item.id}
                        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                        style={{
                            backgroundImage: `url(${item.backgroundUrl})`,
                          }}
                        >
                            <div className="relative flex flex-col z-2 min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img 
                                        src={item.iconUrl} 
                                        alt={item.title} 
                                        height={48} 
                                        width={48}
                                    />
                                    <p className="ml-auto text-xs font-code font-bold uppercase text-n-1 tracking-wider">
                                        explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>
                            { item.light && <GradientLight /> }
                            <div className="bg-n-8 inset-0.5 absolute" style={{clipPath:"url(#benefits)"}}>
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {
                                        item.imageUrl && (
                                            <img 
                                                src={item.imageUrl} 
                                                alt={item.title} 
                                                width={380} 
                                                height={362} 
                                                className="w-full h-full object-cover"
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <ClipPath />
                        </div>
                    ))
                }
            </div>
        </div>
    </Section>
  )
}

export default Benefits