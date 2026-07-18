import { useEffect, useRef } from "react";

type CausticsProps = {
  blobs?: number;
  alpha?: number;
  top?: string;
  bottom?: string;
  className?: string;
};

// Ambient "light through water" canvas. Renders at half resolution for a
// soft, video-like look and only animates while on screen.
export function Caustics({
  blobs = 7,
  alpha = 0.16,
  top = "#0a3a42",
  bottom = "#05262c",
  className = "lm-canvas",
}: CausticsProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let t = Math.random() * 100;
    let running = false;
    let raf = 0;

    const drops = Array.from({ length: blobs }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.18 + Math.random() * 0.3,
      sx: 0.4 + Math.random() * 0.8,
      sy: 0.3 + Math.random() * 0.6,
      ph: Math.random() * Math.PI * 2,
    }));

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.max(1, W * dpr * 0.5);
      canvas.height = Math.max(1, H * dpr * 0.5);
      ctx.setTransform(canvas.width / Math.max(W, 1), 0, 0, canvas.height / Math.max(H, 1), 0, 0);
    };

    const frame = () => {
      t += 0.0038;
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, top);
      g.addColorStop(1, bottom);
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      drops.forEach((b, i) => {
        const x = (Math.sin(t * b.sx + b.ph) * 0.38 + 0.5 + b.x * 0.14) * W;
        const y = (Math.cos(t * b.sy + b.ph * 1.7) * 0.32 + 0.45 + b.y * 0.16) * H;
        const r = b.r * Math.max(W, H) * (1 + 0.12 * Math.sin(t * 1.3 + i));
        const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
        const a = alpha * (0.7 + 0.3 * Math.sin(t * 0.9 + i * 2));
        rg.addColorStop(0, `rgba(120,235,220,${a.toFixed(3)})`);
        rg.addColorStop(0.55, `rgba(60,170,175,${(a * 0.35).toFixed(3)})`);
        rg.addColorStop(1, "rgba(20,90,110,0)");
        ctx.fillStyle = rg;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 7);
        ctx.fill();
      });
      ctx.lineWidth = 1.2;
      for (let k = 0; k < 3; k++) {
        ctx.beginPath();
        for (let px = 0; px <= W; px += 14) {
          const py =
            H * (0.25 + k * 0.25) +
            Math.sin(px * 0.012 + t * (1.1 + k * 0.3) + k * 9) * H * 0.06 +
            Math.sin(px * 0.003 - t * 0.7) * H * 0.05;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(140,240,225,${(alpha * 0.5).toFixed(3)})`;
        ctx.stroke();
      }
      if (running && !reduced) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      size();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onResize = () => {
      size();
      if (reduced) frame();
    };
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.02 }
    );
    io.observe(canvas);

    size();
    frame();

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [blobs, alpha, top, bottom]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
