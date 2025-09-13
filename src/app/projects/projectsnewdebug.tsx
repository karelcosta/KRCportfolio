"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getScaleFactor } from "../../../public/utils/utils";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "./components/project-card";
import { Code, SquareArrowOutUpRight } from "lucide-react";
import TiETeCapa from ".././../../public/assets/TiETeCapa.png";

export default function Projects() {
    const router = useRouter();
    //   const containerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef(null);
    const cardWidth = 500;
    const gap = 24;
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => setScale(getScaleFactor());
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);

        
    }, []);

    // const scroll = (direction: "left" | "right") => {
    //     if (containerRef.current) {
    //         containerRef.current.scrollBy({
    //             left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
    //             behavior: "smooth",
    //         });
    //     }
    // };
    const scroll = (direction: string) => {
        if (containerRef.current) {
            //@ts-expect-error null inexistent
            containerRef.current.scrollBy({
                left: direction === 'right' ? cardWidth + gap : -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#CCCCCC] to-[#1E1E1E]">
            <div
                className="absolute top-0 left-0 origin-top-left"
                style={{
                    transform: `scale(${scale})`,
                    width: `${100 / scale}%`,
                    height: `${100 / scale}%`,
                }}
            >
                <div className="flex flex-col w-full h-full">
                    {/* Header da seção */}
                    <div className="flex items-center justify-between h-[200px] w-full px-6 bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
                        <div
                            className="xl:h-14 xl:w-14 h-[100px] w-[100px] border-[#396291] border-4 rounded-full flex items-center justify-center hover:cursor-pointer hover:border-[#497299] transition"
                            onClick={() => router.back()}
                        >
                            <FiChevronLeft className="text-[#396291] xl:w-10 xl:h-10 w-[70px] h-[70px]" />
                        </div>
                        <h2 className="text-[#396291] text-6xl xl:text-4xl font-[family-name:var(--font-geist-mono)] tracking-wide border-b-4 border-[#396291]">
                            PROJECTS
                        </h2>
                        <div className="w-[100px] xl:w-14"></div> {/* Espaço para balancear */}
                    </div>

                    {/* Lista de projetos */}
                    <div
                        ref={containerRef}
                        className="w-full h-full flex xl:flex-row flex-col items-center justify-start gap-6 p-10 xl:overflow-x-auto overflow-y-auto overflow-x-hidden xl:overflow-y-hidden scroll-smooth snap-x snap-mandatory"
                    >
                        {/* Cards (placeholder até tu puxar os dados reais) */}
                        <ProjectCard
                            title="Meu Jogo 2D"
                            description="Projeto 2D feito em Unity, com foco em mecânicas de plataforma e experiência fluida."
                            imageUrl="/assets/TiETeCapa.png"
                            cardImageUrl="/assets/TiETeCapa.png"
                            dialogData={[]}
                        />
                        <ProjectCard
                            title="Experiência 3D"
                            description="Primeiro contato com Unity 3D, explorando movimentação e mecânicas básicas em ambiente tridimensional."
                            imageUrl="/assets/TiETeCapa.png"
                            cardImageUrl="/assets/TiETeCapa.png"
                            dialogData={[]}
                        />
                        <ProjectCard
                            title="Web Project"
                            description="Aplicação web responsiva, desenvolvida com Next.js, Tailwind e integração com backend."
                            imageUrl="/assets/TiETeCapa.png"
                            cardImageUrl="/assets/TiETeCapa.png"
                            dialogData={[]}
                        />
                    </div>

                    {/* Botões de navegação (visíveis só em telas grandes) */}
                    <button
                        onClick={() => scroll("left")}
                        className="xl:flex hidden absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-black/70 z-[100]"
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="xl:flex hidden absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-black/70 z-[100]"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
