"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import { getScaleFactor } from "../../../public/utils/utils";
import { Code, SquareArrowOutUpRight } from "lucide-react";
// import Sidebar from "../components/Sidebar";

import ProImage from "../../../public/assets/NewProfile.png";



export default function Home() {
  // const router = useRouter();
  const [scale, setScale] = useState(1);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateScale = () => setScale(getScaleFactor());
    updateScale();

    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // const handleButtonHireMeClick = () => {
  //   window.open("https://www.linkedin.com/in/karel-costa-350345337/", "_blank", "noopener,noreferrer");
  // };
  // const handleButtonGitHubClick = () => {
  //   window.open("https://github.com/karelcosta", "_blank", "noopener,noreferrer");
  // };
  // text-[#4a148c] roxo
  // text-[#e51c23] vermelho
  // bg-[#CCCCCC]
  // 0f0f0f - cinza mais escuro
  //1E1E1E - cinza claro
  return (
    <div className=" w-full min-h-screen bg-[#0f0f0f] text-black relative overflow-hidden">
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          transform: `scale(${scale})`,
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
        }}
      >
        <div className="flex flex-col h-full w-full mu-[30px]">
          {/* amostruario do portifolio */}
          <div className="flex flex-col xl:flex-row xl:gap-[60px] h-full overflow-hidden items-center p-10 justify-center">
            <div className="h-full xl:max-w-[50%] overflow-hidden">
              <Image alt="dev" src={ProImage} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
            </div>
            <div className="flex flex-col xl:h-[400px] h-full xl:w-[600px] w-full xl:text-lg text-4xl font-[family-name:var(--font-geist-mono)] text-justify mt-10 xl:mt-0 text-[#FFFFFF]">
              <span className="text-5xl mb-4 text-center ">Hi! I&apos;m Karel Costa</span>
              <span className="text-7xl font-[family-name:var(--font-jersey-10)] mb-6 text-center text-[#e51c23]">Game & Web developer</span>
              Desenvolvedor Full-Stack e de jogos com 2 anos de experiência, formado em Ciência da Computação.
              Atuando com Typescript/Node.js e Unity.
              Experiência prática em implementação de funcionalidades, refatoração, manutenção, criação de mecânicas e protótipos,
              com foco em soluções eficientes, código limpo, aplicação de práticas de DevOps e aprendizado contínuo.
              <div className="flex xl:gap-10 gap-4 justify-between mt-10 h-auto">
                {/* <button onClick={handleButtonGitHubClick} className="transform active:scale-90 flex items-center justify-center gap-4 w-full border-4 px-4 py-3 bg-[#e51c23] border-[#b0120a]  text-white rounded-xl hover:border-[#4a148c] hover:bg-[#b0120a] transition text-xl">
                  GitHub <Code className="w-6 h-6" />
                </button> */}
                <button onClick={() => scrollTo("projects")} className="transform active:scale-90 flex items-center justify-center gap-4 w-full border-4 px-4 py-3 bg-[#e51c23] border-[#b0120a]  text-white rounded-xl hover:border-[#4a148c] hover:bg-[#b0120a] transition text-xl">
                  Projetos <Code className="w-6 h-6" />
                </button>
                {/* <button onClick={handleButtonHireMeClick} className="transform active:scale-90 flex items-center justify-center gap-4 w-full px-4 py-3 border-4 border-[#e51c23] text-[#FFFFFF] rounded-xl hover:border-[#4a148c] hover:bg-[#e51c23] hover:text-white transition text-xl font-bold">
                  LinkedIn  <SquareArrowOutUpRight className="w-6 h-6" />
                </button> */}
                <a
                  href="/Karel_Ribeiro_Costa.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform active:scale-90 flex items-center justify-center gap-4 w-full px-4 py-3 border-4 border-[#e51c23] text-[#FFFFFF] rounded-xl hover:border-[#4a148c] hover:bg-[#e51c23] hover:text-white transition text-xl font-bold"
                >
                  Baixar CV <SquareArrowOutUpRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex">
    //   <Sidebar />
    // </div>
  );
}
