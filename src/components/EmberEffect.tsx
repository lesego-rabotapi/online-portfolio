import { useEffect, useRef } from "react";

const EmberEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const embers: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = () => {
      if (embers.length > 60) return;
      const maxLife = 120 + Math.random() * 180;
      embers.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(0.5 + Math.random() * 1.5),
        size: 1 + Math.random() * 2.5,
        opacity: 0.6 + Math.random() * 0.4,
        life: 0,
        maxLife,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.x += e.vx + Math.sin(e.life * 0.02) * 0.3;
        e.y += e.vy;
        e.life++;
        const progress = e.life / e.maxLife;
        const alpha = progress < 0.1 ? progress * 10 : (1 - progress) * e.opacity;

        if (e.life >= e.maxLife || alpha <= 0) {
          embers.splice(i, 1);
          continue;
        }

        // Glow
        const gradient = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 3);
        gradient.addColorStop(0, `hsla(30, 80%, 55%, ${alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(30, 80%, 55%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `hsla(38, 70%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (Math.random() < 0.3) spawn();
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ opacity: 0.7 }}
    />
  );
};

export default EmberEffect;
