import Image from "next/image"
export function Footer(){
    return(
        <footer className={"p-[50px]  rounded-xl  bg-[#397BE8]"}>
            <div className={"relative grid text-white grid-cols-3"}>
                <div className={"flex flex-col  gap-[20px]  "}>
                    <Image alt={"logo"} src={"/logo.svg"} width={200} height={50}/>
                    <div className={"flex gilroy gap-[10px] flex-col"}>
                        <span>Адрес:</span>
                        <p>Логвиненко 55, Бишкек, Кыргызстан.
                            Общественный Фонд “Помогать легко”</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <span>Телефон:</span>
                        <p>996556400400</p>
                    </div>
                    <div className={"flex flex-col"}>
                        <span>Email</span>
                        <p>pomogatlegkokg@gmail.com</p>
                    </div>
                </div>

                <div className={"pl-[100px]"}>
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
                            <a href="#about_diseases">
                                <li>о заболеваниях</li>
                            </a>
                            <a href="#contants">
                                <li>контакты</li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <h3 className={"gilroy text-gray-400 mb-[20px] uppercase text-[20px]"}>Полезная информация</h3>
                        <ul className="text-[14px] flex flex-col gilroy uppercase  gap-[20px] font-thin  ">
                            <a href="#about">
                                <li>FAQ</li>
                            </a>
                            <a href="#donate">
                                <li>Оплата</li>
                            </a>
                            <a href="#contact">
                                <li>Наши контакты</li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <Image src={"/images/img.png"} height={300} width={300} className={"absolute bottom-0 right-0"}
                       alt={"drowble"}/>
            </div>

        </footer>
    )
}