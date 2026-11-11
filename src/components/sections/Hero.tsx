import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="intro">
      <h1>프론트엔드 개발자 Paris입니다.</h1>
      <a href="#about-paris">소개 읽기<ArrowDown aria-hidden="true" /></a>
    </div>
  );
}
