"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const fullText = "ENCRYPTED";
  const [displayText, setDisplayText] = useState(fullText);

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

      <div className="relative z-10 text-center">
        {/* Subtitle above */}
        <p className="mb-6 text-sm text-[#0a0a0a]/50 md:text-base">
          Private financial infrastructure for blockchain ecosystems.
        </p>

        {/* Main animated text with brackets */}
        <div className="flex items-center justify-center">
          <span className="text-5xl font-light text-[#0a0a0a]/20 md:text-7xl lg:text-8xl select-none">
            &lt;/
          </span>
          <h1 className="font-mono text-5xl font-bold tracking-tight text-[#0a0a0a] md:text-7xl lg:text-8xl">
            {displayText}
          </h1>
          <span className="text-5xl font-light text-[#0a0a0a]/20 md:text-7xl lg:text-8xl select-none">
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
}
