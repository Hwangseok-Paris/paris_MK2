import ProjectsContainerSkeleton from "@/components/projects/ProjectsContainerSkeleton";

export default function ProjectsPreviewSkeleton() {
  return (
    <section aria-label="대표 프로젝트">
      <div className="section-label"><h2>대표 프로젝트</h2></div>
      <ProjectsContainerSkeleton />
    </section>
  );
}
