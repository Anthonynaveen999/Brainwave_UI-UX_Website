import brackets from '../assets/svg/Brackets';
const Tagline = ({className,children}) => {
  return (
    <div className={`flex items-center tagline ${className || ''}`}>
        {brackets("left")}
        <div className='text-n-3 mx-3'>{children}</div>
        {brackets("right")}
    </div>
  )
}

export default Tagline