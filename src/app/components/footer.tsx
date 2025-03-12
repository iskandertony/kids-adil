import Image from "next/image"
export function Footer(){
    return(
        <footer className={"md:p-[50px] p-[20px] xl:container  rounded-xl  bg-[#6499ef]"}>
            <div className={"relative grid gap-[50px] md:gap-0 text-white grid-cols-1 md:gap-y-[60px] lg:grid-cols-3 md:grid-cols-2"}>
                <div className={"flex flex-col  gap-[20px]  "}>
                    <Image alt={"logo"} src={"/logo.svg"} width={200} height={50}/>
                    <div className={"flex gilroy gap-[10px] flex-col"}>
                        <span>Адрес:</span>
                        <p>
                            Боконбаева 113 , Бишкек , Кыргызстан  Благотврительный фонд “Дети  Адиля”</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <span>Телефон:</span>
                        <p><a href={`tel:+996556400400`}>+996 995 131 365</a></p>
                    </div>
                    <div className={"flex flex-col"}>
                        <span>Email</span>
                        <p><a href="mailto:adilovnagulnura@gmail.com">adilovnagulnura@gmail.com</a></p>
                    </div>
                </div>

                <div className={"md:pl-[100px]"}>
                <nav>
                        <h3 className={"gilroy text-gray-400 mb-[20px] text-[20px]"}>СТРАНИЦЫ</h3>
                        <ul className="text-[14px] flex flex-col gilroy uppercase  gap-[20px] font-thin  ">
                            <a href="#about">
                                <li>О ФОНДЕ</li>
                            </a>
                            <a href="#children">
                                <li>дети с заболеваниями</li>
                            </a>
                            <a href="#donate">
                                <li>пожертвовать</li>
                            </a>
                            <a href="/cancer">
                                <li>о раке</li>
                            </a>
                            <a href="#donate">
                                <li>контакты</li>
                            </a>
                        </ul>
                    </nav>
                </div>
                
                <Image src={"/images/img.png"} height={300} width={300} className={"absolute w-[97px] h-[75px] lg:h-[200px] lg:w-[200px]  md:bottom-0 bottom-100 right-0"}
                       alt={"drowble"}/>
            </div>

        </footer>
    )
}