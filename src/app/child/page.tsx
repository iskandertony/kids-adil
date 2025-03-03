import Titling from "@/app/components/title";
import {children} from "../../../local.db";
import {Card} from "@/app/components/childCard";

export default function Child() {
    return (
        <section className={"xl:container flex flex-col"}>
            <div className={"mx-auto py-[50px] justify-center w-full"}>
            <Titling title={"Наши Дети"} color={"#E9972B"}/>
                <div className={"flex flex-wrap gap-[30px] max-w-[100%]"}>
                    {
                        children.map(item => (<Card key={item.id} props={item}/>))
                    }
                </div>
            </div>

        </section>
    );
}