import Image from "next/image";
import Titling from "@/app/components/title";
export function About() {
    return (
        <section id={"about"} className={"flex h-[750px]  flex-col justify-center items-center py-[100px] container"}>
           <Titling color={"#DD91BC"} title={"O Фонде"}/>
            <div className={"relative rounded-[35px] text-white bg-[#67519F] xl:h-[445px] xl:w-[1360px] flex flex-row  "}>
                <div className="flex flex-col py-[50px] px-10 w-[70%] gap-y-7">
                    <h2 className={"text-[45px] font-[500] gilroy"}>ОСНОВНАЯ ЦЕЛЬ ПРОЕКТА ФОНДА</h2>
                    <p className={"text-[20px] w-[97%] font-[300] gilroy"}>Мы — благотворительный фонд, который стремится создавать светлое будущее для детей, находящихся в трудных жизненных обстоятельствах. Наша миссия — предоставлять поддержку детям и их семьям, помогать развивать таланты, создавать условия для роста и гармоничного развития.</p>
                    <div className={"flex flex-row gap-x-10"}>
                        <div className={"min-w-[125px] h-[44px] rounded-[50px] border-[1px]  border-white flex items-center justify-center text-white bg-[#transtperent]"}>Про нас</div>
                        <p className="text-[18px]  font-[300] w-[80%] gilroy" >Каждый вклад, независимо от его размера, помогает нам приблизиться к нашей главной цели — сделать мир для детей лучше. Присоединяйтесь к нашей миссии и вместе с нами дарите детям свет надежды и возможности для будущего.</p>
                    </div>
                </div>
                <div className={"w-[30%] relative flex items-center justify-center"}>
                    <Image alt={"children"} src="/images/about-children.svg" width={1000} height={1000} className={"w-[535px] h-[480px]  scale-125"}/>
                    <Image alt={"children"} src="/images/about-smile.svg" width={80} height={80} className={"absolute top-0 -left-5"}/>
                    <Image alt={"children"} src="/images/about-stars.svg" width={120} height={120} className={"absolute bottom-0 -left-[100px]"}/>

                </div>
                <Image alt={"about-circle "} src="/images/about-circle.svg" width={132} height={128} className={"absolute top-[-70px] left-[-20px]"}/>

            </div>
            <div className={"flex flex-col relative min-h-[300px] w-[1360px] py-[50px] gap-y-[50px]"}>
                <p className={"text-[18px] w-[700px] font-[300] gilroy"}>Мы — благотворительный фонд, который стремится создавать светлое будущее для детей, находящихся в трудных жизненных обстоятельствах. </p>
                <p className={"text-[18px] ml-[300px] w-[700px] font-[300] gilroy"}>Наша миссия — предоставлять поддержку детям и их семьям, помогать развивать таланты, создавать условия для роста и гармоничного развития.</p>
                <Image alt={"help mark"} src={"/images/about-mark.svg"} width={152} height={158} className={"absolute bottom-0 right-0"}/>
                <Image alt={"about item"} src={"/images/about-item.svg"} width={252} height={158} className={"absolute bottom-0 -left-[100px]"}/>
            </div>
        </section>
    )
}