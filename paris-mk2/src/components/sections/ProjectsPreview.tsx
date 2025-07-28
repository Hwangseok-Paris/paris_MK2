import Container from "@/components/layout/Container";
import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section className=" border-gray-200 py-16 dark:border-gray-700">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-primary-500 hover:underline">
            View all →
          </Link>
        </div>

        {/* 카드 3개 자리 — 이후 map으로 대체 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800" />
          <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800" />
          <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800" />
        </div>
      </Container>
    </section>
  );
}
