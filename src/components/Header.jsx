import { useState } from 'react';
import { brainwave } from '../assets';
import { navigation } from '../constants/index';
import { useLocation } from 'react-router-dom';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import Button from './Button';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
    const pathName = useLocation();
    const [openNavigation,setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if(openNavigation){
            setOpenNavigation(false);
            enablePageScroll();
        }else{
            setOpenNavigation(true);
            disablePageScroll();
        }
    }
    const handleClick = () => {
        if(!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }
  return (
    <div className={`fixed left-0 w-full top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? ' bg-n-8' : ' bg-n-8/90 backdrop-blur-sm'}`}>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
            <a href="#hero" className="block w-[12rem] xl:mr-8">
            <img src={brainwave} width={190} height={40} alt="brainwave" />
            </a>
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent lg:mx-auto`}>
                <div className="relative z-2 flex flex-col justify-center items-center lg:flex-row m-auto">
                    {
                        navigation.map((item) => (
                            <a 
                                href={item.url} 
                                key={item.id} 
                                onClick={handleClick}
                                className={`block relative text-2xl uppercase font-code py-6 px-6 md:py-8 lg:-mr-0.25 transition-colors lg:text-xs lg:font-semibold text-n-1 hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`} 
                            >
                                {item.title}
                            </a>
                        ))
                    }
                </div>
                <HamburgerMenu />
            </nav>
            <a href="#signup" className="button hidden mr-8 text-n-1/50 hover:text-n-1 transition-colors lg:block">
                New account
            </a>
            <Button className="hidden lg:flex" href="#login">
                Sign in
            </Button>
            <Button className="lg:hidden ml-auto" px="px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation}/>
            </Button>
        </div>
    </div>
  )
}

export default Header