"use client";

import Image from "next/image";

const stacks = [
  { name: "Next.js", icon: "/icons/nextdotjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Vue 3", icon: "/icons/vuedotjs.svg" },
  { name: "Pinia", icon: "/icons/pinia.svg" },
  { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
  { name: "React Query", icon: "/icons/reactquery.svg" },
  { name: "AWS", icon: "/icons/amazonwebservices.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

export default function Stacks() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold">Stack Snapshot</h2>
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {stacks.map((s) => (
          <div
            key={s.name}
            className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur flex flex-col items-center gap-2 hover:translate-y-[-2px] transition-transform">
            <Image src={s.icon} alt={s.name} width={28} height={28} />
            <span className="text-xs text-gray-700 dark:text-gray-300">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
