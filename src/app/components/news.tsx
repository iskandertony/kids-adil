import Titling from "@/app/components/title";
import {news} from "../../../local.db";
import {NewsCard} from "@/app/components/newsCard";
import Image from "next/image";

interface New {
    id : number,
    title : string,
    date : string,
    description : string,
    image : string
}

export function News(){
    return(
        <section id={"news"} className={"xl:container md:max-w-[100%] mb-[100px] mt-[150px] md:mt-[150px] flex flex-col "}>
            <Image height={150} width={150} className={"absolute w-[70px] h-[70px] md:w-[150px] md:h-[150px] left-[8%] xl:left-[400px]"} src={"/images/banner-cyrcle.svg"} alt={"cyrcle"}/>
            <Image height={300} width={300} className={"absolute hidden xl:block right-[100px]"} src={"/images/img.png"} alt={"circle"}/>
            <div className={"ml-[80px]"}>
                <Titling  title={"Новости"} color={"#397BE8"}/>
            </div>
            <section className={"xl:container md:h-[500px] overflow-scroll"}>
                <div className={"flex flex-col md:flex-row gap-[20px]"}>
                    {
                        news.map((item: New) => (<NewsCard key={item.id} news={item}/>))
                    }
                </div>
            </section>
        </section>
    )
}