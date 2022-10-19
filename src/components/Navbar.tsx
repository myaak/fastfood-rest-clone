import { useCallback, useEffect, useState, useRef } from 'react'
import { navLinks, mobileLinks, currentCity } from '../constants/constants'
import {logo,map,user} from '../assets'
import {Switch, Typography} from '@mui/material'

interface Props {
    changeLanguage: () => void
    lang: string
}


const Navbar = ({lang, changeLanguage}:Props) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [onTop, setOnTop] = useState<boolean>(false)
    const [isAuth, setAuth] = useState<boolean>(false)
    useEffect(() => {
        const handleScroll = () => {
            setOnTop(window.scrollY > 200)
            console.log(1)
        }
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll",handleScroll)
    })

    return(
          <div className={`top-0 flex md:h-[100px] h-[46px] justify-between z-[2020] nav-wrapper ${onTop ? 'sticky top-0' : ''}`}>
        <div className={`flex ml-[10px] md:justify-start justify-between w-full  `}>
            <div className="ml-[5px] md:mr-[83px] flex self-center ">
                <img src={logo} alt="123" className="md:h-[64px] md:w-[64px] h-[32px] w-[32px]" />
            </div>
            <div className="hidden md:flex pt-[17px] flex-col self-start content">
            <div className=" flex h-[17px] mb-[24px] top-content">
                <a className="mr-[30px]">{currentCity}</a>
                <a>{lang == 'RU' ? `${'Вход на сайт'}` : `${'Log In'}`}</a>
            </div>
            <div className="flex">
                <nav className="flex">
                    {navLinks.map((item,index) => (
                        <a key={item.id} className={`${index === navLinks.length ? 'mr-0' : 'mr-10'} cursor-pointer`}>{lang == 'RU' ? `${item.titleRu}` : `${item.titleEn}`}</a>
                    ))}
                </nav>
            </div>
            </div>
            <div className="absolute md:flex hidden flex-row items-center ml-[1075px] mt-[5px] text-[14px]">
                <Typography>RU</Typography><Switch onChange={changeLanguage}/><Typography>EN</Typography>
            </div>
                <div className="flex md:hidden items-center mr-[10px] duration-500"
                    onClick={() => setVisible((prev) => !prev)}
                >
                    {
                        visible ? 
                        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="page-header-close h-[28px] w-[28px] fill-gray-400"><path d="M7.83 4.344l6.17 6.17 4.349-4.347a2.576 2.576 0 013.496-.137l.148.137 1.663 1.663-6.17 6.17 4.346 4.347a2.577 2.577 0 01.133 3.506l-.131.14-1.663 1.664L14 17.484l-4.347 4.348a2.576 2.576 0 01-3.505.132l-.14-.13-1.664-1.664 6.17-6.17-4.346-4.346a2.577 2.577 0 01-.133-3.506l.131-.14L7.83 4.343z" fillRule="evenodd"></path></svg>
                        : 
                        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="page-header-menu h-[28px] w-[28px] fill-orange-500"><path d="M3.62 7.98c.204 2.462 2.26 4.397 4.764 4.397l15.926.006a.371.371 0 00.367-.405c-.205-2.463-2.26-4.398-4.765-4.398L3.986 7.573a.371.371 0 00-.367.406M8.088 20.42l15.926.006a.371.371 0 00.367-.405c-.205-2.463-2.26-4.398-4.765-4.398L3.69 15.617a.371.371 0 00-.367.405c.205 2.463 2.26 4.398 4.765 4.398z" fillRule="evenodd"></path></svg>
                    }
                </div>
                <div
                    className={`${
                    visible ? '-translate-x-[0]' : '-translate-x-full '} 
                    mt-[46px] z-[2020] h-full w-full fixed left-0 bg-white ease-out-in duration-500 `}

                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        <li className="leading-[50px] font-medium cursor-pointer text-[16px] min-h-[50px] w-full 
                            border-b-[2px] border-b-gray-400/25 border-t-orange-500 border-t-[3px] flex">
                           <a className="flex items-center px-[19px]">
                               <svg viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg" className="navigation-mobile-icon h-[20px] w-[16px] mr-[10px] fill-orange-500"><path d="M8 11.56a3.64 3.64 0 110-7.28 3.64 3.64 0 010 7.28M8 .12a7.8 7.8 0 00-7.8 7.8c0 5.4 6 11.4 7.8 11.4 1.8 0 7.8-6 7.8-11.4A7.8 7.8 0 008 .12" fillRule="evenodd"></path></svg>
                                   {currentCity}
                           </a>
                        </li>
                        <li className={`leading-[50px] font-medium cursor-pointer text-[16px] min-h-[50px] w-full 
                            border-b-[2px] border-b-gray-400/25 flex`}>
                            <a className="flex items-center px-[19px]">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" className="navigation-mobile-icon h-[17px] w-[16px] mr-[10px] fill-orange-500"><path d="M8 10.04c3.979 0 7.277 2.556 7.79 5.86.074.472-.3.9-.781.9H.99a.787.787 0 01-.782-.9C.723 12.596 4.021 10.04 8 10.04m0-2.08c-2.297 0-3.12-1.63-3.12-3.64C4.88 2.31 5.703.68 8 .68s3.12 1.63 3.12 3.64c0 2.01-.823 3.64-3.12 3.64" fillRule="evenodd"></path></svg>
                                  {isAuth ? 'Профиль' : 'Вход на сайт'}
                            </a>
                        </li>
                        {
                         mobileLinks.map((nav, index) => (
                           <li
                             key={nav.id}
                             className={`leading-[50px] font-medium cursor-pointer text-[16px] min-h-[50px] w-full "
                             } ${index === mobileLinks.length - 1 ? "" : "border-b-[1px] border-b-gray-400/25"}`}
                           >
                            <a className="flex px-[19px]" href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar