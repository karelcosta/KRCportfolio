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

export const teste = tv({slots: {dialogTitleClass: "mx-auto font-[family-name:var(--font-jersey-10)] xl:text-7xl text-9xl mt-[75px] text-white",}});
const {dialogTitleClass} = teste();

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



  return (
    <div >

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
            {/* bg-orange-500 hover:bg-orange-600 */}
            Ver projeto
          </button>
        </div>
        
      </div>

      {/* Dialog para detalhes */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        bgImage={imageUrl}
      >
        <div className="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden" ref={containerRef}>
          {dialogData.length > 1 && (
            <div className='z-[101]'>
              <button onClick={() => scroll('up')} className="xl:flex hidden absolute right-5 top-15 -translate-y-1/2 bg-white/10 text-white rounded-full w-15 h-15 items-center justify-center hover:bg-white/40 transition-all duration-300">
                <FiChevronUp className="h-6 w-6" />
              </button>
              <button onClick={() => scroll('down')} className="xl:flex hidden absolute right-5 -bottom-1 -translate-y-1/2 bg-white/10 text-white rounded-full w-15 h-15 items-center justify-center hover:bg-white/40 transition-all duration-300">
                <FiChevronDown className="h-6 w-6" />
              </button>
              <button onClick={() => scroll('down')} className="animate-bounce xl:hidden flex absolute right-[45%] -bottom-10 -translate-y-1/2 bg-white/10 text-white rounded-full w-[200px] h-[200px] items-center justify-center hover:bg-white/40 transition-all duration-300">
                <FiChevronDown className="h-20 w-20" />
              </button>
            </div>
          )}

          {dialogData.map((item, index) => (
            <div key={index} className='flex xl:flex-row flex-col xl:items-start items-center w-full !min-h-full h-full z-10'>
              <span className='xl:inline relative xl:w-[33%] w-[90%] xl:h-full h-[calc(100%-1300px)] flex xl:ml-[4%]'>
                <span className='w-[100%] absolute top-0 xl:bottom-[0] bottom-[-1300px] bg-black/40 flex flex-col gap-4	z-[-1]'>
                  <span className={dialogTitleClass()}>{item.titleText}</span>
                  <span className=' font-[family-name:var(--font-geist-mono)] xl:text-[20px] text-[66px] text-white px-[22px] text-justify'>
                    <div className='indent-[30px] '>{item.firstText}</div>
                    <br />
                    <div className='indent-[30px]'>{item.secondText}</div>
                    <br />
                    <div className='indent-[30px]'>{item.thirdText}</div>
                  </span>
                </span>
              </span>
              <span className='flex flex-col gap-4 xl:w-[67%] w-full xl:h-full h-[1120px] justify-center items-center'>
                <span className='grid xl:grid-cols-[615px_288px] grid-cols-[984px_461px] rounded-md gap-4 xl:h-[345px] h-[552] overflow-hidden'>
                  <Image alt="" src={item.mainImage} width={1920} height={1080} className="relative rounded-md shadow-lg  xl:!h-[345px] !h-[552] object-cover" />
                  <Image alt="" src={item.upperMinorImage} width={1920} height={1080} className="relative rounded-md shadow-lg  !w-full" />
                </span>
                <span className='grid xl:grid-cols-[288px_615px] grid-cols-[461px_984px] rounded-md gap-4 xl:h-[345px] h-[552] overflow-hidden'>
                  <Image alt="" src={item.bottomMinorImage} width={1920} height={1080} className="relative rounded-md shadow-lg !w-full " />
                  <video src={item.videoSrc}
                    autoPlay
                    loop
                    muted
                    width="0"
                    height="0"
                    className="rounded-md shadow-lg w-full">
                    </video>
                </span>
              </span>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
