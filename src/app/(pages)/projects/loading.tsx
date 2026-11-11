import ProjectsContainerSkeleton from "@/components/projects/ProjectsContainerSkeleton";

export default function Loading() {
  return (
    <div className="folio folio-projects">
      <div className="viewport"><div className="site"><div className="underlay">
        <ProjectsContainerSkeleton />
      </div></div></div>
    </div>
  );
}
