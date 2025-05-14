'use client';

import { useState } from 'react';
import Image from "next/image"
import Titling from "@/app/components/title";

export function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const  handleSubmit = async (e: any) => {
        e.preventDefault();
        if(name !== '' || phone !== '') {
            const text = `New message from ${name ? name : 'anonym'}:\n\nИмя: ${name}\nНомер Телефона: ${phone}\nКоммент:\n${comment}`;
            try {
                const response = await fetch(`https://api.telegram.org/bot8070685984:AAE04KWEasbRAepugqVPhI_a84qFOhPodwQ/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: '8068778265',
                        text: text
                    })
                });
                if (response.ok) {
                    alert('Message sent!');
                } else {
                    alert('Failed to send message.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to send message.');
            }
        } else alert ("Sorry write something")
    };
    return (
        <section style={{backgroundImage: `url(/images/form-bg.svg)`}} className={"xl:bg-contain bg-cover Group 2 (3).png bg-center xl:-pt-[100px] bg-no-repeat w-full"}>
    <section id={"donate"} className={"flex flex-col xl:container p-[20px] relative md:my-[100px]  "}>
            <Titling title={"Пожертовать"} color={"#ee76a9"} />
        <div className=" mx-auto  bg-cream  grid grid-cols-1 grid-flow-dense lg:grid-cols-2 xl:gap-[100px] gap-8">
            <Image height={150} width={150} className={"absolute lg:w-[150px] lg:h-[150px] right-[90%] w-[50px] h-[50px]  top-5 lg:top-0 lg:right-[300px]"} src={"/images/form-line-circle.svg"} alt={"alt circle"} />
            <Image height={450} width={400} className={"absolute hidden xl:block z-[-1] top-[540px] left-[300px]"} src={"/images/bsnner-line2.svg"} alt={"alt circle"} />
            <Image className={"absolute top-[530px] left-[-50px] hidden xl:block z-[-1]"} src={"/images/form-blue.svg"} alt={"banner-cicrle"} height={200} width={200} />
            <div className={"order-2 md:order-1"}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-red-500 mb-1">Ваше имя</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-[80%] md:w-full p-3 pl-10 border rounded-full shadow-sm focus:ring-red-500 focus:border-red-500"
                                    placeholder="ФИО"
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
                                    className="w-[80%] md:w-full p-3 pl-10 border rounded-full shadow-sm focus:ring-red-500 focus:border-red-500"
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
                            className="w-[95%] mx-auto md:mx-0 h-[190px] md:w-full z-10 xl:h-[190px] bg-white p-3 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
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
            <div className={"order-1 md:order-2"}>
                <h3 className="text-[35px] md:text-[45px] gilroy w-[90%] font-medium text-[#397BE8]">КАК ИСПОЛЬЗУЮТСЯ СРЕДСТВА ФОНДА?</h3>
                <p className="text-[#397BE8] font-medium text-[20px] mt-4">
                    Мы придерживаемся принципов открытости, честности и прозрачности в работе фонда. Мы уверены, что только с таким подходом можно добиться доверия и уважения со стороны тех, кому мы помогаем, а также со стороны наших партнеров и доноров.
                      </p>
                <p className="text-[#397BE8] gilroy font-medium text-[20px] mt-8">
                    Мы приглашаем каждого человека стать частью нашего фонда. Вы можете помочь разными способами
                <a href={"/about"} className=' '><button className={ "w-[225px] md:min-w-[125px] h-[44px] rounded-[50px] border-[5px]  border-[#397BE8] mt-[30px] flex items-center justify-center text-[#397BE8] bg-[#transtperent]"}>Подробнее</button></a>

                     </p>
            </div>
        </div>
    </section>
        </section>
    )
}
