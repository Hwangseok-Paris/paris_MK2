"use client";

import Image from "next/image";

interface Skill {
  name: string;
  color: string; // tailwind bg‑color class
  iconPath: string;
  // icon: ReactElement;
}

const skills: Skill[] = [
  {
    name: "Vue",
    color: "bg-emerald-500",
    iconPath: "/icons/vuedotjs.svg",
  },
  { name: "React", color: "bg-sky-500", iconPath: "/icons/react.svg" },
  { name: "JavaScript", color: "bg-yellow-400", iconPath: "/icons/javascript.svg" },
  { name: "TypeScript", color: "bg-blue-600", iconPath: "/icons/typescript.svg" },
  { name: "Pinia", color: "bg-lime-900", iconPath: "/icons/pinia.svg" },
  { name: "TailwindCSS", color: "bg-teal-400", iconPath: "/icons/tailwindcss.svg" },
  { name: "Next", color: "bg-black", iconPath: "/icons/nextdotjs.svg" },
  { name: "Docker", color: "bg-[#2395EC]", iconPath: "/icons/docker.svg" },
  { name: "Git", color: "bg-[#F4511E]", iconPath: "/icons/git.svg" },
];

export default function SkillSet() {
  return (
    <section className="h-[calc(100vh-56px)] flex flex-col items-center justify-center mx-5">
      <div className="w-full mb-15 text-center text-4xl font-bold bg-gradient-to-r from-primary-800 to-emerald-300 dark:from-pink-500 dark:to-pink-100 bg-clip-text text-transparent">
        MAIN TECH STACK
      </div>
      <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 justify-items-center">
        {skills.map(({ name, color, iconPath }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-5 rounded-xl p-5 shadow-md transition-all duration-700 hover:scale-105 w-full dark:bg-gray-800/60">
            <span
              className={`flex h-20 w-20 items-center justify-center rounded-full ${color} text-white`}>
              <Image src={iconPath} width={40} height={40} alt="vue" />
            </span>
            <span className="text-sm font-medium dark:text-pink-500 dark:drop-shadow-[0_0_6px_#f472b6] text-green-800 drop-shadow-[0_0_6px_#6ee7b7]">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
