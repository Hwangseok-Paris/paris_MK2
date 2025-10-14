"use client";

import Container from "@/components/layout/Container";
import AboutIntro from "@/components/about/AboutIntro";
import Highlights from "@/components/about/Highlights";
import Stacks from "@/components/about/Stacks";
import History from "@/components/home/History";

import { motion, Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-8">
          <motion.div variants={item}>
            <AboutIntro />
          </motion.div>
          <motion.div variants={item} className="mt-10 md:mt-12">
            <Highlights />
          </motion.div>
          <motion.div variants={item} className="mt-10 md:mt-12">
            <Stacks />
          </motion.div>
          {/* <motion.div variants={item} className="mt-12 md:mt-16"> */}
          {/* 기존 History 컴포넌트 재사용 – 간단 요약 섹션처럼 */}
          {/* <h2 className="text-xl md:text-2xl font-semibold mb-4">Timeline</h2>
            <History />
          </motion.div> */}
        </motion.ul>
      </Container>
    </section>
  );
}
