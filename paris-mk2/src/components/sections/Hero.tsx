import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I’m <span className="text-primary-500">Paris</span> 👋
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            프론트엔드 개발자 · React / Next.js · AI & Real‑time UX에 관심
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-primary-500 px-6 py-3 text-white hover:bg-primary-600">
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-primary-500 px-6 py-3 text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800/40">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
