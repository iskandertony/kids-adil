import Image from "next/image";
import Titling from "@/app/components/title";
export function About() {
    return (
        <section id={"about"} className={"flex flex-col justify-center items-center py-[100px] xl:container"}>
           <Titling color={"#DD91BC"} title={"O Фонде"}/>
            <div className={"relative rounded-[35px] w-full h-[1000px] lg:h-[650px] pt-[30px] text-white bg-[#67519F] xl:h-[445px] xl:w-[1360px] flex-col flex lg:flex-row  "}>
                <div className="flex flex-col py-[20px] lg:py-[50px]  px-7 w-[100%] lg:w-[67%] gap-y-7">
                    <h2 className={"text-[35px] md:text-[45px] font-[500] gilroy"}>ОСНОВНАЯ ЦЕЛЬ ПРОЕКТА ФОНДА</h2>
                    <p className={"text-[16px] md:text-[20px] w-[97%] font-[300] gilroy"}>Основная цель фонда — поддержка детей, страдающих от серьезных заболеваний, и помощь их семьям в самых сложных ситуациях. Мы понимаем, что болезнь может стать не только физическим испытанием, но и эмоциональной и финансовой нагрузкой для всей семьи. Фонд «Дети Адиля» создан для того, чтобы снять эту нагрузку, помогать детям, которые нуждаются в медицинской помощи, и делать их будущее светлее.</p>
                    <div className={"flex flex-col  md:flex-row gap-y-5 md:gap-x-10"}>
                        <div className={ "w-[125px] md:min-w-[125px] h-[44px] rounded-[50px] border-[1px]  border-white flex items-center justify-center text-white bg-[#transtperent]"}>Про нас</div>
                        <p className="text-[16px] md:text-[18px]  font-[300] w-[80%] gilroy" >Благотворительный фонд «Дети Адиля» был основан в честь моего отца, Адиля, который всегда считал, что каждый ребенок — это наш брат и сестра.</p>
                    </div>
                </div>
                <div className={"lg:w-[30%] relative flex  items-center justify-center"}>
                    <Image alt={"children boy"} src="/images/about-children.svg" width={1000} height={1000} className={"w-[100vw] md:h-[80%] z-10 md:-mb-[100px] lg:mb-[0] md:w-[100vw] lg:w-[535px]  h-[480px] lg:scale-125"}/>
                    <Image alt={"children"} src="/images/about-smile.svg" width={80} height={80} className={"absolute hidden md:block top-0 -left-5"}/>
                    <Image alt={"children"} src="/images/about-stars.svg" width={120} height={120} className={"absolute md:bottom-0 left-0 z-0 bottom-[35vh] md:-left-[100px]"}/>
                </div>
                <Image alt={"about-circle "} src="/images/about-circle.svg" width={132} height={128} className={"absolute top-[-70px] left-[-20px]"}/>
            </div>
            <div className={"flex flex-col relative md:pt-0 p-4  pt-[5vh]  min-h-[300px] w-[100vw] lg:mt-[50px] mt-[200px] xl:w-[1360px] py-[50px]  gap-y-[50px]"}>
                <p className={"text-[18px] md:w-[700px] font-[300] gilroy"}> Фонд «Дети Адиля» — это не просто организация, это наша миссия, вдохновленная философией моего отца. Мы верим, что, объединяя усилия, мы можем создать мир, где каждый ребенок, независимо от своей болезни, получит шанс на нормальную жизнь. Мы готовы помочь каждому ребенку, который в этом нуждается, и дать им возможность расти здоровыми и счастливыми.</p>
                <p className={"text-[18px] ml-[100px] md:ml-[300px] w-auto lg:w-[700px] font-[300] gilroy"}>Миссия нашего фонда — помогать детям, которые борются с тяжелыми заболеваниями, дарить им надежду и шанс на выздоровление. Мы стремимся обеспечивать доступ к качественному лечению, поддерживать семьи и создавать условия для того, чтобы дети могли расти здоровыми и счастливыми, несмотря на тяжелые испытания, с которыми они сталкиваются.</p>
                <Image alt={"help mark"} src={"/images/about-mark.svg"} width={152} height={158} className={"absolute lg:top-[200px] xl:top-[25vh] hidden md:right-0 lg:block"}/>
                <Image alt={"about item"} src={"/images/about-item.svg"} width={252} height={158} className={"absolute md:top-[45%] top-[45vh] hidden md:block right-[-25vw] md:bottom-0 md:-left-[100px]"}/>
            </div>
        </section>
    )
}