import Image from "next/image";
export function Header(){
    return(
        <header className="h-[80px] container flex items-center justify-between">
            <span>
                <a href="#banner">
                    <Image src="/logo.svg" width={187} height={30} alt="logo"/>
                </a>
            </span>
            <nav>
                <ul className="text-[14px] gilroy uppercase text-[#000000] gap-[40px] font-thin flex ">
                    <a href="#about">
                        <li>О ФОНДЕ</li>
                    </a>
                    <a href="#children">
                        <li>дети с заболеваниями</li>
                    </a>
                    <a href="#donate">
                        <li>пожертвовать</li>
                    </a>
                    <a href="#about_diseases">
                        <li>о заболеваниях</li>
                    </a>
                    <a href="#contants">
                        <li>контакты</li>
                    </a>
                </ul>
            </nav>
            <button className="w-[250px] shadow-2xl shadow-[#F66E7B] bg-[#F66E7B] rounded-[50px] flex items-center gap-3 font-bold justify-center h-[55px]" type={"button"}>
                <Image src="/icons/hands.svg" width={25} height={25} alt="hands"/>
                <span className="text-[24px] font-thin text-white">пожертвовать</span>
            </button>
        </header>
    )
}
