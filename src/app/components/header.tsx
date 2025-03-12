'use client'
import Image from "next/image";
import {useState} from "react";
import {HeaderBurger} from "@/app/components/headerBurger";

export function Header(){
    const [isClose, setIsClose] = useState<boolean>(false);

    return(
        <header className="h-[80px] relative px-[20px] md:px-[20px] xl:container flex items-center justify-between">

            <span className={"md:w-[187px]  xl:w-[187px] lg:w-[120px] mt-[20px] w-[250px]"}>
                <a href="/">
                    <Image src="/logo.svg" className="w-[250px] md:w-[187px] xl:w-[187px] lg:w-[120px] " width={187} height={30} alt="logo"/>
                </a>
            </span>
            <nav className={"hidden  lg:block"}>
                <ul className="xl:text-[14px] lg:text-[8px] gilroy uppercase text-[#000000] gap-[40px] font-bold flex ">
                    <a href="/about">
                        <li className={"text-[#67519F]"}>О ФОНДЕ</li>
                    </a>
                    <a href="/child">
                        <li className={"text-[#F66E7B]"} >дети с заболеваниями</li>
                    </a>
                    <a href="/#donate">
                        <li className={"text-[#397BE8]"}>пожертвовать</li>
                    </a>
                    <a href="/cancer">
                        <li className={"text-[#E9972B]"}>о раке</li>
                    </a>
                    <a href="/#donate">
                        <li className={"text-[#323663]"}>контакты</li>
                    </a>
                </ul>
            </nav>
            <div className={"hidden lg:block"}>
                <a href={"#donate"}>
                <button
                    className="w-[250px]  shadow-2xl shadow-[#F66E7B] bg-[#F66E7B] rounded-[50px] flex items-center gap-3 font-bold justify-center h-[55px]"
                    type={"button"}>
                    <Image src="/icons/hands.svg" width={25} height={25} alt="hands"/>
                    <span className="text-[24px] font-thin text-white">пожертвовать</span>
                </button>
                </a>
            </div>
            {
                isClose ? null : (
            <button type={"button"} className={"lg:hidden"} onClick={() => setIsClose(true)}>
                <svg width="44" height="45" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12.8342H21M3 6.83422H21M3 18.8342H21" stroke="#F66E7B" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </button>
                    )
            }
            <div className={"absolute top-0 left-0 w-[full]"}>
                {
                    isClose ? (<HeaderBurger handleClose={setIsClose}/>) : null
                }
            </div>



        </header>
    )
}
