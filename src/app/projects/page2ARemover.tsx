'use client'
import { useEffect, useState, useRef } from 'react';
import { getScaleFactor } from '../../../public/utils/utils';
import ProjectCard from "./components/project-card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { DialogData } from './utilsClasses';


export default function Projects() {
    const router = useRouter();
    const containerRef = useRef(null);
    const cardWidth = 500;
    const gap = 24;
    const afonseDialogData = [
        new DialogData("./assets/AfonseLab.png", "./assets/AfonseScreenJump.png", "./assets/Afonse.png", "./videos/AfonseShowCase.MP4",
            "In this project I developed a state machine system to manage character and enemy behaviors, enabling smooth transitions between actions like movement, jumping, and attacking.", "For the player, the system ensured responsive gameplay, while for enemies, it allowed random, threatening actions with raycast-based navigation for more dynamic movement.",
            "The same system was applied to control the first boss, organizing its attack patterns in a way that made it both challenging and predictable, enhancing the overall gameplay experience."
            , "Afonse"
        ),
        new DialogData("./assets/AfonseWalkingDebug.png", "./assets/AfonseJumpDebug.png", "./assets/AfonseCrouchDebug.png", "./videos/AfonseGlideShowCase.MP4",
            "Using a state machine, Afonse (aka the player) can freely switch between states, altering the behavior based on each one.",
            "This system has three main components: the PlayerBrain, which initializes the state machine; the StateMachine class, which is responsible for setting up the states; and the individual States, which contain their own behavior within themselves. For example, a GlideState can handle input and physics to change how the player moves in the air.",
            "State switching can occur in two ways. The first and most common happens through in-state conditions that trigger transitions. The second involves exceptions that can force a state change at any time, as long as their conditions are met."
            , "State-Machine"
        ),
        new DialogData("./assets/AfonseBossAtack.png", "./assets/AfonseAndBoss.png", "./assets/AfonseBoss.png", "./videos/AfonseBossShowcase.MP4",
            "The boss has its own state machine and will switch between states, with each state representing an action. Once an action is completed, the boss transitions to another state, thus performing a different action.",
            "Unlike the player, the boss's state machine doesn't wait for input to change states. Instead, it performs its idle behavior and reacts dynamically to the player's movements.",
            "This makes the boss feel alive, as if it has its own mind, and allows the player to analyze its behavior to discover the best strategy for defeating it."
            , "Boss"
        ),
        new DialogData("./assets/SpiderEnemyChekingSurroundings.png", "./assets/AfonseAranha.png", "./assets/SpideEnemy.png", "./videos/SpiderEnemyShowcase.MP4",
            "These enemies are frightening spiders that jump around unpredictably, with the sole intention of disturbing the player (Afonse). Their erratic movements create a constant sense of imminent danger.",
            "Their AI uses a state machine that determines the spider’s next move by analyzing the environment with Raycasts, allowing for precise positioning while remaining performant. It scans for potential jump locations or checks for nearby walls, and based on this analysis, the spider decides whether to jump or simply walk in the chosen direction.",
            "The spiders' state machine is simple, with only three main states — Idle, Move, and Jump — yet it effectively makes them feel alive and presents a constant threat to the player."
            , "Spider-Enemy"
        ),
    ]
    const botVinnikDialogData = [
        new DialogData("./assets/BotVinnikOverview.png", "./assets/BotVinnikTeaching.png", "./assets/BotVinnikBoard.png", "./videos/BotVinnikShowCase.MP4",
            "In collaboration with DeepGreen Studios, I contributed to the development of BotVinnik Chess Masteries Academy, an educational chess platform focused on advanced mastery techniques.",
            "I was responsible for implementing scene communication and smooth transitions, ensuring a cohesive and responsive flow between them I also designed a save system to track and restore user progress.",
            "I also refined gameplay by integrating animations that improved visual feedback and level clarity. Unity coroutines were used to handle asynchronous tasks, enhancing both performance and user experience.",
            "Bot Vinnik"
        ),
        new DialogData("./assets/BotVinnikLaikaTip.png", "./assets/BotVinnikChessTrail.png", "./assets/BotVinnikChessHighlights.png", "./videos/BotVinnikLaikaHint.MP4",
            "A big part of the game goes to its visuals, many of them was made using tweens to make sure that everything was in place, syncronized and working in order.",
            "For the pieces movement to the correct move particles the tweens helped organize and smooth this interactions. Laika the dog also come into place by using tweens to move and syncronize the tips to her barking sounds.",
            "Even for a chess game all of that brings a more professional finish and a smooth experience",
            "Smooth Transitions"
        ),
        new DialogData("./assets/BotVinnikWrongMove.png", "./assets/BotVinnikTeachingText.png", "./assets/BotVinnikCard.png", "./videos/BotVinnikReactions.MP4",
            "Who is Bot Vinnik? It's a Soviet AI bot that knows everything about chess and will teach you all about it.",
            "Another big part of the game relies on the way Bot Vinnik interacts with the player. He expresses his emotions and reacts to the player's slowness.",
            "His key role, however, is to give tips about the moves the player needs to make to proceed to the next lesson. These tips are related to the lesson the player selected, ensuring a playful way to learn.",
            "Bot Vinnik"
        ),
    ]
    const wonderWallaceDialogData = [
        new DialogData("./assets/WonderWallaceOverview.png", "./assets/WonderWallaceFood.png", "./assets/WonderWallaceFishing.png", "./videos/WonderWallaceShowCase.MP4",
            "In this project the game mechanics are simple yet engaging, with Wallace racing against the clock to reel in the fish, offering a fun and challenging experience.",
            "I developed the fishing mechanics for the game, from the throw to the catch, incorporating a timer that challenges the player to catch fish that are randomly selected.",
            "Additionally, I implemented a camera transition system using Cinemachine, creating cinematic moments throughout the game. ",
            "Wonder Wallace"
        ),
    ]
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
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 origin-top-left" style={{ transform: `scale(${scale})`, width: `${100 / scale}%`, height: `${100 / scale}%` }}>
                <div className="flex flex-col w-full h-full">
                    <div className="flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b from-[#D2D3D7] to-[#CCCCCC]">
                        <span className="ml-5 h-auto text-3xl text-[#396291] flex items-center gap-4 w-full">
                            <div className="xl:h-15 xl:w-15 h-[180px] w-[180px] border-[#396291] border-8 xl:border-5 rounded-[50%] xl:rounded-4xl overflow-hidden hover:cursor-pointer hover:border-[#497299]" onClick={() => router.back()}>
                                <FiChevronLeft className="xl:w-12 xl:h-12    h-[155px] w-[155px] text-[#396291]" />
                            </div>
                            <span className="w-[calc(100%-64px)] border-b-8 text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)]">
                                PROJECTS
                            </span>
                        </span>
                    </div>
                    <div className="w-full h-full flex xl:flex-row flex-col items-center justify-around gap-6 p-10 xl:overflow-x-auto overflow-y-auto overflow-x-hidden xl:overflow-y-hidden scroll-smooth snap-x snap-mandatory" ref={containerRef}>
                        <ProjectCard title="Afonse" description="Afonse is an immersive adventure that puts you in control of the Afonsos — the last survivors of a post-apocalyptic world abandoned amidst nature and concrete." imageUrl="./assets/AfonseMain.png" cardImageUrl="./assets/AfonseCardImage.png" dialogData={afonseDialogData} />
                        <ProjectCard title="Bot Vinnik" description="From Deep Green Games studio, Engage with BOT.vinnik, a witty Soviet AI chess instructor! His sharp humor and rigorous challenges will mold you into a pro." imageUrl="./assets/BotVinnikCard.png" cardImageUrl="./assets/BotVinnikCardImage.png" dialogData={botVinnikDialogData} />
                        <ProjectCard title="Wonder Wallace" description="Wonder Wallace is a fast-paced fishing game where you play as Wallace, a bear on a mission to catch lunch. Tasked with reeling in three delicious fish, Wallace must race against the clock to complete his goal." imageUrl="./assets/WonderWallaceCard.png" cardImageUrl="./assets/WonderWallaceKitchen.png" dialogData={wonderWallaceDialogData} />
                        {/* <ProjectCard title="Teste" description="teste" imageUrl="../assets/placeHolder.jpg" cardImageUrl="../assets/AfonseVsBoss.png" dialogData={afonseDialogData} /> */}
                    </div>
                    <div className='hidden'>

                        <button
                            onClick={() => scroll('left')}
                            className="xl:flex hidden absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-black/70 z-[100]"><FiChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="xl:flex hidden absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-black/70 z-[100]"><FiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}