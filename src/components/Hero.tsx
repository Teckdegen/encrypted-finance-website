"use client";

import { useEffect, useRef } from "react";

export function Hero() {
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

    // Grid particles that move along the lines
    const gridSize = 50;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];

    const spawnParticle = () => {
      const isHorizontal = Math.random() > 0.5;
      if (isHorizontal) {
        const row = Math.floor(Math.random() * (height / gridSize)) * gridSize;
        particles.push({
          x: 0,
          y: row,
          vx: 0.5 + Math.random() * 1.5,
          vy: 0,
          life: 0,
          maxLife: width / (0.5 + Math.random() * 1.5),
        });
      } else {
        const col = Math.floor(Math.random() * (width / gridSize)) * gridSize;
        particles.push({
          x: col,
          y: 0,
          vx: 0,
          vy: 0.5 + Math.random() * 1.5,
          life: 0,
          maxLife: height / (0.5 + Math.random() * 1.5),
        });
      }
    };

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
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

      // Spawn particles periodically
      frame++;
      if (frame % 30 === 0 && particles.length < 15) {
        spawnParticle();
      }

      // Draw and update particles (moving dots along grid lines)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Trail effect
        const trailLength = 40;
        const alpha = Math.min(1, (p.maxLife - p.life) / 60);

        // Draw trail
        ctx.beginPath();
        if (p.vx !== 0) {
          ctx.moveTo(p.x - trailLength * Math.sign(p.vx), p.y);
          ctx.lineTo(p.x, p.y);
        } else {
          ctx.moveTo(p.x, p.y - trailLength * Math.sign(p.vy));
          ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.4 * alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw dot head
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${0.8 * alpha})`;
        ctx.fill();

        // Remove if off screen or life exceeded
        if (p.life > p.maxLife || p.x > width || p.y > height) {
          particles.splice(i, 1);
        }
      }

      // Draw glowing intersections occasionally
      const time = Date.now() * 0.001;
      for (let x = gridSize; x < width; x += gridSize * 3) {
        for (let y = gridSize; y < height; y += gridSize * 3) {
          const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          if (pulse > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, 2 + pulse * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 0, 0, ${0.08 * pulse})`;
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
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      {/* Light background base */}
      <div className="pointer-events-none absolute inset-0 bg-[#f0ebe2]" />

      {/* Animated grid canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 pt-20">
        {/* Left side — text */}
        <div>
          <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[#0a0a0a] sm:text-[3rem] md:text-[3.5rem]">
            Encrypted Layer
            <br />
            for Public Chains
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#0a0a0a]/60">
            Most blockchains put your financial life on display. Every payment,
            business transaction, and payroll detail is permanently broadcasted
            to the world. Encrypted enables private and compliant finance.
          </p>
        </div>

        {/* Right side — interactive globe */}
        <div className="relative hidden md:flex items-center justify-center">
          <InteractiveGlobe />
        </div>
      </div>
    </section>
  );
}

function InteractiveGlobe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    let animationId: number;

    const animate = () => {
      rotationRef.current += 0.15;
      const svg = svgRef.current;
      if (svg) {
        const meridians = svg.querySelectorAll(".meridian");
        meridians.forEach((m, i) => {
          const offset = rotationRef.current + i * 40;
          (m as SVGElement).style.strokeDashoffset = `${offset}`;
        });

        const nodes = svg.querySelectorAll(".node-pulse");
        nodes.forEach((n, i) => {
          const scale = 1 + Math.sin(Date.now() * 0.002 + i) * 0.3;
          (n as SVGElement).style.transform = `scale(${scale})`;
          (n as SVGElement).style.transformOrigin = "center";
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      fill="none"
      className="w-full max-w-[400px] h-auto"
    >
      {/* Outer globe circle */}
      <circle
        cx="200"
        cy="200"
        r="160"
        stroke="#0a0a0a"
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.2"
      />
      <circle
        cx="200"
        cy="200"
        r="120"
        stroke="#0a0a0a"
        strokeWidth="0.5"
        strokeDasharray="3 5"
        opacity="0.15"
        className="meridian"
      />
      <circle
        cx="200"
        cy="200"
        r="80"
        stroke="#0a0a0a"
        strokeWidth="0.5"
        strokeDasharray="2 6"
        opacity="0.1"
        className="meridian"
      />

      {/* Latitude ellipses */}
      <ellipse cx="200" cy="150" rx="140" ry="25" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.15" className="meridian" fill="none" />
      <ellipse cx="200" cy="200" rx="160" ry="35" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" className="meridian" fill="none" />
      <ellipse cx="200" cy="250" rx="140" ry="25" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.15" className="meridian" fill="none" />

      {/* Vertical meridians */}
      <ellipse cx="200" cy="200" rx="30" ry="160" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.15" className="meridian" fill="none" />
      <ellipse cx="200" cy="200" rx="80" ry="160" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.12" className="meridian" fill="none" />
      <ellipse cx="200" cy="200" rx="130" ry="160" stroke="#0a0a0a" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.1" className="meridian" fill="none" />

      {/* Connection lines between chain nodes */}
      <line x1="140" y1="130" x2="270" y2="120" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="270" y1="120" x2="300" y2="200" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="300" y1="200" x2="260" y2="290" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="140" y1="130" x2="120" y2="230" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="120" y1="230" x2="180" y2="300" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="180" y1="300" x2="260" y2="290" stroke="#0a0a0a" strokeWidth="0.8" opacity="0.25" />
      <line x1="140" y1="130" x2="200" y2="200" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.3" />
      <line x1="200" y1="200" x2="300" y2="200" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.3" />

      {/* Chain nodes */}
      <g className="node-pulse">
        <circle cx="140" cy="130" r="8" fill="#0a0a0a" />
      </g>
      <g className="node-pulse">
        <circle cx="270" cy="120" r="7" fill="#0a0a0a" />
      </g>
      <g className="node-pulse">
        <circle cx="300" cy="200" r="8" fill="#0a0a0a" />
      </g>
      <g className="node-pulse">
        <circle cx="120" cy="230" r="6" fill="#0a0a0a" />
      </g>
      <g className="node-pulse">
        <circle cx="260" cy="290" r="7" fill="#8b5cf6" />
      </g>
      <g className="node-pulse">
        <circle cx="180" cy="300" r="6" fill="#8b5cf6" />
      </g>
      <g className="node-pulse">
        <circle cx="200" cy="200" r="5" fill="#8b5cf6" />
      </g>

      {/* Labels */}
      <text x="145" y="118" fontSize="9" fill="#0a0a0a" opacity="0.7" fontFamily="monospace">ETH</text>
      <text x="275" y="110" fontSize="9" fill="#0a0a0a" opacity="0.7" fontFamily="monospace">SOL</text>
      <text x="308" y="198" fontSize="9" fill="#0a0a0a" opacity="0.7" fontFamily="monospace">SUI</text>
      <text x="95" y="225" fontSize="9" fill="#0a0a0a" opacity="0.7" fontFamily="monospace">APT</text>
      <text x="265" y="305" fontSize="9" fill="#8b5cf6" opacity="0.8" fontFamily="monospace">MONAD</text>
      <text x="155" y="315" fontSize="9" fill="#8b5cf6" opacity="0.8" fontFamily="monospace">BERA</text>
    </svg>
  );
}
