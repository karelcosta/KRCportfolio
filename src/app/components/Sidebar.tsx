"use client";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import IconImage from "../favicon.ico";

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
    <div className="  w-screen bg-[#010409] h-[80px] fixed left-0 top-0 flex flex-row justify-between px-10 shadow-lg text-white z-50">
      {/* <div className="flex">
      </div> */}
        <h1 className="text-7xl font-[family-name:var(--font-jersey-10)] my-auto"> Karel </h1>
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
