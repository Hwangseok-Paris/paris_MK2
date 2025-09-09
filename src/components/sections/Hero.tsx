"use client";
import Container from "@/components/layout/Container";
import BackgroundCanvas from "./BackgroundCanvas";
import ScrollIndicator from "../common/ScrollIndicator";
import { useState, useEffect } from "react";

export default function Hero() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setKey((k) => k + 1);
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);
  return (
    <section className="relative w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center overflow-hidden">
      <BackgroundCanvas />
      <Container>
        <div className="text-center">
          <h1 className="flex justify-center text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I’m 
            <span className="text-primary-500 dark:text-primary-400 transition-colors duration-700">
              Paris
            </span>
            <span key={key} className="block dark:animate-wiggle animate-wiggle">
               👋
            </span>
          </h1>
          <p className="mt-6 sm:text-2xl text-lg leading-relaxed">FRONT-END DEVELOPER</p>
          <div className="mt-8 flex gap-4">
            {/* <Link
              href="/projects"
              className="rounded-lg bg-primary-100 px-6 py-3 hover:bg-primary-400">
              PROJECT
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-primary-500 px-6 py-3 text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800/40">
              Contact
            </Link> */}
          </div>
        </div>
      </Container>
      <ScrollIndicator />
    </section>
  );
}
