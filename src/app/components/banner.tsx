
import Image from "next/image";
export function Banner(){
    return (
        <section id={"banner"} style={{backgroundImage: "url('/images/banner-bg.svg')"}} className={"flex xl:container pb-[200px]  py-[100px] lg:h-[750px] lg:mb-[300px] xl:mb-[0] flex-col xl:flex-row"}>
            <div className={" flex flex-col justify-between lg:static relative"}>
                <Image  className={"absolute xl:static md:left-[70%]  -top-5 left-2 z-10 w-[50px] h-[50px] lg:top-[500px] md:w-[100px] md:h-[100px] md:ml-[40px]"} src="/images/banner-item.svg" height={100} width={100} alt={"banner-item"} />
                <Image className={"absolute xl:static top-[90vh] md:top-[800px] right-5 w-[100px] h-[100px] md:w-[150px] md:h-[150px] "} src="/images/stars-banner.svg" height={150} width={150} alt={"banner-item"} />
            </div>
            <div className={"flex flex-col  md:w-[56%] w-full gap-y-[60px] md:gap-0  justify-between"}>
                <div className="flex flex-col gap-y-1 md:gap-y-10">
                 <div className="rounded-3xl mx-auto relative lg:p-5 px-5 py-3 w-[306px] md:w-full lg:w-[770px] lg:h-auto h-[85px] bg-[#D0F59E] ">
                    <h1 className=" font-[300] text-[#E5659B] gilroy w-[306px] md:w-full lg:w-[703px] leading-auto lg:leading-[65px] text-[25px] lg:text-[55px]">
                        <span className="font-[600]">ПОМОГИТЕ ДЕТЯМ С</span> ЗАБОЛЕВАНИЯМИ
                    </h1>
                    <Image className="object-left md:w-[100px] w-[76px] z-10 -right-[25px] top-[120px] md:-top-[70px] md:-right-[70px] absolute" src="/images/banner-cyrcle.svg"
                           height={150} width={150} alt={"banner-item"}/>
                  </div>
                     <div className="rounded-3xl mx-auto relative p-5 w-[306px] md:w-[770px]  px-4 bg-[#DD91BC] ">
                    <h1 className="font-medium md:font-[500] text-white gilroy w-[296px] md:w-[736px] leading-auto md:leading-[55px] text-[18px] md:text-[45px]">
                        ВАШ ВКЛАД МЕНЯЕТ ИХ ЖИЗНЬ
                       </h1>
                    <Image className="object-left md:w-[360px] w-[250px] left-0  top-[80px] rotate-6  md:bottom-[0px] md:right-[-100px] md:rotate-6 absolute" src="/images/banner-line1.svg"
                           height={25} width={360} alt={"banner-item"}/>
                      </div>
                </div>
                <div className="flex flex-col p-3 w-[full] bg-white md:w-[450px] relative">

                    <Image className="object-left hidden md:block  md:top-[-100px] md:right-[60px] md:absolute" src="/images/bsnner-line2.svg"
                           height={250} width={420} alt={"banner-item"}/>
                </div>

            </div>
            <div className="xl:w-[30%] md:mt-0 mt-[50px] w-full">
                <Image className={"w-full lg:mx-auto lg:w-[700px] h-[full]  lg:h-[500px]"} src="/images/child-girl.svg" height={500} width={500} alt={"banner-item"}/>
            </div>
        </section>
    )
}