import Titling from "@/app/components/title";
import {children} from "../../../local.db";
import {Card} from "@/app/components/childCard";
import {NewsCard} from "@/app/components/newsCard";
import Image from "next/image";

export function News(){
    return(
        <section className={"container mb-[100px] flex flex-col "}>
            <Image height={150} width={150} className={"absolute left-[530px]"} src={"/images/banner-cyrcle.svg"} alt={"cyrcle"}/>
            <Image height={300} width={300} className={"absolute right-[100px]"} src={"/images/img.png"} alt={"cyrcle"}/>
            <Titling title={"Новости"} color={"#397BE8"}/>
            <section className={"container h-[500px] overflow-scroll"}>
                <div className={"flex gap-[20px]"}>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                </div>
            </section>
        </section>
    )
}