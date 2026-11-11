export default function Stacks() {
  return (
    <section className="tech-section" aria-labelledby="tech-heading">
      <h2 id="tech-heading">사용 기술</h2>
      <dl className="tech-grid">
        <div className="tech-item">
          <dt>언어</dt>
          <dd>TypeScript · JavaScript<br />Kotlin · Swift<small>Kotlin·Swift는 오스템 앱 개발에 사용</small></dd>
        </div>
        <div className="tech-item"><dt>프레임워크·라이브러리</dt><dd>React · Vue 3 · Next.js</dd></div>
        <div className="tech-item"><dt>상태 관리·데이터 조회</dt><dd>Pinia · Zustand<br />React Query</dd></div>
        <div className="tech-item"><dt>CSS 프레임워크</dt><dd>Tailwind CSS</dd></div>
        <div className="tech-item"><dt>버전 관리</dt><dd>Git · GitLab · SVN</dd></div>
        <div className="tech-item">
          <dt>개발·배포 환경</dt>
          <dd>GCP · AWS · Docker<small>GCP — 삼성전자 CIA<br />AWS·Docker — Festival Life</small></dd>
        </div>
      </dl>
    </section>
  );
}
