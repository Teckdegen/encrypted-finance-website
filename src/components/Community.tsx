"use client";

import { useEffect, useRef } from "react";

export function Community() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    // Terminal-style code lines
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
    ];

    let scrollOffset = 0;
    const lineHeight = 20;
    const scrollSpeed = 0.3;

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

      // Draw scrolling terminal text
      ctx.font = "11px monospace";
      const totalHeight = lines.length * lineHeight;

      scrollOffset += scrollSpeed;
      if (scrollOffset > totalHeight) scrollOffset = 0;

      for (let i = 0; i < lines.length * 3; i++) {
        const lineIndex = i % lines.length;
        const y = (i * lineHeight) - scrollOffset + height * 0.1;

        if (y < -lineHeight || y > height + lineHeight) continue;

        // Spread lines across the width
        const x = 20 + (i % 4) * (width / 4);

        ctx.fillStyle = `rgba(240, 235, 226, 0.04)`;
        ctx.fillText(lines[lineIndex], x, y);
      }

      // Second layer offset for depth
      for (let i = 0; i < lines.length * 2; i++) {
        const lineIndex = (i + 5) % lines.length;
        const y = (i * lineHeight * 1.5) - (scrollOffset * 0.6) + height * 0.3;

        if (y < -lineHeight || y > height + lineHeight) continue;

        const x = width * 0.15 + (i % 3) * (width / 3.5);

        ctx.fillStyle = `rgba(240, 235, 226, 0.025)`;
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
    <section id="community" className="relative px-6 py-32 bg-[#0f0f12] overflow-hidden">
      {/* Terminal background animation */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col gap-4">
          {/* X / Twitter card */}
          <a
            href="https://x.com/Encryptedfi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm px-8 py-6 transition-all hover:bg-white/[0.06] md:px-10 md:py-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0ebe2]/70">
              Find us on the feed
            </p>
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-base font-mono text-white">X.com</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-white/40 transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          {/* Telegram card */}
          <a
            href="https://t.me/encryptedfi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm px-8 py-6 transition-all hover:bg-white/[0.06] md:px-10 md:py-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0ebe2]/70">
              Join our community
            </p>
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="text-base font-mono text-white">Telegram</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-white/40 transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          {/* Docs card */}
          <a
            href="#"
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm px-8 py-6 transition-all hover:bg-white/[0.06] md:px-10 md:py-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0ebe2]/70">
              Read the docs
            </p>
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-white"
              >
                <path
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-mono text-white">Docs</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-white/40 transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
