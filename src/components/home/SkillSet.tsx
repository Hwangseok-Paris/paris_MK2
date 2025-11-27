import Image from "next/image";
interface Skill {
  name: string;
  iconPath: string;
}

const skills: Skill[] = [
  {
    name: "Vue",
    iconPath: "/icons/vuedotjs.svg",
  },
  { name: "React", iconPath: "/icons/react.svg" },
  { name: "JavaScript", iconPath: "/icons/javascript.svg" },
  { name: "TypeScript", iconPath: "/icons/typescript.svg" },
  { name: "Pinia", iconPath: "/icons/pinia.svg" },
  { name: "TailwindCSS", iconPath: "/icons/tailwindcss.svg" },
  { name: "Next", iconPath: "/icons/nextdotjs_dark.svg" },
  { name: "Docker", iconPath: "/icons/docker.svg" },
  { name: "Git", iconPath: "/icons/git.svg" },
];

export default function SkillSet() {
  return (
    <section className="h-[calc(100vh-56px)] flex flex-col items-center justify-center mx-5 md:mx-20 mb-50">
      <div className="w-full mb-15 text-center text-4xl font-bold bg-gradient-to-r from-primary-800 to-emerald-300 dark:from-pink-500 dark:to-pink-100 bg-clip-text text-transparent">
        MAIN TECH STACK
      </div>
      <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 justify-items-center">
        {skills.map(({ name, iconPath }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-5 rounded-xl p-5 shadow-md transition-all duration-700 hover:scale-105 w-full dark:bg-gray-800/60">
            {name === "Next" ? (
              <>
                <Image
                  src="/icons/nextdotjs_light.svg"
                  width={40}
                  height={40}
                  alt={name}
                  className="dark:hidden"
                />
                <Image
                  src="/icons/nextdotjs_dark.svg"
                  width={40}
                  height={40}
                  alt={name}
                  className="hidden dark:block"
                />
              </>
            ) : (
              <Image src={iconPath} width={40} height={40} alt={name} />
            )}
            <span className="text-sm font-medium dark:text-pink-500 dark:drop-shadow-[0_0_6px_#f472b6] text-green-800 drop-shadow-[0_0_6px_#6ee7b7]">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
