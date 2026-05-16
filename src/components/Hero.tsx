"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const fullText = "ENCRYPTED";
  const [displayText, setDisplayText] = useState(fullText);
  const [phase, setPhase] = useState<"visible" | "encrypting" | "decrypting">("visible");

  useEffect(() => {
    const chars = "!@#$%^&*?~";
    let timeout: NodeJS.Timeout;
    let step = 0;

    const cycle = () => {
      if (phase === "visible") {
        // Stay visible for a moment then start encrypting
        timeout = setTimeout(() => {
          setPhase("encrypting");
          step = 0;
        }, 2500);
      } else if (phase === "encrypting") {
        // Replace characters one by one with *
        if (step <= fullText.length) {
          const encrypted =
            fullText.slice(0, fullText.length - step) +
            Array.from({ length: step }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
          setDisplayText(encrypted);
          step++;
          timeout = setTimeout(cycle, 80);
        } else {
          // All encrypted, pause then decrypt
          timeout = setTimeout(() => {
            setPhase("decrypting");
            step = 0;
          }, 800);
        }
      } else if (phase === "decrypting") {
        // Reveal characters one by one
        if (step <= fullText.length) {
          const decrypted =
            fullText.slice(0, step) +
            Array.from({ length: fullText.length - step }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
          setDisplayText(decrypted);
          step++;
          timeout = setTimeout(cycle, 80);
        } else {
          setDisplayText(fullText);
          setPhase("visible");
        }
      }
    };

    cycle();
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Subtitle */}
        <p className="mb-6 text-sm tracking-wide text-[#0a0a0a]/50 md:text-base">
          Private financial infrastructure for blockchain ecosystems.
        </p>

        {/* Main animated text */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-light text-[#0a0a0a]/30 md:text-6xl">&lt;/</span>
          <h1 className="font-mono text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl md:text-7xl lg:text-8xl">
            {displayText}
          </h1>
          <span className="text-4xl font-light text-[#0a0a0a]/30 md:text-6xl">&gt;</span>
        </div>

        {/* Tagline below */}
        <p className="mt-8 text-sm text-[#0a0a0a]/40 md:text-base">
          Encrypted Layer for Public Chains
        </p>
      </div>
    </section>
  );
}
