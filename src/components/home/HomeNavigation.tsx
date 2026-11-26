"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const staticNavigationQuery = "(width < 650px), (hover: none)";

type Area = "about" | "projects" | "contact";
const colors = {
  about:
    "[--home-tint:#dce9d1] dark:[--home-tint:#29432f] [--home-solid:#b9df91] [--home-on:#20341b] [--origin-y:16.6667%]",
  projects:
    "[--home-tint:#d8e6fa] dark:[--home-tint:#253d62] [--home-solid:#8ebcfa] [--home-on:#183356] [--origin-y:50%]",
  contact:
    "[--home-tint:#f5ddce] dark:[--home-tint:#57362b] [--home-solid:#f2a57f] [--home-on:#4d2a1a] [--origin-y:83.3333%]",
};
const items: { area: Area; label: string }[] = [
  { area: "about", label: "About" },
  { area: "projects", label: "Projects" },
  { area: "contact", label: "Contact" },
];

export default function HomeNavigation({
  children,
  effect = "radial",
}: {
  children: ReactNode;
  effect?: "radial" | "sweep";
}) {
  const [active, setActive] = useState<Area | null>(null);
  const [layers, setLayers] = useState<{ id: number; area: Area }[]>([]);
  const target = useRef<Area | null>(null);
  const sequence = useRef(0);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      for (const timer of [leaveTimer, startTimer, resetTimer]) {
        if (timer.current) clearTimeout(timer.current);
      }
    },
    [],
  );

  useEffect(() => {
    const media = window.matchMedia(staticNavigationQuery);
    const resetOnMobile = () => {
      if (!media.matches) return;
      for (const timer of [leaveTimer, startTimer, resetTimer]) {
        if (timer.current) clearTimeout(timer.current);
      }
      target.current = null;
      setActive(null);
      setLayers([]);
    };
    media.addEventListener("change", resetOnMobile);
    return () => media.removeEventListener("change", resetOnMobile);
  }, []);

  function activate(area: Area | null) {
    if (area && window.matchMedia(staticNavigationQuery).matches) return;
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    if (target.current === area) return;
    if (startTimer.current) clearTimeout(startTimer.current);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    target.current = area;
    setActive(area);
    if (!area) {
      // Fade the complete composition out; never remove a partially filled layer abruptly.
      resetTimer.current = setTimeout(() => setLayers([]), 450);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const addLayer = () => {
      const layer = { id: ++sequence.current, area };
      setLayers((previous) => (reduced ? [layer] : [...previous, layer]));
    };
    // Overlap the eased tail of the 380ms right fill for a continuous handoff.
    if (reduced) addLayer();
    else startTimer.current = setTimeout(addLayer, 260);
  }

  return (
    <div
      className="split-home grid min-h-svh grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] max-[650px]:grid-cols-1 max-[650px]:pb-[calc(65px+env(safe-area-inset-bottom))] bg-[#f5f4ef] dark:bg-[#17191b] font-[Pretendard,-apple-system,BlinkMacSystemFont,sans-serif] leading-[1.8] tracking-[-.015em] text-[#22282d] dark:text-[#eeede7] [--personal-muted:#62686c] dark:[--personal-muted:#aeb3b6]"
      data-effect={effect}>
      <nav
        className="home-blocks order-2 grid grid-rows-3 max-[650px]:fixed max-[650px]:inset-x-0 max-[650px]:bottom-0 max-[650px]:z-50 max-[650px]:grid-cols-3 max-[650px]:grid-rows-1 max-[650px]:border-t max-[650px]:border-[#363a3d] max-[650px]:bg-[#17191b] max-[650px]:pb-[env(safe-area-inset-bottom)]"
        aria-label="주 메뉴"
        onPointerLeave={() => {
          leaveTimer.current = setTimeout(() => activate(null), 100);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) activate(null);
        }}>
        {items.map(({ area, label }) => (
          <Link
            key={area}
            href={`/${area}`}
            lang="en"
            data-color={area}
            className={`group relative isolate flex items-center justify-end gap-8 overflow-hidden bg-[#f5f4ef] dark:bg-[#17191b] px-[12%] py-[30px] font-['Chakra_Petch',sans-serif] text-[clamp(28px,4.5vw,64px)] leading-[1.2] font-medium tracking-[-.035em] transition-colors duration-250 focus-visible:outline-offset-[-6px] before:absolute before:inset-0 before:-z-10 before:origin-right before:bg-[var(--home-solid)] before:transition-transform before:duration-[380ms] before:ease-[cubic-bezier(.2,.75,.25,1)] before:content-[''] motion-reduce:transition-none motion-reduce:before:transition-none max-[650px]:min-h-16 max-[650px]:justify-center max-[650px]:gap-0 max-[650px]:px-2 max-[650px]:py-5 max-[650px]:text-lg max-[650px]:active:opacity-60 ${colors[area]} ${active === area ? "is-active text-[var(--home-on)] before:scale-x-100" : "before:scale-x-0"}`}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") activate(area);
            }}
            onFocus={() => activate(area)}>
            <span className="transition-transform duration-300 group-[.is-active]:translate-x-1.5 motion-reduce:transform-none motion-reduce:transition-none">
              {label}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-10 -translate-x-1.5 translate-y-1.5 opacity-0 transition-[opacity,transform] duration-300 group-[.is-active]:translate-x-0 group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 motion-reduce:transform-none motion-reduce:transition-none max-[650px]:hidden"
            />
          </Link>
        ))}
      </nav>
      <div className="relative isolate order-1 flex min-w-0 items-center max-[650px]:order-2 max-[650px]:items-start">
        <div
          className={`pointer-events-none absolute inset-0 -z-10 isolate motion-reduce:transition-none ${active ? "opacity-100 transition-none" : "opacity-0 transition-opacity duration-[450ms] ease-[ease]"}`}
          aria-hidden="true">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className={`home-color pointer-events-none absolute inset-0 bg-[var(--home-tint)] motion-reduce:animate-none ${colors[layer.area]} ${effect === "sweep" ? "animate-[home-sweep_.6s_cubic-bezier(.16,.65,.22,1)_both]" : "animate-[home-spread_.72s_cubic-bezier(.16,.65,.22,1)_both]"}`}
              data-color={layer.area}
              onAnimationEnd={() => {
                // Keep the completed layer mounted; discard only layers fully covered by it.
                setLayers((previous) => previous.filter((item) => item.id >= layer.id));
              }}
            />
          ))}
        </div>
        <div className="m-auto w-full max-w-[680px] px-[clamp(24px,5vw,80px)] py-[clamp(48px,7vw,100px)] max-[650px]:my-0 max-[650px]:px-6 max-[650px]:py-11">
          {children}
          <a
            className="mt-[30px] inline-flex min-h-11 items-center gap-1.5 text-xs text-[var(--personal-muted)] [overflow-wrap:anywhere] hover:underline hover:underline-offset-[5px] max-[650px]:break-all max-[650px]:text-[11px] [&_svg]:size-3.5"
            href="mailto:hwangseokparis@gmail.com">
            hwangseokparis@gmail.com
            <ArrowUpRight aria-hidden="true" />
          </a>

        </div>
      </div>

    </div>
  );
}
