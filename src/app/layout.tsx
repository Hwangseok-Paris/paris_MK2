import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

export const viewport: Viewport = { viewportFit: "cover" };

const portfolioTitle = "김황석 | 프론트엔드 개발자";
const portfolioDescription = "AI 분석 화면, 문서 검수 도구, 웹·앱 연동과 상담 서비스를 개발해 온 프론트엔드 개발자 김황석의 포트폴리오입니다.";

export const metadata: Metadata = {
  title: portfolioTitle,
  description: portfolioDescription,
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    siteName: "김황석 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: portfolioTitle,
    description: portfolioDescription,
  },
  icons: {
    icon: "/favicon-light.svg", // 라이트 기본
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scheme-light [&.dark]:scheme-dark [scrollbar-gutter:stable] min-[650px]:has-[.split-home]:[scrollbar-gutter:auto]">
      <body
        className="[--page-max-width:1480px] min-h-screen bg-paper text-gray-900 antialiased transition-colors duration-700 ease-in-out dark:text-gray-200 has-[.folio-profile-page]:flex has-[.folio-profile-page]:min-h-dvh has-[.folio-profile-page]:flex-col motion-reduce:scroll-auto motion-reduce:transition-none">
        <ThemeProvider>
          <Header />
          <main className="flex-1 has-[.folio-profile-page]:flex has-[.folio-profile-page]:flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
