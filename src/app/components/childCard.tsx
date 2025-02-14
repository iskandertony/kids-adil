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
    left: number,
}
export function Card({props} :{props : ChildCard}): JSX.Element{
    return (
        <div className={"flex flex-col bg-white drop-shadow-xl shadow-slate-300  items-center min-w-[440px] gilroy h-[725px] rounded-[25px]"}>
            <Image className={"rounded-[20px]"} height={400} width={440} src={props.image} alt={props.name}/>
            <div className={"flex flex-col justify-between mt-[20px] gap-3 px-5"}>
            <div className={""}>
                <h1 className={"font-[800] text-[26px]"}>{props.name} , {props.age}</h1>
            </div>
            <p className={" font-[400] text-[18px]"}>{props.need}</p>
            <p>Диагноз: <span className={"font-[700] text-[18px]"}>{props.diagnosis}</span></p>
            <div className={"flex font-[400] text-[18px] w-full  flex-row gap-1"}>
                <p className={"  w-[33%]"}>Необходимо:<br/>
                    <span className={"font-semibold"}>{props.necessary}</span></p>
                <p className={" w-[33%]"}>Собрано:<br/>
                    <span className={"font-semibold"}>{props.collected}</span></p>
                <p className={" w-[33%]"}>Осталось:<br/>
                    <span className={"font-semibold"}>{props.left}</span></p>
            </div>
            <button className="w-[400px] shadow-l shadow-[#F66E7B] bg-[#F66E7B] rounded-[50px] flex items-center gap-3 font-bold justify-center h-[55px]" type={"button"}>
                <Image width={30} height={30} src={"/images/heart.svg"} alt={"heart"}/>
                <span className={"text-white text-[24px]"}>хочу помочь</span>
            </button>
            </div>
        </div>
    );
}