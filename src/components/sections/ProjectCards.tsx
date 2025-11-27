"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export type ProjectCardItem = {
  title: string;
  desc: string;
  image: string;
  path?: string;
};

interface Props {
  projects: ProjectCardItem[];
}

export default function ProjectCards({ projects }: Props) {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {/* 카드 3개 자리 — 이후 map으로 대체 */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-4 h-32 rounded-xl bg-[#FF1A42] flex justify-center overflow-hidden">
              <Image
                src={p.image}
                width={320}
                height={180}
                alt="프로젝트이미지"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-contain p-10 min-w-[200px] max-w-[320px]"
              />
            </div>
            <div className="px-1">
              <h3 className="text-lg font-semibold text-black dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-black dark:text-white/80">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
