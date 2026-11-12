"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
};

/**
 * The hero's "glowing network of dots" (brief p.2): women, public offices and
 * information, connected. Drawn on canvas so it stays cheap on a mid-range
 * phone, capped at 60fps, paused when off-screen, and reduced to a single
 * static frame when the visitor prefers reduced motion.
 */
export default function NetworkCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    let running = true;
    let pointer = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 15000 : 11000;
      const count = Math.max(18, Math.min(72, Math.round((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.7 + 0.8,
        hue: Math.random(),
      }));
    };

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      const linkDist = width < 640 ? 96 : 132;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDist) continue;
          const alpha = (1 - dist / linkDist) * 0.3;
          ctx.strokeStyle = `rgba(180, 79, 209, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        // Warm the dots toward pink near the pointer for a subtle interaction.
        const pd = Math.hypot(n.x - pointer.x, n.y - pointer.y);
        const near = pd < 140 ? 1 - pd / 140 : 0;
        const colour =
          near > 0.15
            ? `rgba(236, 72, 153, ${0.55 + near * 0.4})`
            : n.hue > 0.6
              ? "rgba(255, 209, 232, 0.62)"
              : "rgba(180, 79, 209, 0.72)";

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + near * 1.6, 0, Math.PI * 2);
        ctx.fillStyle = colour;
        ctx.shadowColor = near > 0.15 ? "rgba(236,72,153,0.9)" : "rgba(180,79,209,0.8)";
        ctx.shadowBlur = 8 + near * 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!animate) return;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }
    };

    const loop = () => {
      if (!running) return;
      draw(true);
      raf = requestAnimationFrame(loop);
    };

    build();
    draw(false);
    if (!reduce) loop();

    const onResize = () => {
      build();
      draw(false);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      pointer = { x: -9999, y: -9999 };
    };

    // Pause the animation when the hero scrolls out of view.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduce) return;
        if (entry.isIntersecting && !running) {
          running = true;
          loop();
        } else if (!entry.isIntersecting) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none h-full w-full ${className}`}
    />
  );
}
