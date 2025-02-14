
import Image from "next/image";
export function Banner(){
    return (
        <section id={"banner"} style={{backgroundImage: "url('/images/banner-bg.svg')"}} className={"flex container pb-[200px] py-[100px] h-[750px] flex-row"}>
            <div className={"flex flex-col w-[11%] justify-between"}>
                <Image  className={"ml-[40px]"} src="/images/banner-item.svg" height={100} width={100} alt={"banner-item"} />
                <Image src="/images/stars-banner.svg" height={150} width={150} alt={"banner-item"} />
            </div>
            <div className={"flex flex-col  w-[56%]  justify-between"}>
                <div className="flex flex-col gap-y-10">
                 <div className="rounded-3xl relative p-5 w-[770px] bg-[#D0F59E] ">
                    <h1 className=" font-[300] text-[#E5659B] gilroy w-[703px] leading-[65px] text-[55px]">
                        <span className="font-[600]">ПОМОГИТЕ ДЕТЯМ С</span> ЗАБОЛЕВАНИЯМИ
                    </h1>
                    <Image className="object-left  top-[-70px] right-[-70px] absolute" src="/images/banner-cyrcle.svg"
                           height={150} width={150} alt={"banner-item"}/>
                  </div>
                     <div className="rounded-3xl relative p-5 w-[770px]  px-4 bg-[#DD91BC] ">
                    <h1 className=" font-[500] text-white gilroy w-[736px] leading-[55px] text-[45px]">
                        ВАШ ВКЛАД МЕНЯЕТ ИХ ЖИЗНЬ
                       </h1>
                    <Image className="object-left  bottom-[-50px] right-[-100px] -rotate-6 absolute" src="/images/banner-line1.svg"
                           height={25} width={360} alt={"banner-item"}/>
                      </div>
                </div>
                <div className="flex flex-col w-[450px] relative">
                    <form  className="flex z-10 flex-col gap-3" action="">
                        <input type="text" placeholder="Сумма вашей поддержки"
                               className="p-5 rounded-3xl bg-[#F2F2F2] h-[59px] font-[300] text-[#000000] gilroy w-full "/>
                        <button
                            className="w-full  shadow-2xl shadow-[#F66E7B] bg-[#F66E7B] rounded-[50px] flex items-center gap-3 font-bold justify-center h-[55px]"
                            type={"button"}>
                            <Image src="/icons/hands.svg" width={25} height={25} alt="hands"/>
                            <span className="text-[24px] font-thin text-white">пожертвовать</span>
                        </button>
                    </form>
                    <Image className="object-left  top-[-100px] right-[60px] absolute" src="/images/bsnner-line2.svg"
                           height={250} width={420} alt={"banner-item"}/>
                </div>

            </div>
            <div className="w-[30%]">
                <Image src="/images/child-girl.svg" height={500} width={500} alt={"banner-item"}/>
            </div>
        </section>
    )
}