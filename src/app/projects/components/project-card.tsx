import Image from "next/image";
import Dialog from "./dialog";
import { DialogData } from "../utilsClasses";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { tv } from "tailwind-variants";
import { useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string; // imagem principal (screenshot do projeto)
  cardImageUrl: string; // pode ser usada como logo ou detalhe
  dialogData: DialogData[];
}

// className="text-white font-bold text-3xl xl:text-5xl mb-4"
export const teste = tv({ slots: { dialogTitleClass: "mx-auto font-[family-name:var(--font-jersey-10)] xl:text-5xl text-3xl  text-white mb-4", } });
const { dialogTitleClass } = teste();

export default function ProjectCard({
  title,
  description,
  imageUrl,
  dialogData,
}: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const scroll = (direction: string) => {
    if (containerRef.current) {
      // @ts-expect-error null inexistent
      containerRef.current.scrollBy({
        top: direction === 'down' ? cardHeight + gap : -(cardHeight + gap),
        behavior: 'smooth'
      });
    }
  };
  const containerRef = useRef(null);
  const cardHeight = 881;
  const gap = 1;


  // className="flex flex-col w-full h-[90vh] overflow-y-auto overflow-x-hidden gap-6 px-4 py-6"
  // relative 

  return (
    <div>
      <div className="flex flex-col xl:flex-row bg-zinc-900 rounded-2xl shadow-lg overflow-hidden mx-4 my-6 hover:shadow-xl transition-all duration-300">
        <div className="w-full xl:w-1/2 relative h-[250px] xl:h-[320px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full xl:w-1/2 flex flex-col justify-center p-6 text-white">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-base text-gray-300 mb-4">{description}</p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="self-start px-5 py-2 rounded-lg bg-[#e51c23] border-3 border-[#b0120a] hover:border-[#4a148c] hover:bg-[#b0120a] transition-all duration-200"
          >
            Ver projeto
          </button>
        </div>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        bgImage={imageUrl}
      >
        <div
          ref={containerRef}
          className="flex flex-col w-full h-[90vh] overflow-y-auto overflow-x-hidden gap-6 px-4 py-6"
        >
          {dialogData
            .filter(item => !item.mobile)
            .map((item, index) => (
              <div key={index} className="flex flex-col xl:flex-row gap-6 w-full">
                <div className="xl:w-1/3 w-full relative flex flex-col p-4 rounded-lg bg-black/40">
                  <h3 className={dialogTitleClass()}>{item.titleText}</h3>
                  <p className="text-white text-sm xl:text-base mb-2 indent-4">{item.firstText}</p>
                  <p className="text-white text-sm xl:text-base mb-2 indent-4">{item.secondText}</p>
                  <p className="text-white text-sm xl:text-base mb-2 indent-4">{item.thirdText}</p>
                </div>

                <div className="xl:w-2/3 w-full flex flex-col gap-4">
                  <div className="grid xl:grid-cols-[2fr_1fr] grid-cols-1 gap-4">
                    <div className="relative">
                      <Image
                        alt=""
                        src={item.mainImage}
                        width={1920}
                        height={1080}
                        className="rounded-md shadow-lg w-full h-[245px] xl:h-[345px] object-cover"
                      />
                    </div>
                    <div className="relative">
                      <Image
                        alt=""
                        src={item.upperMinorImage}
                        width={1920}
                        height={1080}
                        className="rounded-md shadow-lg w-full h-[245px] xl:h-[345px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid xl:grid-cols-[1fr_2fr] grid-cols-1 gap-4">
                    <div className="relative">
                      <Image
                        alt=""
                        src={item.bottomMinorImage}
                        width={1920}
                        height={1080}
                        className="rounded-md shadow-lg w-full h-[345px] object-cover"
                      />
                    </div>
                    <div className="relative">
                      <video
                        src={item.videoSrc}
                        autoPlay
                        loop
                        muted
                        className="rounded-md shadow-lg w-full h-[345px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {dialogData.length > 1 && (
          <div className="z-[101]">
            <button title="Up"
              onClick={() => scroll('up')}
              className="xl:flex hidden absolute right-5 top-5 bg-white/10 text-white rounded-full w-15 h-15 items-center justify-center hover:bg-white/40 transition-all duration-300"
            >
              <FiChevronUp className="h-6 w-6" />
            </button>
            <button title="Down"
              onClick={() => scroll('down')}
              className="xl:flex hidden absolute right-5 bottom-5 bg-white/10 text-white rounded-full w-15 h-15 items-center justify-center hover:bg-white/40 transition-all duration-300"
            >
              <FiChevronDown className="h-6 w-6" />
            </button>
            <button title="Down"
              onClick={() => scroll('down')}
              className="animate-bounce xl:hidden flex absolute right-1/2 -translate-x-1/2 bottom-10 bg-white/10 text-white rounded-full w-20 h-20 items-center justify-center hover:bg-white/40 transition-all duration-300"
            >
              <FiChevronDown className="h-10 w-10" />
            </button>
          </div>
        )}
      </Dialog>

    </div>
  );

}
