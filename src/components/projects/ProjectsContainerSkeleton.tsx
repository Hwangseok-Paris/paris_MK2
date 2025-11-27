export default function ProjectsContainerSkeleton() {
  const items = Array.from({ length: 10 });

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((_, i) => (
        <div
          key={i}
          className="flex flex-col border shadow-xl sm:min-h-[230px] min-w-[230px] border-black/5  dark:border-white/5 bg-gradient-to-br from-black/5 dark:from-white/5 p-5 backdrop-blur-sm rounded-2xl animate-pulse">
          <div className="mb-2 h-4 w-2/3 rounded bg-black/10 dark:bg-white/10"></div>
          <div className="mb-1 h-4 w-1/3 rounded bg-black/10 dark:bg-white/10"></div>
          <div className="h-6 w-3/4 rounded bg-black/10 dark:bg-white/10"></div>
          <div className="mt-3 mb-3 h-8 w-full rounded bg-black/10 dark:bg-white/10"></div>

          <div className="mt-auto flex flex-wrap gap-1.5">
            <div className="h-6 w-16 rounded-full bg-black/10 dark:bg-white/10"></div>
            <div className="h-6 w-16 rounded-full bg-black/10 dark:bg-white/10"></div>
            <div className="h-6 w-12 rounded-full bg-black/10 dark:bg-white/10"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
