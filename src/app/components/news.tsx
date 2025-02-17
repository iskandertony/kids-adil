import Titling from "@/app/components/title";
import {children} from "../../../local.db";
import {Card} from "@/app/components/childCard";
import {NewsCard} from "@/app/components/newsCard";
import Image from "next/image";

export function News(){
    return(
        <section id={"news"} className={"xl:container mb-[100px] mt-[150px] md:mt-[150px] flex flex-col "}>
            <Image height={150} width={150} className={"absolute w-[70px] h-[70px] md:w-[150px] md:h-[150px] left-[8%] xl:left-[400px]"} src={"/images/banner-cyrcle.svg"} alt={"cyrcle"}/>
            <Image height={300} width={300} className={"absolute hidden xl:block right-[100px]"} src={"/images/img.png"} alt={"circle"}/>
            <div className={"ml-[80px]"}>
                <Titling  title={"Новости"} color={"#397BE8"}/>
            </div>
            <section className={"xl:container md:h-[500px] overflow-scroll"}>
                <div className={"flex flex-col md:flex-row gap-[20px]"}>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>

                </div>
            </section>
        </section>
    )
}