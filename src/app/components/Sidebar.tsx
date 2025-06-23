"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-[280px] bg-[#1E1E1E] h-screen fixed left-0 top-0 flex flex-col justify-between p-6 shadow-lg text-white z-50">
      <div>
        <h1 className="text-3xl font-bold mb-10">Karel</h1>
        <nav className="flex flex-col gap-6 text-lg">
          <button onClick={() => router.push("/#home")}>Home</button>
          <button onClick={() => router.push("/#projects")}>Projects</button>
          <button onClick={() => router.push("/#about")}>About</button>
        </nav>
      </div>
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/karel-costa-350345337/" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>
        {/* Adicione mais ícones como GitHub, Instagram etc. */}
      </div>
    </div>
  );
}
