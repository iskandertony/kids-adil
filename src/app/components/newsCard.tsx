import Image from "next/image"
export function NewsCard  (){
    return (
        <div className={"flex flex-col w-[95%] mx-auto md:mx-0 md:min-h-[475px] shadow-xl gilroy bg-white leading-2 md:w-[325px] md:min-w-[325px] p-[10px] rounded-[12px]"}>
                <Image src={"/images/new.svg"} className={"md:w-[305px] w-full h-[196]"} width={305} height={196} alt={"new"} />
                <div className="p-4">
                    <p className="text-gray-500 my-1 text-sm">11 Ноября 2024</p>
                    <h3 className="text-lg font-regular leading-5 text-gray-900">Образование И Забота: Госпитальная Педагогика В
                        Кыргызстане</h3>
                    <p className=" text-[#3E3232] text-sm mt-2">
                        «Образование И Забота: Госпитальная Педагогика В Кыргызстане» 13 Декабря 2024, Г. Бишкек,
                        Кыргызстан.
                        Организатор: Фонд «Помогать Легко». Цель Форума: Содействие В Создании Правового Регулирования.
                    </p>
                </div>
        </div>
    )
}