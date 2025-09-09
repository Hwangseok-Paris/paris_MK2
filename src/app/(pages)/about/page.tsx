import Container from "@/components/layout/Container";
import AboutIntro from "@/components/about/AboutIntro";
import Highlights from "@/components/about/Highlights";
import Stacks from "@/components/about/Stacks";
import History from "@/components/home/History";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <AboutIntro />
        <div className="mt-10 md:mt-12">
          <Highlights />
        </div>
        <div className="mt-10 md:mt-12">
          <Stacks />
        </div>
        <div className="mt-12 md:mt-16">
          {/* 기존 History 컴포넌트 재사용 – 간단 요약 섹션처럼 */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Timeline</h2>
          <History />
        </div>
      </Container>
    </section>
  );
}
