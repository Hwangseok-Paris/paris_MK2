import ProjectsContainer from "@/components/projects/ProjectsContainer";

export default function ProjectsPage() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-7 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <div className="flex flex-col mt-2 text-sm opacity-80">
            <span>실제 운영/고객사 환경에서 임팩트가 있었던 프로젝트만 엄선해 정리했습니다.</span>
            <span>카드를 클릭하여 상세 하이라이트를 확인하세요.</span>
          </div>
        </header>

        {/* 프로젝트 카드 영역 */}
        <ProjectsContainer />
        {/* 프로젝트 카드 영역 */}
      </main>
    </>
  );
}
