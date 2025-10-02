import Image from "next/image";
import { useState } from "react";
import Dialog from "./dialog";
import { DialogData } from "../utilsClasses";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string; // imagem principal (screenshot do projeto)
  cardImageUrl: string; // pode ser usada como logo ou detalhe
  dialogData: DialogData[];
}

export default function ProjectCardnew({
  title,
  description,
  imageUrl,
  // cardImageUrl,
  // dialogData,
}: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row bg-zinc-900 rounded-2xl shadow-lg overflow-hidden mx-4 my-6 hover:shadow-xl transition-all duration-300">
      
      {/* Imagem do projeto */}
      <div className="w-full xl:w-1/2 relative h-[250px] xl:h-[320px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Conteúdo textual */}
      <div className="w-full xl:w-1/2 flex flex-col justify-center p-6 text-white">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-base text-gray-300 mb-4">{description}</p>

        {/* Tecnologias */}
        {/* <div className="flex flex-wrap gap-3 mb-4 text-sm">
          <span className="px-3 py-1 rounded-md bg-orange-600">HTML</span>
          <span className="px-3 py-1 rounded-md bg-blue-600">CSS</span>
          <span className="px-3 py-1 rounded-md bg-yellow-500 text-black">
            JavaScript
          </span>
          <span className="px-3 py-1 rounded-md bg-purple-600">Bootstrap</span>
        </div> */}

        {/* Botão */}
        <button
          onClick={() => setIsDialogOpen(true)}
          className="self-start px-5 py-2 rounded-lg bg-[#396291] transition-all duration-200"
        >
            {/* bg-orange-500 hover:bg-orange-600 */}
          Ver projeto
        </button>
        
      </div>

      {/* Dialog para detalhes */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        bgImage={imageUrl}
      >
        {/* Aqui pode reaproveitar o que você já tinha no Dialog */}
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </Dialog>
    </div>
  );
}
