export default function ProjectsPreviewSkeleton() {
  return (
    <section className="mt-10 max-[700px]:mt-8" aria-label="대표 작업 불러오는 중" aria-busy="true">
      <h2 className="mb-2.5 text-xs font-medium text-[var(--personal-muted)]" lang="en">Featured</h2>
      <div className="[&_span]:my-3 [&_span]:block [&_span]:h-[18px] [&_span]:bg-[#d5d6cf] dark:[&_span]:bg-[#363a3d]" aria-hidden="true">
        <span className="w-[65%]" /><span className="w-[55%]" /><span className="w-[40%]" />
      </div>
    </section>
  );
}
