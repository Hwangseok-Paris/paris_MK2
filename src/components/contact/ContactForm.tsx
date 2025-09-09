"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [v, setV] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | "ok" | "fail">(null);
  const [err, setErr] = useState<string | null>(null);

  const contactAction = process.env.NEXT_PUBLIC_CONTACT_ACTION_URL; // 선택: 백엔드 엔드포인트
  const mailto = useMemo(() => {
    const q = new URLSearchParams({
      subject: v.subject || "Contact from Portfolio",
      body: `Name: ${v.name}\nEmail: ${v.email}\n\n${v.message}`,
    });
    // 필요 시 이메일 주소만 바꾸기
    return `mailto:hello@watlzparis.com?${q.toString()}`;
  }, [v]);

  const canSubmit =
    v.name.trim().length > 1 && EMAIL_RE.test(v.email) && v.message.trim().length > 5;

  const onChange =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setV((s) => ({ ...s, [key]: e.target.value }));
      setErr(null);
      setDone(null);
    };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    // 액션 URL이 없으면 mailto로 대체
    if (!contactAction) {
      window.location.href = mailto;
      return;
    }

    try {
      setSubmitting(true);
      setErr(null);
      const res = await fetch(contactAction, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setDone("ok");
      setV(initial);
    } catch {
      setDone("fail");
      setErr("전송에 실패했어요. 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-800/60 backdrop-blur p-5 md:p-6"
      aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="text-xl md:text-2xl font-semibold">
        Send a message
      </h2>

      <div className="mt-4 grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            이름<span className="text-primary-600 dark:text-primary-400"> *</span>
          </label>
          <input
            id="name"
            name="name"
            value={v.name}
            onChange={onChange("name")}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 ring-primary-500"
            placeholder="홍길동"
            required
            autoComplete="name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            이메일<span className="text-primary-600 dark:text-primary-400"> *</span>
          </label>
          <input
            id="email"
            name="email"
            value={v.email}
            onChange={onChange("email")}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 ring-primary-500"
            placeholder="you@example.com"
            required
            inputMode="email"
            autoComplete="email"
          />
          {!EMAIL_RE.test(v.email) && v.email.length > 0 && (
            <p className="text-xs text-red-600">이메일 형식을 확인해 주세요.</p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="subject" className="text-sm font-medium">
            제목
          </label>
          <input
            id="subject"
            name="subject"
            value={v.subject}
            onChange={onChange("subject")}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 ring-primary-500"
            placeholder="예: 관리자 페이지 운영 컨설팅 문의"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            내용<span className="text-primary-600 dark:text-primary-400"> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={v.message}
            onChange={onChange("message")}
            className="min-h-[120px] w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 ring-primary-500"
            placeholder="프로젝트 배경, 일정, 예산/범위 등을 알려주시면 더 빠르게 도와드려요."
            required
          />
          {v.message.trim().length > 0 && v.message.trim().length < 6 && (
            <p className="text-xs text-red-600">6자 이상 입력해 주세요.</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!canSubmit || submitting}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-transparent bg-gray-900 text-white disabled:opacity-50 dark:bg-white dark:text-gray-900">
            {submitting ? "전송 중..." : "보내기"}
          </button>
          {!contactAction && (
            <span className="text-xs text-gray-500">
              액션 URL이 없어 <span className="font-medium">메일 앱</span>이 열려요.
            </span>
          )}
        </div>

        {done === "ok" && (
          <p className="text-sm text-green-600">메시지를 보냈어요. 곧 회신드릴게요!</p>
        )}
        {done === "fail" && <p className="text-sm text-red-600">{err}</p>}
      </div>
    </form>
  );
}
