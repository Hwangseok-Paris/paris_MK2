import { portfolioViewport, portfolioSurface, projectsTypography, projectsGutter } from "@/components/layout/portfolioStyles";
import ProjectsContainerSkeleton from "@/components/projects/ProjectsContainerSkeleton";
import PageHeading from "@/components/layout/PageHeading";

export default function Loading() {
  return (
    <div className={`folio folio-projects ${portfolioSurface}`}>
      <div className={`viewport @container/projects ${portfolioViewport}`}><div className={`site bg-paper ${projectsTypography}`}><div className={`underlay ${projectsGutter}`}>
        <PageHeading title="Projects" />
        <ProjectsContainerSkeleton />
      </div></div></div>
    </div>
  );
}
