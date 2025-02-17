import Image from "next/image";
import Titling from "@/app/components/title";
export function About() {
    return (
        <section id={"about"} className={"flex flex-col justify-center items-center py-[100px] xl:container"}>
           <Titling color={"#DD91BC"} title={"O Фонде"}/>
            <div className={"relative rounded-[35px] w-full h-[1000px]  pt-[30px] text-white bg-[#67519F] xl:h-[445px] xl:w-[1360px] flex-col flex md:flex-row  "}>
                <div className="flex flex-col py-[20px] md:py-[50px]  px-7 md:w-[67%] gap-y-7">
                    <h2 className={"text-[35px] md:text-[45px] font-[500] gilroy"}>ОСНОВНАЯ ЦЕЛЬ ПРОЕКТА ФОНДА</h2>
                    <p className={"text-[16px] md:text-[20px] w-[97%] font-[300] gilroy"}>Мы — благотворительный фонд, который стремится создавать светлое будущее для детей, находящихся в трудных жизненных обстоятельствах. Наша миссия — предоставлять поддержку детям и их семьям, помогать развивать таланты, создавать условия для роста и гармоничного развития.</p>
                    <div className={"flex flex-col  md:flex-row gap-y-5 md:gap-x-10"}>
                        <div className={ "w-[125px] md:min-w-[125px] h-[44px] rounded-[50px] border-[1px]  border-white flex items-center justify-center text-white bg-[#transtperent]"}>Про нас</div>
                        <p className="text-[16px] md:text-[18px]  font-[300] w-[80%] gilroy" >Каждый вклад, независимо от его размера, помогает нам приблизиться к нашей главной цели — сделать мир для детей лучше. Присоединяйтесь к нашей миссии и вместе с нами дарите детям свет надежды и возможности для будущего.</p>
                    </div>
                </div>
                <div className={"md:w-[30%] relative flex  items-center justify-center"}>
                    <Image alt={"children boy"} src="/images/about-children.svg" width={1000} height={1000} className={"w-[100vw] z-10 md:w-[535px]  h-[480px] md:scale-125"}/>
                    <Image alt={"children"} src="/images/about-smile.svg" width={80} height={80} className={"absolute hidden md:block top-0 -left-5"}/>
                    <Image alt={"children"} src="/images/about-stars.svg" width={120} height={120} className={"absolute md:bottom-0 left-0 z-0 bottom-[35vh] md:-left-[100px]"}/>

                </div>
                <Image alt={"about-circle "} src="/images/about-circle.svg" width={132} height={128} className={"absolute top-[-70px] left-[-20px]"}/>

            </div>
            <div className={"flex flex-col relative md:pt-0 p-4  pt-[5vh]  min-h-[300px] w-[100vw] lg:mt-[50px] mt-[200px] xl:w-[1360px] py-[50px]  gap-y-[50px]"}>
                <p className={"text-[18px] md:w-[700px] font-[300] gilroy"}>Мы — благотворительный фонд, который стремится создавать светлое будущее для детей, находящихся в трудных жизненных обстоятельствах. </p>
                <p className={"text-[18px] ml-[100px] md:ml-[300px] md:w-[700px] font-[300] gilroy"}>Наша миссия — предоставлять поддержку детям и их семьям, помогать развивать таланты, создавать условия для роста и гармоничного развития.</p>
                <Image alt={"help mark"} src={"/images/about-mark.svg"} width={152} height={158} className={"absolute md:top-10 top-[25vh] hidden md:right-0 lg:block"}/>
                <Image alt={"about item"} src={"/images/about-item.svg"} width={252} height={158} className={"absolute md:top-[45%] top-[45vh] hidden md:block right-[-25vw] md:bottom-0 md:-left-[100px]"}/>
            </div>
        </section>
    )
}