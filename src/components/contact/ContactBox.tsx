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
    <section className="contact-content" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact</h1>
      <div className="contact-details">
        <a ref={emailRef} href={`mailto:${email}`} className="email" aria-label={`${email}으로 이메일 보내기`}>
          hwangseokparis<wbr />@gmail.com
        </a>
        <button
          type="button"
          className="copy"
          onClick={copyEmail}
          disabled={status === "copying"}
          aria-label={status === "copied" ? "이메일 주소 복사됨" : "이메일 주소 복사"}>
          {status === "copied" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </button>
        <p className={status === "error" ? "copy-error" : "sr-only"} role="status">
          {status === "copied" && "이메일 주소를 복사했습니다."}
          {status === "error" && "자동 복사를 할 수 없습니다. 선택된 주소를 직접 복사해 주세요."}
        </p>
      </div>
    </section>
  );
}
