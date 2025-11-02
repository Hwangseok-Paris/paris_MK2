// app/components/ContactFooter.tsx
"use client";

import { motion } from "framer-motion";

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M4 6h16a2 2 0 0 1 2 2v.3l-10 6.25L2 8.3V8a2 2 0 0 1 2-2Zm0 4.1 7.42 4.63a2 2 0 0 0 2.16 0L21 10.1V16a2 2 0 0 1-2 2H5.99A2 2 0 0 1 4 16v-5.9Z"
    />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.19-3.37-1.19-.46-1.18-1.12-1.5-1.12-1.5-.92-.63.07-.62.07-.62 1.02.07 1.56 1.06 1.56 1.06 .9 1.56 2.36 1.11 2.94.85.09-.66.35-1.11.63-1.37-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .85-.27 2.8 1.03A9.7 9.7 0 0 1 12 6.84c.86 0 1.73.12 2.54.36 1.95-1.3 2.8-1.03 2.8-1.03 .55 1.4.2 2.44.1 2.7 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-2.75a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z"
    />
  </svg>
);

const socials = [
  { label: "Email", href: "mailto:hwangseokparis@gmail.com", Icon: MailIcon },
  { label: "GitHub", href: "https://github.com/Hwangseok-Paris", Icon: GithubIcon },
  { label: "Instagram", href: "https://instagram.com/watlz_paris", Icon: InstagramIcon },
];

export default function ContactFooter() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 md:px-8">
      <div className="relative mx-auto mt-12 mb-12 max-w-5xl min-w-xs rounded-2xl p-4 overflow-hidden">
        {/* ✨ 흐르는 배경 */}
        <div className="absolute inset-0 -z-10 rounded-2xl gradient-anim opacity-60" />

        {/* ✨ 글로우 border 효과 (얇은 테두리 라이트 애니메이션) */}
        <div className="absolute inset-0 -z-10 rounded-2xl border border-white/20 dark:border-white/10 glow-anim pointer-events-none" />

        {/* 🪞 Glass 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/20 dark:border-white/10 
          bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl p-8 relative">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center py-8">
            CONTACT ME
          </h2>

          <p className="mt-3 text-center  text-gray-600 dark:text-gray-300 leading-relaxed">
            프론트엔드 개발자{" "}
            <span className="font-bold text-gray-900 dark:text-white">김황석</span>
            입니다.
          </p>
          <p className="text-center  text-gray-600 dark:text-gray-300 leading-relaxed">
            좋은 인연이 되었으면 합니다.
          </p>
          <div className="py-5 flex flex-col items-center">
            {/* <p className="mt-3 text-center text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              프론트엔드 개발자{" "}
              <span className="font-medium text-gray-900 dark:text-white">Paris (김황석)</span>
              입니다.
            </p>
            <p className=" text-center text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              새로운 협업/인터뷰 제안은 언제든 환영합니다.
            </p> */}
            <p className="mt-3 text-center  text-gray-600 dark:text-gray-300 leading-relaxed">
              010-4497-4897
            </p>
            <p className="mt text-center text-gray-600 dark:text-gray-300 leading-relaxed">
              {" "}
              hwangseok.paris@gmail.com
            </p>
          </div>

          <div className="mt-6 gap-3 grid grid-cols-1 sm:grid-cols-3 ">
            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group justify-center inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span>이력서(PDF)</span>
            </a> */}

            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group justify-center i inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Icon className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-[11px] md:text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Paris · Built with Next.js &amp; Tailwind
          </p>
        </motion.div>
      </div>

      {/* 🎨 내부 애니메이션 정의 */}
      <style jsx>{`
        /* 🎨 배경 그라데이션 */
        .gradient-anim {
          background: linear-gradient(
            90deg,
            rgba(217, 70, 239, 0.5),
            rgba(16, 185, 129, 0.5),
            rgba(56, 189, 248, 0.5),
            rgba(217, 70, 239, 0.5)
          );
          background-size: 400% 100%;
          animation: bg-pan 20s linear infinite;
        }

        /* ✨ 윤곽선도 같은 그라데이션 공유 */
        .glow-anim::before {
          content: "";
          filter: blur(1px);
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            rgba(217, 70, 239, 0.6),
            rgba(16, 185, 129, 0.6),
            rgba(56, 189, 248, 0.6),
            rgba(217, 70, 239, 0.6)
          );
          background-size: 400% 100%;
          animation: bg-pan 20s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          padding: 1px;
          opacity: 0.8;
        }

        /* 공통 이동 애니메이션 */
        @keyframes bg-pan {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
