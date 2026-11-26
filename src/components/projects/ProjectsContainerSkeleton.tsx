export default function ProjectsContainerSkeleton() {
  return (
    <div role="status" aria-label="프로젝트 불러오는 중">
      <span className="sr-only">프로젝트를 불러오는 중입니다.</span>
      {[0, 1, 2].map((index) => (
        <div className="loading-row border-b border-rule py-9" key={index} aria-hidden="true">
          <div className="loading-line loading-title my-4 h-[60px] w-[55%] max-w-[90%] bg-rule" />
          <div className="loading-line loading-role my-4 h-[25px] w-[72%] max-w-[90%] bg-rule" />
          <div className="loading-line loading-copy my-4 h-4 w-[90%] max-w-[90%] bg-rule" />
        </div>
      ))}
    </div>
  );
}
