import {Header} from "@/app/components/header";
import {Banner} from "@/app/components/banner";
import {About} from "@/app/components/about";
import {OurChildren} from "@/app/components/OurChildren";
import {Form} from "@/app/components/form";
import {News} from "@/app/components/news";
import {Footer} from "@/app/components/footer";

export default function Home() {
  return (
      <>
          <Banner/>
          <About/>
          <OurChildren/>
          <Form/>
          <News/>
      </>

  );
}
