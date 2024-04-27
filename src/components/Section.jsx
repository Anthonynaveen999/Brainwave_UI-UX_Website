import SectionSvg from '../assets/svg/SectionSvg' ;
const Section = ({className,children,id,crosses,crossesOffset,customPaddings}) => {
  return (
    <div 
      id={id} 
      className={`
      relative 
      ${className || ''} 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
    `}>
        {children}
        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
        {
            crosses && (
                <>
                    <div className={`hidden absolute top-0 h-0.25 left-7.5 right-7.5 pointer-events-none bg-stroke-1 ${crossesOffset && crossesOffset} lg:block right-10 xl:left-10`}/>
                    <SectionSvg crossesOffset={crossesOffset}/>
                </>
            )
        }
    </div>
  )
}

export default Section;