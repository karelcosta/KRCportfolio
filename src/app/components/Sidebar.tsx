"use client";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import IconImage from "../favicon.ico";

export default function Sidebar() {
  // const router = useRouter();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  //131313 - cinza mais escuro
  //1E1E1E - cinza claro


  return (
    <div className="  w-screen bg-[#1E1E1E] h-[80px] fixed left-0 top-0 flex flex-row justify-between   p-6 shadow-lg text-white z-50">
      <div className="flex flex-row" >
        <div className="h-full hidden  xl:block xl:max-w-[100%] overflow-hidden">
          <Image alt="dev" src={IconImage} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
        </div>
        <h1 className="text-3xl font-bold mb-10 block xl:hidden"> Karel </h1>
        <h1 className="text-3xl font-bold mb-10 hidden xl:block"> arel</h1>
      </div>
      <div className="flex gap-6 ">
        <button onClick={() => scrollTo("home")}>Início</button>
        {/* <button onClick={() => scrollTo("about")}>Sobre</button> */}
        <button onClick={() => scrollTo("projects")}>Projetos</button>
        {/* <button onClick={() => scrollTo("projects")}>Experiência</button> */}
        {/* <button onClick={() => scrollTo("projects")}>Formação</button> */}
        {/* <button onClick={() => scrollTo("contact")}>Redes</button> */}
      </div>
    </div>
  );
}
