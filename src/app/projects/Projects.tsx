"use client";
import { useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
import { getScaleFactor } from "../../../public/utils/utils";
// import { Code, SquareArrowOutUpRight } from "lucide-react";
// import TiETeCapa from "/assets/TiETeCapa.png";
import { DialogData } from './utilsClasses';
// import ProjectCard from "./components/project-card";
import ProjectCardnew from "./components/project-cardnew";


export default function Projects() {
    // const router = useRouter();
    const containerRef = useRef(null);
    // const cardWidth = 500;
    // const gap = 24;
    const [scale, setScale] = useState(1); // Você pode ajustar esse valor dinamicamente
    useEffect(() => {
        const updateScale = () => setScale(getScaleFactor());
        updateScale();

        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);
    // const scroll = (direction: string) => {
    //     if (containerRef.current) {
    //         //@ts-expect-error null inexistent
    //         containerRef.current.scrollBy({
    //             left: direction === 'right' ? cardWidth + gap : -(cardWidth + gap),
    //             behavior: 'smooth'
    //         });
    //     }
    // };





// 
    const tiETeDialogData = [
        new DialogData("/assets/game.png", "/assets/img1.png", "/assets/img2.png", "/videos/TiETe_Game.MP4",
            "O objetivo principal do jogador em Ti&Tê é proteger a Tartaruga Limpa da aniquilação. A jogabilidade se desenrola em um mapa bipartido — a Zona Limpa e a Zona Suja — onde a Tartaruga Limpa é o alvo constante dos ataques inimigos.", "O ciclo de jogo é baseado em gerenciamento de recursos e defesa posicional. O jogador deve coletar recursos Algas e Pérolas, que se convertem em energia. Esta energia é a moeda para invocar os próprios combatentes.",
            "Todas as unidades aliadas e inimigas são geradas próximas às suas respectivas tartarugas. O posicionamento estratégico das unidades do jogador é crucial para criar barreiras e contra-ataques eficazes contra as levas de inimigos gerados pela Tartaruga Suja."
            , "ti&te"
        ),
        new DialogData("/assets/turtleAltarComplet.png", "/assets/turtleAltar.png", "/assets/turtleAltarEnemy.png", "/videos/TiETe_turtleMovement.MP4",
            "O jogo gira em torno de duas tartarugas. A Tartaruga Limpa é o alvo que o jogador deve proteger. É o ponto de vitória/derrota.",
            "A Tartaruga Suja é a geradora de inimigos. Ela é imortal, garantindo que o objetivo do jogador seja unicamente defender, e não atacar.",
            "Ambas as tartarugas determinam os pontos de surgimento (spawn) das suas respectivas tropas no mapa.",
            "Tartarugas"
        ),
        new DialogData("/assets/stincat.png", "/assets/catfish.png", "/assets/cameowrao.png", "/videos/TiETe_CameowraoExplosion.MP4",
            "O jogador invoca três tipos de soldados, que são fusões de peixes e gatos. Eles têm aparência limpa.",
            "O Catfish (Melee) é a unidade corpo a corpo, usada para defender e absorver dano na linha de frente.",
            "O Stincat (Ranged) é a unidade de ataque à distância, para suporte de fogo. O Cameowrão (Kamikaze) é a unidade de sacrifício com ataque explosivo.",
            "Characters"
        ),
        new DialogData("/assets/stincatEnemy.png", "/assets/catfishEnemy.png", "/assets/cameowraoEnemy.png", "/videos/TiETe_Tentacle.MP4",
            "Os inimigos são versões corrompidas dos soldados do jogador (fusões de peixes e gatos), com aparência suja. Eles tentam matar a Tartaruga Limpa.",
            "Eles também se dividem em três classes: Melee, Ranged e Kamikaze.",
            "Além dos soldados, Tentáculos surgem no cenário como obstáculos ou pontos de spawn inimigos adicionais.",
            "Inimigos"
        ),
    ]

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
            <div className="relative w-full min-h-[80px] overflow-hidden">
                <div
                    className="absolute top-0 left-0 origin-top-left"
                    style={{
                        transform: `scale(${scale})`,
                        width: `${100 / scale}%`,
                        height: `${100 / scale}%`,
                    }}
                >
                    <div className="flex flex-col w-full">
                        <div className="relative flex justify-between mt-0 mb-0 xl:h-22  w-full bg-gradient-to-b from-[#CCCCCC] to-[#1E1E1E]">
                            {/* <div className="absolute bottom-0 left-0 w-full h-[80px] bg-[#1E1E1E] [clip-path:polygon(0_100%,100%_0,100%_100%)]"></div> */}
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
            </div>
            <div className="relative w-full min-h-[80px] overflow-hidden">
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
                                <span className="w-[calc(100%-64px)] border-b-8 text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)] font-bold">
                                    PROJECTS
                                </span>
                            </span>
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


            {/* <div className="flex flex-col xl:flex-row xl:gap-[60px] h-full overflow-hidden items-center p-10 ml-[50]">
                <div className="h-full xl:max-w-[50%] overflow-hidden">
                    <Image alt="dev" src={TiETeCapa} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
                </div>
            </div> */}
            <div className=" w-full h-full flex xl:flex-row flex-col items-center justify-around gap-6 p-10 xl:overflow-x-auto overflow-y-auto overflow-x-hidden xl:overflow-y-hidden scroll-smooth snap-x snap-mandatory" ref={containerRef}>
                <ProjectCardnew title="Ti&Tê" description="Ti&Tê é um RTS de ritmo acelerado que se passa no fundo do mar, dividido entre a pureza da vida marinha e a ameaça da poluição. O jogador deve defender a Tartaruga Limpa de ondas de inimigos invocados pela imortal Tartaruga Suja, gerenciando recursos para convocar suas próprias tropas e garantir a sobrevivência até o fim da maré inimiga." imageUrl="/assets/TiETeCapa.png" cardImageUrl="/assets/TiETeCapa.png" dialogData={tiETeDialogData} />
                {/* <ProjectCard title="Bot Vinnik" description="From Deep Green Games studio, Engage with BOT.vinnik, a witty Soviet AI chess instructor! His sharp humor and rigorous challenges will mold you into a pro." imageUrl="./assets/BotVinnikCard.png" cardImageUrl="./assets/BotVinnikCardImage.png" dialogData={botVinnikDialogData} />
                <ProjectCard title="Wonder Wallace" description="Wonder Wallace is a fast-paced fishing game where you play as Wallace, a bear on a mission to catch lunch. Tasked with reeling in three delicious fish, Wallace must race against the clock to complete his goal." imageUrl="./assets/WonderWallaceCard.png" cardImageUrl="./assets/WonderWallaceKitchen.png" dialogData={wonderWallaceDialogData} /> */}
                {/* <ProjectCard title="Teste" description="teste" imageUrl="../assets/placeHolder.jpg" cardImageUrl="../assets/AfonseVsBoss.png" dialogData={afonseDialogData} /> */}
            </div>

        </div>
    );
}



