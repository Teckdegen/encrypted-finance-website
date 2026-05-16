"use client";

import { useEffect, useRef, useState } from "react";

export function Hero() {
  const fullText = "ENCRYPTED";
  const [displayText, setDisplayText] = useState(fullText);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Text animation
  useEffect(() => {
    const symbols = "*";
    let timeout: NodeJS.Timeout;
    let step = 0;
    let phase: "visible" | "encrypting" | "decrypting" = "visible";

    const cycle = () => {
      if (phase === "visible") {
        timeout = setTimeout(() => {
          phase = "encrypting";
          step = 0;
          cycle();
        }, 3000);
      } else if (phase === "encrypting") {
        if (step <= fullText.length) {
          const text =
            fullText.slice(0, fullText.length - step) +
            symbols.repeat(step);
          setDisplayText(text);
          step++;
          timeout = setTimeout(cycle, 100);
        } else {
          timeout = setTimeout(() => {
            phase = "decrypting";
            step = 0;
            cycle();
          }, 600);
        }
      } else if (phase === "decrypting") {
        if (step <= fullText.length) {
          const text =
            fullText.slice(0, step) +
            symbols.repeat(fullText.length - step);
          setDisplayText(text);
          step++;
          timeout = setTimeout(cycle, 100);
        } else {
          setDisplayText(fullText);
          phase = "visible";
          timeout = setTimeout(cycle, 3000);
        }
      }
    };

    cycle();
    return () => clearTimeout(timeout);
  }, []);

  // Terminal background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const lines = [
      "$ encrypted --init --chain ethereum",
      "generating keypair... done",
      "encrypting transaction payload...",
      "0x4a9f...c3d2 → shielded",
      "$ verify --proof zk_snark",
      "proof valid ✓",
      "$ deploy --network mainnet",
      "contract: 0x8b5c...f246",
      "$ encrypted --balance --private",
      "balance: [ENCRYPTED]",
      "$ tx.send({ to: 0x..., value: *** })",
      "status: confirmed (private)",
      "$ fhe.compute(balance + deposit)",
      "result: [CIPHERTEXT]",
      "$ zkp.generate --circuit transfer",
      "witness computed... proof ready",
      "$ encrypted --shield --amount ***",
      "shielding complete",
      "$ query --state encrypted",
      "state: [REDACTED]",
    ];

    let scrollOffset = 0;
    const lineHeight = 22;
    const scrollSpeed = 0.25;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = "11px monospace";

      scrollOffset += scrollSpeed;
      const totalHeight = lines.length * lineHeight;
      if (scrollOffset > totalHeight) scrollOffset = 0;

      // Layer 1
      for (let i = 0; i < lines.length * 3; i++) {
        const lineIndex = i % lines.length;
        const y = (i * lineHeight) - scrollOffset + height * 0.05;
        if (y < -lineHeight || y > height + lineHeight) continue;
        const x = 30 + (i % 5) * (width / 5);
        ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
        ctx.fillText(lines[lineIndex], x, y);
      }

      // Layer 2 (slower, offset)
      for (let i = 0; i < lines.length * 2; i++) {
        const lineIndex = (i + 7) % lines.length;
        const y = (i * lineHeight * 1.4) - (scrollOffset * 0.5) + height * 0.2;
        if (y < -lineHeight || y > height + lineHeight) continue;
        const x = width * 0.1 + (i % 4) * (width / 4);
        ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
        ctx.fillText(lines[lineIndex], x, y);
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
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[#f0ebe2]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Terminal text canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center">
        {/* Subtitle above */}
        <p className="mb-8 text-sm text-[#0a0a0a]/50 md:text-base">
          Private financial infrastructure for blockchain ecosystems.
        </p>

        {/* Main animated text with brackets — 1.5x bigger */}
        <div className="flex items-center justify-center">
          <span className="text-7xl font-light text-[#0a0a0a]/20 md:text-9xl lg:text-[10rem] select-none">
            &lt;/
          </span>
          <h1 className="font-mono text-7xl font-bold tracking-tight text-[#0a0a0a] md:text-9xl lg:text-[10rem]">
            {displayText}
          </h1>
          <span className="text-7xl font-light text-[#0a0a0a]/20 md:text-9xl lg:text-[10rem] select-none">
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
