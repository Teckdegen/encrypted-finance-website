"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const gridSize = 50;

    // Particles that travel along grid lines
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }[] = [];

    const spawnParticle = () => {
      const isHorizontal = Math.random() > 0.5;
      if (isHorizontal) {
        const row = Math.floor(Math.random() * (height / gridSize)) * gridSize;
        const speed = 0.4 + Math.random() * 1.2;
        const startLeft = Math.random() > 0.5;
        particles.push({
          x: startLeft ? 0 : width,
          y: row,
          vx: startLeft ? speed : -speed,
          vy: 0,
          life: 0,
          maxLife: width / speed,
        });
      } else {
        const col = Math.floor(Math.random() * (width / gridSize)) * gridSize;
        const speed = 0.4 + Math.random() * 1.2;
        const startTop = Math.random() > 0.5;
        particles.push({
          x: col,
          y: startTop ? 0 : height,
          vx: 0,
          vy: startTop ? speed : -speed,
          life: 0,
          maxLife: height / speed,
        });
      }
    };

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw static grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.04)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Spawn particles
      frame++;
      if (frame % 20 === 0 && particles.length < 25) {
        spawnParticle();
      }

      // Draw particles with trails
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const trailLength = 50;
        const fadeIn = Math.min(1, p.life / 30);
        const fadeOut = Math.min(1, (p.maxLife - p.life) / 60);
        const alpha = fadeIn * fadeOut;

        // Trail
        const gradient = ctx.createLinearGradient(
          p.vx !== 0 ? p.x - trailLength * Math.sign(p.vx) : p.x,
          p.vy !== 0 ? p.y - trailLength * Math.sign(p.vy) : p.y,
          p.x,
          p.y
        );
        gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
        gradient.addColorStop(1, `rgba(0, 0, 0, ${0.25 * alpha})`);

        ctx.beginPath();
        if (p.vx !== 0) {
          ctx.moveTo(p.x - trailLength * Math.sign(p.vx), p.y);
          ctx.lineTo(p.x, p.y);
        } else {
          ctx.moveTo(p.x, p.y - trailLength * Math.sign(p.vy));
          ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Dot head
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${0.5 * alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${0.08 * alpha})`;
        ctx.fill();

        // Remove if done
        if (p.life > p.maxLife || p.x > width + 10 || p.x < -10 || p.y > height + 10 || p.y < -10) {
          particles.splice(i, 1);
        }
      }

      // Pulsing intersection dots
      const time = Date.now() * 0.001;
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          const pulse = Math.sin(time * 0.8 + x * 0.005 + y * 0.007) * 0.5 + 0.5;
          if (pulse > 0.6) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5 + pulse * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 0, 0, ${0.06 * pulse})`;
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
