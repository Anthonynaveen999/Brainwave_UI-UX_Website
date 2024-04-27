import { companyLogos } from "../constants";
const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
        <h5 className='tagline mb-6 text-center text-n-1/50'>Helping people create beautiful content at</h5>
        <ul className="flex justify-center w-full gap-[7.5rem]">
            {
                companyLogos.map((logo,index) => (
                    <li key={index}>
                        <img 
                            className="flex items-center justify-center h-[8.5rem] flex-1"
                            src={logo} 
                            alt={logo}
                            height={28} 
                            width={134} 
                        />
                    </li>
                ))
            }
        </ul>
    </div>
  );
};

export default CompanyLogos;