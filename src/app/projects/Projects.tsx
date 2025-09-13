"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getScaleFactor } from "../../../public/utils/utils";
import { Code, SquareArrowOutUpRight } from "lucide-react";
import TiETeCapa from ".././../../public/assets/TiETeCapa.png";


export default function Projects() {
    const router = useRouter();
    const containerRef = useRef(null);
    const cardWidth = 500;
    const gap = 24;
    const [scale, setScale] = useState(1); // Você pode ajustar esse valor dinamicamente
    useEffect(() => {
        const updateScale = () => setScale(getScaleFactor());
        updateScale();

        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);
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
        <div className="bg-[#1E1E1E] " >


            <div className="relative w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 origin-top-left" style={{ transform: `scale(${scale})`, width: `${100 / scale}%`, height: `${100 / scale}%` }}>
                    <div className="flex flex-col w-full h-full">
                        <div className="flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
                            <span className="ml-5 h-auto text-3xl text-[#396291] flex items-center gap-4 w-full">
                                <span className="w-[calc(100%-64px)] border-b-8 text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)]">
                                    PROJECTS
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row xl:gap-[60px] h-full overflow-hidden items-center p-10 ml-[50]">
                <div className="h-full xl:max-w-[50%] overflow-hidden">
                    <Image alt="dev" src={TiETeCapa} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
                </div>
            </div>

        </div>
    );
}