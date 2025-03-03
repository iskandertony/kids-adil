import Image from 'next/image'
export function HeaderBurger({handleClose}: any){
    function close(){
        setTimeout(() => {
             handleClose(false);
        }, 1000)
    }

    return(
        <div className={` relative top-0    bg-[#ffffff] z-[100] md:w-[100vw] w-[100vw] h-[100vh]`}>
            <button type={"button"} onClick={() =>  handleClose(false)} >
                <Image className={"absolute top-5 left-[20px]"} src={"/logo.svg"} width={120} height={45} alt={"close"}/>
            <Image className={"absolute top-3 right-[30px]"} src={"/images/close.svg"} width={45} height={45} alt={"close"}/>
            </button>
            <nav className={"p-[50px] pt-[80px]"}>
                <ul className="text-[14px] gilroy uppercase  text-[#000000] gap-[40px] font-bold flex flex-col ">
                    <a href="/about">
                        <li className={"text-[#67519F]"} onClick={close}>О ФОНДЕ</li>
                    </a>
                    <a href="/child">
                        <li className={"text-[#F66E7B]"} onClick={close}>дети с заболеваниями</li>
                    </a>
                    <a href="/#donate">
                        <li className={"text-[#397BE8]"} onClick={close}>пожертвовать</li>
                    </a>
                    <a href="/#about">
                        <li className={"text-[#E9972B]"} onClick={close}>о заболеваниях</li>
                    </a>
                    <a href="/#donate">
                        <li className={"text-[#323663]"} onClick={close}>контакты</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}