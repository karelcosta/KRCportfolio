"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getScaleFactor } from "../../../public/utils/utils";
import { Code, SquareArrowOutUpRight } from "lucide-react";
import TiETeCapa from "/assets/TiETeCapa.png";
import { DialogData } from './utilsClasses';
import ProjectCard from "./components/project-card";


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


    const tiETeDialogData = [
        new DialogData("./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./videos/AfonseShowCase.MP4",
            "In this project I developed a state machine system to manage character and enemy behaviors, enabling smooth transitions between actions like movement, jumping, and attacking.", "For the player, the system ensured responsive gameplay, while for enemies, it allowed random, threatening actions with raycast-based navigation for more dynamic movement.",
            "The same system was applied to control the first boss, organizing its attack patterns in a way that made it both challenging and predictable, enhancing the overall gameplay experience."
            , "ti&te"
        ),
        new DialogData("./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./videos/AfonseShowCase.MP4",
            "Using a state machine, Afonse (aka the player) can freely switch between states, altering the behavior based on each one.",
            "This system has three main components: the PlayerBrain, which initializes the state machine; the StateMachine class, which is responsible for setting up the states; and the individual States, which contain their own behavior within themselves. For example, a GlideState can handle input and physics to change how the player moves in the air.",
            "State switching can occur in two ways. The first and most common happens through in-state conditions that trigger transitions. The second involves exceptions that can force a state change at any time, as long as their conditions are met."
            , "State-Machine"
        ),
        new DialogData("./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./videos/AfonseShowCase.MP4",
            "The boss has its own state machine and will switch between states, with each state representing an action. Once an action is completed, the boss transitions to another state, thus performing a different action.",
            "Unlike the player, the boss's state machine doesn't wait for input to change states. Instead, it performs its idle behavior and reacts dynamically to the player's movements.",
            "This makes the boss feel alive, as if it has its own mind, and allows the player to analyze its behavior to discover the best strategy for defeating it."
            , "Boss"
        ),
        new DialogData("./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./assets/TiETeCapa.png", "./videos/AfonseShowCase.MP4",
            "These enemies are frightening spiders that jump around unpredictably, with the sole intention of disturbing the player (Afonse). Their erratic movements create a constant sense of imminent danger.",
            "Their AI uses a state machine that determines the spider’s next move by analyzing the environment with Raycasts, allowing for precise positioning while remaining performant. It scans for potential jump locations or checks for nearby walls, and based on this analysis, the spider decides whether to jump or simply walk in the chosen direction.",
            "The spiders' state machine is simple, with only three main states — Idle, Move, and Jump — yet it effectively makes them feel alive and presents a constant threat to the player."
            , "Spider-Enemy"
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
            <div className="w-full h-full flex xl:flex-row flex-col items-center justify-around gap-6 p-10 xl:overflow-x-auto overflow-y-auto overflow-x-hidden xl:overflow-y-hidden scroll-smooth snap-x snap-mandatory" ref={containerRef}>
                <ProjectCard title="Ti&Tê" description="Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete." imageUrl="./assets/TiETeCapa.png" cardImageUrl="/assets/TiETeCapa.png" dialogData={tiETeDialogData} />
                {/* <ProjectCard title="Bot Vinnik" description="From Deep Green Games studio, Engage with BOT.vinnik, a witty Soviet AI chess instructor! His sharp humor and rigorous challenges will mold you into a pro." imageUrl="./assets/BotVinnikCard.png" cardImageUrl="./assets/BotVinnikCardImage.png" dialogData={botVinnikDialogData} />
                <ProjectCard title="Wonder Wallace" description="Wonder Wallace is a fast-paced fishing game where you play as Wallace, a bear on a mission to catch lunch. Tasked with reeling in three delicious fish, Wallace must race against the clock to complete his goal." imageUrl="./assets/WonderWallaceCard.png" cardImageUrl="./assets/WonderWallaceKitchen.png" dialogData={wonderWallaceDialogData} /> */}
                {/* <ProjectCard title="Teste" description="teste" imageUrl="../assets/placeHolder.jpg" cardImageUrl="../assets/AfonseVsBoss.png" dialogData={afonseDialogData} /> */}
            </div>

        </div>
    );
}