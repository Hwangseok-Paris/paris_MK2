import Container from "@/components/layout/Container";

export default function ProjectsPreviewSkeleton() {
  const items = Array.from({ length: 3 });
  return (
    <section className=" border-gray-200 py-16 dark:border-gray-700">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <div className="h-8 w-48 rounded bg-black/10 dark:bg-white/10 animate-pulse"></div>
          <div className="h-6 w-24 rounded bg-black/10 dark:bg-white/10 animate-pulse"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/5 dark:border-white/5 bg-gradient-to-br from-black/5 dark:from-white/5 p-6 shadow-xl backdrop-blur-md animate-pulse">
              <div className="mb-4 h-32 rounded-xl bg-black/10 dark:bg-white/10"></div>
              <div className="px-1">
                <div className="h-6 w-3/4 rounded bg-black/10 dark:bg-white/10"></div>
                <div className="mt-2 h-8 w-full rounded bg-black/10 dark:bg-white/10"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
