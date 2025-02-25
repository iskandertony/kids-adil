import Image from "next/image"
interface New {
    id : number,
    title : string,
    date : string,
    description : string,
    image : string
}
export function NewsCard  ({news : {title, date, description, image}} : {news : New}){
    return (
        <div className={"flex flex-col w-[95%] mx-auto md:mx-0 md:min-h-[475px] md:max-h-[475px] shadow-xl gilroy bg-white leading-2 md:w-[325px] md:min-w-[325px] p-[10px] rounded-[12px]"}>
                <Image src={image} className={"md:w-[305px]  rounded-xl object-cover lg:rounded-none w-full h-[196px]"} width={305} height={196} alt={"new"} />
                <div className="p-4">
                    <p className="text-gray-500 my-1 text-sm">{date}</p>
                    <h3 className="text-lg font-regular leading-5 text-gray-900">{title}</h3>
                    <p className=" text-[#3E3232] text-sm mt-2">{description}</p>
                </div>
        </div>
    )
}