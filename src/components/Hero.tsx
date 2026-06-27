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
    <section className="relative bg-surface-light px-3 pb-6 pt-20 sm:px-4 sm:pb-8 sm:pt-24 md:px-6 md:pb-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative flex min-h-[calc(100dvh-6rem)] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#111110] sm:min-h-[calc(100dvh-7rem)] sm:rounded-[2rem] md:rounded-[2.5rem]">
          {/* Scanline texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 3px)",
            }}
          />

          {/* Soft ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(240,235,226,0.07),transparent_70%)]" />

          {/* Bottom orb */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[55%] w-[130%] max-w-[720px] -translate-x-1/2 translate-y-[58%] rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(240,235,226,0.14),rgba(240,235,226,0.04)_45%,transparent_70%)] sm:w-[110%]" />

          {/* Main content */}
          <div className="relative z-10 w-full px-4 py-16 text-center sm:px-8 sm:py-20">
            <span className="sr-only">&lt;/ENCRYPTED&gt;</span>
            <h1 aria-hidden="true" className="flex items-center justify-center whitespace-nowrap font-sans font-bold leading-none tracking-[-0.04em] text-[#f0ebe2]">
              <span
                className="select-none text-[clamp(1.65rem,7.5vw,5.5rem)] font-light text-[#f0ebe2]/35"
                aria-hidden="true"
              >
                &lt;/
              </span>
              <span className="font-mono text-[clamp(1.65rem,7.5vw,5.5rem)] tracking-[-0.06em]">
                {displayText}
              </span>
              <span
                className="select-none text-[clamp(1.65rem,7.5vw,5.5rem)] font-light text-[#f0ebe2]/35"
                aria-hidden="true"
              >
                &gt;
              </span>
            </h1>

            <p className="mt-5 text-[clamp(0.75rem,2.8vw,1.125rem)] font-medium tracking-wide text-[#f0ebe2]/50 sm:mt-6">
              the Encrypted layer
            </p>

            <a
              href="/chains"
              className="mt-6 inline-flex h-10 items-center rounded-full bg-[#f0ebe2] px-7 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111110] transition-opacity hover:opacity-85 sm:mt-8 sm:h-11 sm:px-9 sm:text-xs"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
