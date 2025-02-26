import Image from "next/image"
import {JSX} from "react";

interface ChildCard {
    id: number,
    image: string,
    name: string,
    age: string,
    need: string,
    diagnosis: string,
    necessary:number,
    collected: number,
    left: number
}

export function Card({props} :{props : ChildCard}): JSX.Element{
    return (
        <div className={"flex relative flex-col bg-white drop-shadow-xl  shadow-slate-300  items-center mx-auto w-[360px] md:min-w-[440px] pb-[20px] gilroy md:h-[745px]  rounded-[25px]"}>
            <Image className={"rounded-[20px] w-full  object-cover h-[400px] xl:h-[400px] xl:w-[440px]"} height={400} width={440} src={props.image} alt={props.name}/>
            <div className={"flex flex-col xl:w-full xl:px-[20px]  md:w-auto w-[360px] justify-between mt-[20px] md:pb-[25px] gap-[20px]  px-[10px] "}>
            <div >
                <h1 className={"font-[800] leading-[20px] text-[24px] md:text-[26px]"}>{props.name} , {props.age}</h1>
            </div>
            <p className={" font-[400] text-[18px]"}>{props.need}</p>
            <p className="w-[90%]">Диагноз: <b className={"inline font-[700] text-[16px] md:text-[18px]"}>{props.diagnosis}</b></p>
            <div className={"flex font-[400] text-[16px] md:text-[18px]  flex-row md:gap-1"}>
                <p className={"  w-[33%]"}>Необходимо:<br/>
                    <span className={"font-semibold"}>{props.necessary}</span></p>
                <p className={" w-[33%]"}>Собрано:<br/>
                    <span className={"font-semibold"}>{props.collected}</span></p>
                <p className={" w-[33%]"}>Осталось:<br/>
                    <span className={"font-semibold"}>{props.left}</span></p>
            </div>
                <a href={"#donate"} >
            <button className="md:w-[400px] shadow-l shadow-[#F66E7B] bg-[#F66E7B] rounded-[50px] flex items-center gap-3 absolute bottom-5 font-bold justify-center h-[55px]" type={"button"}>
                <Image width={30} height={30} src={"/images/heart.svg"} alt={"heart"}/>
                <span className={"text-white text-[24px]"}>хочу помочь</span>
            </button>
                </a>
            </div>
        </div>
    );
}