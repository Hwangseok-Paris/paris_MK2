"use client";

import { useEffect, useRef } from "react";

/**
 * BackgroundCanvas – comet style (fixed fading tail)
 *
 * ▸ Flicker‑free tail (moveTo joins head).
 * ▸ Comets fully leave screen before despawn.
 * ▸ Theme change → colour swap + direction flip.
 */
export default function BackgroundCanvas() {
  /* Canvas handles */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  /* Tunables */
  const MAX_COMETS = 8; // on‑screen comets
  const TRAIL_LEN = 30; // fixed tail size
  const SPEED_MIN = 1; // px / frame (deep)
  const SPEED_MAX = 6; // px / frame (near)

  const COLOURS_LIGHT = [
    "#34d399", // emerald‑400
    "#38bdf8", // sky‑400
    "#f472b6", // pink‑400
    "#fbbf24", // amber‑400
    "#fb7185", // rose‑400
    "#4ade80", // green‑400
  ];
  const COLOURS_DARK = [
    "#e0f2fe", // sky‑100
    "#bae6fd", // sky‑200
    "#fecaca", // rose‑200
    "#fde68a", // amber‑200
    "#a5f3fc", // cyan‑200
    "#ddd6fe", // violet‑200
  ];

  /* Helpers */
  const palette = () =>
    document.documentElement.classList.contains("dark") ? COLOURS_DARK : COLOURS_LIGHT;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Size & DPR */
    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    addEventListener("resize", resize);

    /* Model */
    interface Comet {
      x: number;
      y: number;
      z: number; // depth 0‑1
      vx: number;
      colour: string;
      trail: { x: number; y: number }[];
    }
    const comets: Comet[] = [];

    const spawn = () => {
      const z = Math.random();
      const dir = Math.random() < 0.5 ? 1 : -1;
      const speed = lerp(SPEED_MIN, SPEED_MAX, 1 - z);
      const { width, height } = canvas;
      comets.push({
        x: dir === 1 ? -50 : width / devicePixelRatio + 50,
        y: (Math.random() * height) / devicePixelRatio,
        z,
        vx: dir * speed,
        colour: palette()[Math.floor(Math.random() * palette().length)],
        trail: [],
      });
    };
    for (let i = 0; i < MAX_COMETS; i++) spawn();

    /* Animation loop */
    const step = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      if (comets.length < MAX_COMETS) spawn();

      comets.forEach((c, idx) => {
        c.x += c.vx;
        c.trail.push({ x: c.x, y: c.y });
        if (c.trail.length > TRAIL_LEN) c.trail.shift();

        const bounds = width / devicePixelRatio + 200;
        if (c.x < -200 || c.x > bounds) {
          comets.splice(idx, 1);
          return;
        }

        /* draw tail */
        ctx.beginPath();
        ctx.strokeStyle = c.colour;
        ctx.lineCap = "round";
        ctx.lineWidth = lerp(6, 3, c.z);
        ctx.shadowColor = c.colour;
        ctx.shadowBlur = lerp(14, 6, c.z);

        ctx.moveTo(c.x, c.y);
        for (let i = c.trail.length - 1; i >= 0; i--) {
          ctx.globalAlpha = (1 - i / c.trail.length) * 0.85;
          ctx.lineTo(c.trail[i].x, c.trail[i].y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;

        /* head glow */
        ctx.beginPath();
        ctx.fillStyle = c.colour;
        ctx.shadowColor = c.colour;
        ctx.shadowBlur = lerp(22, 8, c.z);
        ctx.arc(c.x, c.y, lerp(5, 2, c.z), 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    /* Theme change: recolour & reverse direction */
    const themeObserver = new MutationObserver(() => {
      const p = palette();
      comets.forEach((c) => {
        c.colour = p[Math.floor(Math.random() * p.length)];
        c.vx *= -1;
      });
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full" />;
}
