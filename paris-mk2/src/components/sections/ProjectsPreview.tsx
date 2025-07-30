"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "페스티벌라이프",
      desc: "국내 최대 공연/페스티벌 커뮤니티 '페스티벌 라이프' 앱 개발 프로젝트",
      image: "/logo/festivalLife.svg",
    },
  ];

  // 상단에 정의
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
    <section className=" border-gray-200 py-16 dark:border-gray-700">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold ">Featured Projects</h2>
          <Link href="/projects" className="text-primary-500 hover:underline">
            View all →
          </Link>
        </div>

        {/* 카드 3개 자리 — 이후 map으로 대체 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-4 h-32 rounded-xl bg-[#FF1A42] flex justify-center">
                <Image
                  src={p.image}
                  width={0}
                  height={0}
                  alt="프로젝트이미지"
                  className="w-full h-full p-10 min-w-[200px] max-w-[300px]"
                />
              </div>
              <div className="px-1">
                <h3 className="text-lg font-semibold text-black dark:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-black dark:text-white/80">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
