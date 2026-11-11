export default function ProjectsContainerSkeleton() {
  return (
    <div role="status" aria-label="프로젝트 불러오는 중">
      <span className="sr-only">프로젝트를 불러오는 중입니다.</span>
      {[0, 1, 2].map((index) => (
        <div className="loading-row" key={index} aria-hidden="true">
          <div className="loading-line loading-title" />
          <div className="loading-line loading-role" />
          <div className="loading-line loading-copy" />
        </div>
      ))}
    </div>
  );
}
