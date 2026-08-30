"use client";

import { useEffect, useRef } from "react";

const GLYPHS = ["*", "*", "*", "*", "·", "·", ",", "'", ";", ":", "→"] as const;

type Mark = {
  el: HTMLSpanElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  spin: number;
};

export default function HeroPunctuation() {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const layer = layerRef.current;
    const stage = root?.parentElement;
    if (!root || !layer || !stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const count = desktop ? 64 : 38;

    layer.replaceChildren();
    const marks: Mark[] = [];

    for (let i = 0; i < count; i += 1) {
      const el = document.createElement("span");
      const glyph = GLYPHS[i % GLYPHS.length];
      el.textContent = glyph;
      el.className = glyph === "*" ? "hero-mark hero-mark-star" : "hero-mark";
      const size =
        glyph === "*" ? 16 + Math.random() * 26 : 13 + Math.random() * 12;
      el.style.fontSize = `${size}px`;
      el.style.opacity = String(desktop ? 0.42 + Math.random() * 0.48 : 0.32 + Math.random() * 0.5);
      layer.appendChild(el);
      marks.push({
        el,
        x: Math.random() * 0.92 + 0.04,
        y: Math.random() * 0.88 + 0.06,
        vx: (Math.random() - 0.5) * 0.0004,
        vy: (Math.random() - 0.5) * 0.00032,
        phase: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.18,
      });
    }

    const pointer = { x: 0.32, y: 0.42, active: false, burst: 0 };
    let burstX = 0.5;
    let burstY = 0.45;

    const locate = (event: PointerEvent) => {
      const box = stage.getBoundingClientRect();
      return {
        x: (event.clientX - box.left) / box.width,
        y: (event.clientY - box.top) / box.height,
      };
    };

    const onMove = (event: PointerEvent) => {
      const next = locate(event);
      pointer.x = next.x;
      pointer.y = next.y;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onDown = (event: PointerEvent) => {
      const next = locate(event);
      burstX = next.x;
      burstY = next.y;
      pointer.burst = 1;
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    stage.addEventListener("pointerdown", onDown);

    let frame = 0;
    let tick = 0;

    const place = (mark: Mark, dx = 0, dy = 0, rotate = 0) => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      mark.el.style.transform = `translate3d(${(mark.x + dx) * width}px, ${(mark.y + dy) * height}px, 0) rotate(${rotate}deg)`;
    };

    for (const mark of marks) place(mark);

    const step = () => {
      tick += 1;
      if (pointer.burst > 0) pointer.burst *= 0.935;

      for (const mark of marks) {
        if (!reduceMotion) {
          mark.x += mark.vx;
          mark.y += mark.vy;
          mark.phase += 0.01;
          if (mark.x < 0.03 || mark.x > 0.97) mark.vx *= -1;
          if (mark.y < 0.05 || mark.y > 0.95) mark.vy *= -1;
        }

        let dx = 0;
        let dy = 0;
        const originX = pointer.burst > 0.03 ? burstX : pointer.x;
        const originY = pointer.burst > 0.03 ? burstY : pointer.y;
        const offsetX = mark.x - originX;
        const offsetY = mark.y - originY;
        const dist = Math.sqrt(offsetX * offsetX + offsetY * offsetY) || 0.0001;

        if (pointer.burst > 0.03) {
          const force = (pointer.burst * 0.2) / dist;
          dx += offsetX * force;
          dy += offsetY * force;
        } else if (pointer.active && dist < 0.32) {
          const pull = (0.32 - dist) * 0.28;
          dx -= offsetX * pull;
          dy -= offsetY * pull;
        }

        const bobX = reduceMotion ? 0 : Math.sin(mark.phase) * 5;
        const bobY = reduceMotion ? 0 : Math.cos(mark.phase * 0.85) * 4;
        place(
          mark,
          dx + bobX / stage.clientWidth,
          dy + bobY / stage.clientHeight,
          reduceMotion ? 0 : mark.spin * tick,
        );
      }

      if (!reduceMotion) frame = window.requestAnimationFrame(step);
    };

    if (!reduceMotion) frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="hero-punctuation" aria-hidden="true">
      <span className="hero-crop hero-crop-tl" />
      <span className="hero-crop hero-crop-tr" />
      <span className="hero-crop hero-crop-bl" />
      <span className="hero-crop hero-crop-br" />
      <span className="hero-ghost-asterisk">*</span>
      <div ref={layerRef} className="hero-mark-layer" />
    </div>
  );
}
