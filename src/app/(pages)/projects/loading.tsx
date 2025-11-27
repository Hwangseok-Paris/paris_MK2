import ProjectsContainerSkeleton from "@/components/projects/ProjectsContainerSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-7 py-12">
      <div className="mb-8 space-y-3">
        <div className="h-8 w-32 rounded bg-black/10 dark:bg-white/10" />
        <div className="space-y-2 text-sm opacity-80">
          <div className="h-4 w-64 rounded bg-black/10 dark:bg-white/10" />
          <div className="h-4 w-52 rounded bg-black/10 dark:bg-white/10" />
        </div>
      </div>
      <ProjectsContainerSkeleton />
    </main>
  );
}
