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

            {/* svg */}
            {/* <div className="relative w-full min-h-[250px] overflow-hidden">
                <div
                    className="absolute top-0 left-0 origin-top-left"
                    style={{
                        transform: `scale(${scale})`,
                        width: `${100 / scale}%`,
                        height: `${100 / scale}%`,
                    }}
                >
                    <div className="flex flex-col w-full h-full">
                        <div className="relative flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-[#CCCCCC]">
                            <span className="ml-5 h-auto text-3xl text-[#1E1E1E] flex items-center gap-4 w-full z-10">
                                <span className="w-[calc(100%-64px)] border-t-8 text-7xl xl:text-3xl xl:border-t-2 font-[family-name:var(--font-geist-mono)]">
                                    PROJECTS
                                </span>
                            </span>
                            <svg
                                className="absolute bottom-0 left-0 w-full h-16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                                preserveAspectRatio="none"
                            >
                                <path
                                    fill="#1E1E1E"
                                    fillOpacity="1"
                                    d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,122.7C672,107,768,117,864,144C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L0,320Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* separador diagonal */}
            {/* BG 96 E 64 */}
            <div className="relative w-full min-h-[250px] overflow-hidden">
                <div
                    className="absolute top-0 left-0 origin-top-left"
                    style={{
                        transform: `scale(${scale})`,
                        width: `${100 / scale}%`,
                        height: `${100 / scale}%`,
                    }}
                >
                    <div className="flex flex-col w-full h-[80px] ">
                        <div className="relative flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b from-[#CCCCCC] to-[#1E1E1E]">
                            <span className="ml-5 h-auto text-3xl text-[#FFFFFF] flex items-center gap-4 w-full z-10">
                                <span className="w-[calc(100%-64px)] border-t-8 text-7xl xl:text-3xl xl:border-t-2 font-[family-name:var(--font-geist-mono)] font-bold">
                                    PROJECTS
                                </span>
                            </span>
                            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#1E1E1E] [clip-path:polygon(0_100%,100%_0,100%_100%)]"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* gradient */}
            {/* <div className="relative w-full min-h-[250px] overflow-hidden">
                <div
                    className="absolute top-0 left-0 origin-top-left"
                    style={{
                        transform: `scale(${scale})`,
                        width: `${100 / scale}%`,
                        height: `${100 / scale}%`,
                    }}
                >
                    <div className="flex flex-col w-full h-full">
                        <div className="flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b from-[#CCCCCC] to-[#1E1E1E]">
                            <span className="ml-5 h-auto text-3xl text-[#1E1E1E] flex items-center gap-4 w-full">
                                <span className="w-[calc(100%-64px)] border-b-8 text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)]">
                                    PROJECTS
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}









            <div className="flex flex-col xl:flex-row xl:gap-[60px] h-full overflow-hidden items-center p-10 ml-[50]">
                <div className="h-full xl:max-w-[50%] overflow-hidden">
                    <Image alt="dev" src={TiETeCapa} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
                </div>
            </div>

        </div>
    );
}