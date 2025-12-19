"use client";
import { useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
// Code

export default function Contact() {

    // const [scale] = useState(1); // Você pode ajustar esse valor dinamicamente
    const handleButtonLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/karel-costa-350345337/", "_blank", "noopener,noreferrer");
    };
    const handleButtonGitHubClick = () => {
        window.open("https://github.com/karelcosta/", "_blank", "noopener,noreferrer");
    };
    return (
        <div className="bg-[#0f0f0f] min-h-screen">

            {/* <div className="relative w-full min-h-[80px] overflow-hidden">
                <div
                    className="absolute top-0 left-0 origin-top-left"
                    style={{
                        transform: `scale(${scale})`,
                        width: `${100 / scale}%`,
                        height: `${100 / scale}%`,
                    }}
                >
                    <div className="flex flex-col w-full h-[80px] ">
                        <div className="relative flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b ">
                            <span className="ml-5 h-auto text-3xl text-[#FFFFFF] flex items-center gap-4 w-full z-10">
                                <span className="w-[calc(100%-64px)] border-b-8 border-[#e51c23] text-[#FFFFFF] text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)] font-bold">
                                    Contato
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
            <h1 className="text-white px-6 py-20 flex flex-col items-center text-6xl font-[family-name:var(--font-jersey-10)]  mb-1">Redes</h1>

            <div className="flex flex-col items-center gap-7">

                {/* linkedin */}
                <div className="max-w-5xl w-full text-white">
                    <div className="flex flex-col gap-5">
                        
                        <button onClick={handleButtonLinkedinClick} className="transform active:scale-90 flex items-center justify-center gap-4 w-full px-4 py-3 w-64 border-4 border-[#e51c23] text-[#FFFFFF] rounded-xl hover:border-[#4a148c] hover:bg-[#e51c23] hover:text-white transition text-xl font-bold">
                            LinkedIn  <SquareArrowOutUpRight className="w-6 h-6" />
                        </button>
                        <button onClick={handleButtonGitHubClick} className="transform active:scale-90 flex items-center justify-center gap-4 w-full px-4 py-3 w-64 border-4 border-[#e51c23] text-[#FFFFFF] rounded-xl hover:border-[#4a148c] hover:bg-[#e51c23] hover:text-white transition text-xl font-bold">
                            GitHub  <SquareArrowOutUpRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>


                {/* github */}
                {/* <div className="max-w-5xl w-full text-white">
                    <div className="bg-[#161616] p-8 rounded-xl border border-red-600 shadow-lg transition hover:scale-[1.02]">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">Game Developer</h2>
                        <p className="leading-relaxed">
                            Tenho experiência no desenvolvimento de jogos 2D em C# utilizando Unity, focando em criação de mecânicas,
                            cenários, sistemas de combate e usabilidade. Sempre busco unir criatividade com boas práticas de programação
                            para criar experiências imersivas e fluidas.
                        </p>
                    </div>
                </div> */}

            </div>


        </div>
    );
}