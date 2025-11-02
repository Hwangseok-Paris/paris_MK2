"use client";

import { Mail, Github, Instagram } from "lucide-react";

const socials = [
  {
    label: "Email",
    href: "mailto:hwangseokparis@gmail.com",
    icon: <Mail className="size-4" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Hwangseok-Paris",
    icon: <Github className="size-4" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/watlz_paris",
    icon: <Instagram className="size-4" />,
  },
];

export default function ContactSection() {
  return (
    <section className="mt-20 mb-10 text-center">
      <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-800/40 backdrop-blur p-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Let’s Connect</h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          프론트엔드 개발자{" "}
          <span className="font-medium text-gray-900 dark:text-white">Paris (황석)</span>
          입니다. 새로운 협업이나 인터뷰 제안은 언제든 환영합니다.
        </p>

        <ul className="justify-center grid grid-cols-2 sm:grid-cols-2 gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                {s.icon}
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Paris · Built with Next.js & Tailwind
        </p>
      </div>
    </section>
  );
}
