import Image from 'next/image'
export function HeaderBurger({handleClose}: any){
    function close(){
        setTimeout(() => {
             handleClose(false);
        }, 1000)
    }

    return(
        <div className={` relative top-0  bg-[#ffffff] z-[100] w-[110vw] h-[100vh]`}>
            <button type={"button"} onClick={() =>  handleClose(false)} >
                <Image className={"absolute top-5 left-[20px]"} src={"/logo.svg"} width={120} height={45} alt={"close"}/>
            <Image className={"absolute top-3 right-[60px]"} src={"/images/close.svg"} width={45} height={45} alt={"close"}/>
            </button>
            <nav className={"p-[50px] pt-[80px]"}>
                <ul className="text-[14px] gilroy uppercase  text-[#000000] gap-[40px] font-thin flex flex-col ">
                    <a href="#about">
                        <li onClick={close}>О ФОНДЕ</li>
                    </a>
                    <a href="#children">
                        <li onClick={close}>дети с заболеваниями</li>
                    </a>
                    <a href="#donate">
                        <li onClick={close}>пожертвовать</li>
                    </a>
                    <a href="#about">
                        <li onClick={close}>о заболеваниях</li>
                    </a>
                    <a href="#donate">
                        <li onClick={close}>контакты</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}