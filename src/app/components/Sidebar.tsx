"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-screen bg-[#1E1E1E] h-[80px] fixed left-0 top-0 flex flex-row justify-between   p-6 shadow-lg text-white z-50">
      <h1 className="text-3xl font-bold mb-10"> Karel</h1>
      <div className="flex gap-6 ">
        <button onClick={() => console.log("Home")}>Home</button>
        <button onClick={() => console.log("Projects")}>Projects</button>
        <button onClick={() => console.log("About")}>About</button>
      </div>
    </div>
  );
}
