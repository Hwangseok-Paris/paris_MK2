"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

const email = "hwangseokparis@gmail.com";

export default function ContactBox() {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");

  useEffect(() => {
    if (status !== "copied") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      if (emailRef.current) {
        const range = document.createRange();
        range.selectNodeContents(emailRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus("error");
    }
  }

  return (
    <section className="contact-content flex flex-1 flex-col items-center justify-center gap-4 py-[60px] text-center profile-sm:gap-3.5 profile-sm:py-12" aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="text-2xl leading-[1.5] font-medium tracking-[-.035em] profile-sm:text-[22px]">Contact</h1>
      <div className="contact-details relative max-w-[calc(100%-44px)]">
        <a ref={emailRef} href={`mailto:${email}`} className="email flex min-h-11 items-center text-lg leading-[1.65] hover:text-accent hover:underline hover:underline-offset-[5px] profile-sm:text-[17px]" aria-label={`${email}으로 이메일 보내기`}>
          hwangseokparis<wbr />@gmail.com
        </a>
        <button
          type="button"
          className="copy absolute top-1/2 left-full grid size-11 -translate-y-1/2 place-items-center border-0 bg-transparent p-0 text-muted hover:text-ink [&_svg]:size-4 [&_svg]:shrink-0"
          onClick={copyEmail}
          disabled={status === "copying"}
          aria-label={status === "copied" ? "이메일 주소 복사됨" : "이메일 주소 복사"}>
          {status === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </button>
        <p className={status === "error" ? "copy-error absolute top-[calc(100%+12px)] left-1/2 w-full -translate-x-1/2 text-xs leading-[1.6] break-keep text-muted" : "sr-only"} role="status">
          {status === "copied" && "이메일 주소를 복사했습니다."}
          {status === "error" && "자동 복사를 할 수 없습니다. 선택된 주소를 직접 복사해 주세요."}
        </p>
      </div>
    </section>
  );
}
