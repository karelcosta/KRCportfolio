"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getScaleFactor } from "../../../public/utils/utils";
import { Code, SquareArrowOutUpRight } from "lucide-react";
import Sidebar from "../components/Sidebar";

import ProfileImage from "../../../public/assets/Astronaut.jpg";
import ProImage from "../../../public/assets/ProfileTeste01.jpg";



export default function Home() {
  const router = useRouter();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => setScale(getScaleFactor());
    updateScale();

    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleButtonClick = () => {
    window.open("https://www.linkedin.com/in/karel-costa-350345337/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className=" w-full min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          transform: `scale(${scale})`,
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
        }}
      >
        <div className="flex flex-col h-full w-full mu-[30px]">



          {/* <div className="flex justify-between h-[50px] w-full bg-gradient-to-b from-[#1E1E1E] to-[#2A2A2A]">
              <span className="ml-5 h-auto text-3xl text-white flex items-center gap-4 w-full">
                {/* <div className="h-[180px] w-[180px] border-white border-8 rounded-[50%] overflow-hidden">
                  <Image alt="profile" src={ProfileImage} width={0} height={0} className="relative bottom-2.5 !w-full" />
                </div> 
                <span className="w-[calc(100%-64px)] border-b-8 text-2xl font-[family-name:var(--font-geist-mono)]">
                  KAREL RC_
                </span>
              </span>
            </div> */}


          
          {/* amostruario do portifolio */}
          <div className="flex flex-col xl:flex-row xl:gap-[60px] h-full overflow-hidden items-center p-10 ml-[50]">
            <div className="h-full xl:max-w-[50%] overflow-hidden">
              <Image alt="dev" src={ProImage} width={0} height={0} className="xl:h-[100%] xl:w-[calc(100%*1.5)] relative" />
            </div>
            <div className="flex flex-col xl:h-[400px] h-full xl:w-[600px] w-full xl:text-lg text-4xl font-[family-name:var(--font-geist-mono)] text-justify mt-10 xl:mt-0">
              <span className="text-5xl mb-4 text-center">Hi! I&apos;m Karel Costa</span>
              <span className="text-7xl font-[family-name:var(--font-jersey-10)] mb-6 text-center">Game & Web developer</span>
              Passionate and skilled C# developer with extensive experience in advanced game
              development, specializing in both 2D and 3D projects. Proficient in implementing
              design patterns to create efficient, scalable, and maintainable code. Adept at
              identifying and delivering practical solutions to enhance project outcomes and
              optimize workflows.
              <div className="flex xl:gap-10 gap-4 justify-between mt-10 h-auto">
                <button onClick={() => router.push("projects")} className="transform active:scale-90 flex items-center justify-center gap-4 w-full px-4 py-3 bg-[#396291] text-white rounded-xl hover:bg-[#2c4e75] transition text-xl">
                  CV <Code className="w-6 h-6" />
                </button>
                <button onClick={handleButtonClick} className="transform active:scale-90 flex items-center justify-center gap-4 w-full px-4 py-3 border-2 border-[#396291] text-[#396291] rounded-xl hover:border-[#2c4e75] hover:bg-[#2c4e75] hover:text-white transition text-xl font-bold">
                  Hire-me <SquareArrowOutUpRight className="w-6 h-6" />
                </button>
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
