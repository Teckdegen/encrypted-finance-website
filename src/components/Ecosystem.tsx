"use client";

import { useState } from "react";

const chains = [
  {
    name: "Ethereum",
    category: "EVM",
    description:
      "Private transactions and confidential DeFi on the largest smart contract platform, powered by encrypted infrastructure.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L5 14.5L14 19.5L23 14.5L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 16L14 26L23 16L14 21L5 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Solana",
    category: "SVM",
    description:
      "High-speed private finance on Solana with encrypted balances and shielded trading activity.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20L23 20L19 24H5L5 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 12L23 12L19 16H5L5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M23 4L5 4L9 8H23V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sui",
    category: "Move",
    description:
      "Object-based privacy primitives enabling confidential asset transfers on Sui's parallel execution layer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14C10 11 12 9 14 9C16 9 18 11 18 14C18 17 16 19 14 19C12 19 10 17 10 14Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Aptos",
    category: "Move",
    description:
      "Encrypted financial modules for Aptos, bringing private DeFi to the Move ecosystem.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 14L14 24L24 14L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 10L9 14L14 18L19 14L14 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Monad",
    category: "EVM",
    description:
      "Privacy-first infrastructure for Monad's high-throughput EVM environment with parallel execution.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14H19M14 9V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Berachain",
    category: "EVM",
    description:
      "Confidential liquidity and private trading on Berachain's proof-of-liquidity consensus.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 20C8 20 10 22 14 22C18 22 20 20 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8C6 8 8 4 14 4C20 4 22 8 22 8V16C22 20.4 18.4 24 14 24C9.6 24 6 20.4 6 16V8Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Ecosystem() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = Math.max(0, chains.length - 2);

  const scrollLeft = () => setScrollIndex((i) => Math.max(0, i - 1));
  const scrollRight = () => setScrollIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="ecosystem" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            The latest and greatest
          </h2>
        </div>

        {/* Cards carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${scrollIndex * (100 / 2)}%)` }}
          >
            {chains.map((chain) => (
              <a
                key={chain.name}
                href="#"
                className="group flex flex-col min-w-[calc(50%-16px)] flex-shrink-0 rounded-3xl bg-[#161616] p-8 transition-all hover:scale-[1.01] hover:bg-[#1a1a1a] border border-white/5 h-[320px]"
              >
                {/* Top row: icon + category badge */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#202020] text-accent">
                    {chain.icon}
                  </div>
                  <span className="rounded-full bg-accent text-background px-4 py-1.5 text-xs font-semibold">
                    {chain.category}
                  </span>
                </div>

                {/* Chain name */}
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {chain.name}
                </h3>

                {/* Description & View Button */}
                <div className="mt-auto flex items-end justify-between gap-4">
                  <p className="text-sm leading-relaxed text-foreground/60 max-w-[80%]">
                    {chain.description}
                  </p>
                  
                  {/* View link */}
                  <div className="flex items-center gap-2 text-sm font-bold text-accent opacity-90 transition-opacity group-hover:opacity-100 uppercase tracking-widest">
                    VIEW
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={scrollLeft}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface transition-colors hover:border-foreground/30 hover:bg-surface-light"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 4L6 8L10 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface transition-colors hover:border-foreground/30 hover:bg-surface-light"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
