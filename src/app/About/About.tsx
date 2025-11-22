"use client";
// import { useState } from "react";

export default function About() {

    // const [scale] = useState(1); // Você pode ajustar esse valor dinamicamente
    return (
        // <div className="bg-[#1E1E1E] ">

        //     <div className="relative w-full min-h-[80px] overflow-hidden">
        //         <div
        //             className="absolute top-0 left-0 origin-top-left"
        //             style={{
        //                 transform: `scale(${scale})`,
        //                 width: `${100 / scale}%`,
        //                 height: `${100 / scale}%`,
        //             }}
        //         >
        //             <div className="flex flex-col w-full h-[80px] ">
        //                 <div className="relative flex justify-between mt-0 mb-0 xl:h-22 h-[250px] w-full bg-gradient-to-b ">
        //                     <span className="ml-5 h-auto text-3xl text-[#FFFFFF] flex items-center gap-4 w-full z-10">
        //                         <span className="w-[calc(100%-64px)] border-b-8 border-[#e51c23] text-[#FFFFFF] text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)] font-bold">
        //                             Sobre
        //                         </span>
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20 flex flex-col items-center">
            {/* <div className="relative w-full min-h-[80px] overflow-hidden">
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
                                <span className="w-[calc(100%-64px)] border-b-8 border-[#e51c23] text-[#FFFFFF] text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)] font-bold">
                                    Sobre mim
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
            <h1 className="text-4xl font-bold mb-12">Sobre mim</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
                <div className="bg-[#161616] p-8 rounded-xl border border-red-600 shadow-lg transition hover:scale-[1.02]">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">Game Developer</h2>
                    <p className="leading-relaxed">
                        Tenho experiência no desenvolvimento de jogos 2D em C# utilizando Unity, focando em criação de mecânicas,
                        cenários, sistemas de combate e usabilidade. Sempre busco unir criatividade com boas práticas de programação
                        para criar experiências imersivas e fluidas.
                    </p>
                </div>

                <div className="bg-[#161616] p-8 rounded-xl border border-red-600 shadow-lg transition hover:scale-[1.02]">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">Web Developer</h2>
                    <p className="leading-relaxed">
                        Desenvolvo aplicações web modernas com foco em desempenho, responsividade e UX. Trabalho com tecnologias
                        como React, Next.js, Tailwind e Node.js para criar interfaces intuitivas e soluções rápidas, escaláveis
                        e eficientes.
                    </p>
                </div>
            </div>
        </div>
    );
}


//colocar dois card com texto
// 1 para web e outro para games


// export default function About() {
//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20 flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-12">Sobre mim</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
//         <div className="bg-[#161616] p-8 rounded-xl border border-red-600 shadow-lg transition hover:scale-[1.02]">
//           <h2 className="text-2xl font-bold text-red-500 mb-4">Game Developer</h2>
//           <p className="leading-relaxed">
//             Tenho experiência no desenvolvimento de jogos 2D em C# utilizando Unity, focando em criação de mecânicas,
//             cenários, sistemas de combate e usabilidade. Sempre busco unir criatividade com boas práticas de programação
//             para criar experiências imersivas e fluidas.
//           </p>
//         </div>

//         <div className="bg-[#161616] p-8 rounded-xl border border-red-600 shadow-lg transition hover:scale-[1.02]">
//           <h2 className="text-2xl font-bold text-red-500 mb-4">Web Developer</h2>
//           <p className="leading-relaxed">
//             Desenvolvo aplicações web modernas com foco em desempenho, responsividade e UX. Trabalho com tecnologias
//             como React, Next.js, Tailwind e Node.js para criar interfaces intuitivas e soluções rápidas, escaláveis
//             e eficientes.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
