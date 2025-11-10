"use client";
import { useState } from "react";

export default function Education() {

    const [scale] = useState(1); // Você pode ajustar esse valor dinamicamente
    return (
        <div className="bg-[#1E1E1E] ">
            
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
                                <span className="w-[calc(100%-64px)] border-b-8 border-[#e51c23] text-[#FFFFFF] text-7xl xl:text-3xl xl:border-b-2 font-[family-name:var(--font-geist-mono)] font-bold">
                                    Formação
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}