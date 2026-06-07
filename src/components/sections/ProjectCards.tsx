"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type ProjectCardItem = {
  title: string;
  eyebrow?: string;
  signal?: string;
  desc: string;
  image?: string;
  path?: string;
  stack?: string[];
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

  const renderCard = (p: ProjectCardItem) => (
    <article className="flex h-full min-h-[300px] flex-col rounded-2xl border border-black/5 bg-white/90 p-5 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] dark:border-white/10 dark:bg-white/[0.06]">
      <div className="mb-4 flex h-24 items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-gradient-to-br from-primary-50 to-emerald-50 dark:border-white/10 dark:from-white/10 dark:to-white/[0.03]">
        {p.image ? (
          <Image
            src={p.image}
            width={320}
            height={180}
            alt={`${p.title} 프로젝트 이미지`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-full w-full min-w-[200px] max-w-[320px] object-contain p-8"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-700 dark:text-primary-300">
              {p.eyebrow?.split("/")[1]?.trim() ?? "Selected Work"}
            </span>
            <span className="mt-1 text-sm font-semibold text-black/70 dark:text-white/75">
              {p.eyebrow?.split("/")[0]?.trim()}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-1">
        {p.eyebrow && <p className="mb-2 text-xs font-medium text-black/55 dark:text-white/55">{p.eyebrow}</p>}
        <h3 className="text-lg font-semibold leading-snug text-black dark:text-white">{p.title}</h3>
        {p.signal && <p className="mt-3 text-sm font-semibold text-primary-700 dark:text-primary-300">{p.signal}</p>}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/75 dark:text-white/75">{p.desc}</p>
        {p.stack && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {p.stack.map((stack) => (
              <span
                key={stack}
                className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-black/70 dark:border-white/15 dark:text-white/70">
                {stack}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects &&
          projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}>
              {p.path ? (
                <Link
                  href={p.path}
                  className="block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                  aria-label={`${p.title} 상세 보기`}>
                  {renderCard(p)}
                </Link>
              ) : (
                renderCard(p)
              )}
            </motion.div>
          ))}
      </motion.div>
    </>
  );
}
