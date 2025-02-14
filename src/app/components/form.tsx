'use client';

import { useState } from 'react';
import Image from "next/image"
import Titling from "@/app/components/title";

export function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log({ name, phone, comment });
    };
    return (
        <section className={"flex flex-col container relative my-[100px] "}>
            <Titling title={"Пожертовать"} color={"#EE76A9"}/>
        <div className=" mx-auto  bg-cream  grid grid-cols-1 md:grid-cols-2 xl:gap-[100px] gap-8">
            <Image height={150} width={150} className={"absolute top-0 right-[300px]"} src={"/images/form-line-circle.svg"} alt={"alt circle"} />
            <Image height={450} width={400} className={"absolute z-[-1] top-[540px] left-[300px]"} src={"/images/bsnner-line2.svg"} alt={"alt circle"} />
            <Image className={"absolute top-[530px] left-[-50px] z-[-1]"} src={"/images/form-blue.svg"} alt={"banner-cicrle"} height={200} width={200}/>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-red-500 mb-1">Ваше имя</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 pl-10 border rounded-full shadow-sm focus:ring-red-500 focus:border-red-500"
                                    placeholder="Эркинбеков Арноо"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-red-500 mb-1">Ваш номер телефона</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full p-3 pl-10 border rounded-full shadow-sm focus:ring-red-500 focus:border-red-500"
                                    placeholder="Номер телефона"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-red-500 mb-1">
                            Ваш комментарий для конкретного ребенка или проекта.
                        </label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full z-10 xl:h-[190px] bg-white p-3 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                            placeholder="Если у вас есть дополнительные комментарии, пожалуйста, напишите их здесь..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[222px] bg-red-400 text-white py-3 rounded-full font-semibold shadow-md hover:bg-red-500 transition"
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <div>
                <h3 className="text-[45px] gilroy w-[90%] font-medium text-[#397BE8]">КАК ИСПОЛЬЗУЮТСЯ СРЕДСТВА ФОНДА?</h3>
                <p className="text-[#397BE8] font-medium text-[20px] mt-4">
                    Все средства, собранные фондом, направляются на реализацию программ помощи детям, обеспечивая их
                    реальной поддержкой в самых разных сферах.
                </p>
                <p className="text-[#397BE8] gilroy font-medium text-[20px] mt-8">
                    Мы стремимся к максимальной прозрачности в вопросе распределения средств, чтобы каждый донор был
                    уверен в том, что его вклад идет на дело, которое меняет жизни детей к лучшему.
                </p>
            </div>
        </div>
        </section>
    )
}
