import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = { viewportFit: "cover" };

export const metadata: Metadata = {
  title: "Paris | Portfolio",
  description: "프론트엔드 개발자 Paris의 포트폴리오",
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
    <html lang="ko" className="dark scheme-light [&.dark]:scheme-dark [scrollbar-gutter:stable]">
      <body
        className={`${geistSans.variable} [--page-max-width:1480px] min-h-screen bg-paper text-gray-900 antialiased transition-colors duration-700 ease-in-out dark:text-gray-200 has-[.folio-profile-page]:flex has-[.folio-profile-page]:min-h-dvh has-[.folio-profile-page]:flex-col motion-reduce:scroll-auto motion-reduce:transition-none`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1 has-[.folio-profile-page]:flex has-[.folio-profile-page]:flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
