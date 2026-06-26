"use client";

import { useState } from "react";
import { DocsShell } from "@/components/docs/DocsShell";

const nav = [
  { id: "introduction", label: "Introduction", icon: "home" },
  { id: "flare", label: "Flare", icon: "link" },
  { id: "monad", label: "Monad", icon: "link" },
  { id: "megaeth", label: "MegaETH", icon: "link" },
];

const chains = [
  {
    id: "flare",
    name: "Flare",
    description: "Private DeFi execution layer powered by Flare Confidential Compute.",
    href: "/flare",
    tags: ["EVM", "TEE"],
    live: true,
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
  },
  {
    id: "monad",
    name: "Monad",
    description: "High-performance EVM chain with private financial infrastructure coming soon.",
    href: "#",
    tags: ["EVM"],
    live: false,
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
  },
  {
    id: "megaeth",
    name: "MegaETH",
    description: "Real-time Ethereum L2 with encrypted finance support coming soon.",
    href: "#",
    tags: ["EVM"],
    live: false,
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
  },
];

export default function ChainsPage() {
  const [active, setActive] = useState("introduction");

  return (
    <DocsShell
      nav={nav}
      toc={nav}
      active={active}
      onActiveChange={setActive}
    >
      <section id="introduction" className="scroll-mt-20 py-6">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
          Get Started
        </p>
        <h1 className="font-serif text-[32px] leading-tight md:text-[38px]">
          Supported Chains
        </h1>
        <p className="mt-5 text-[15px] leading-[1.8] text-foreground/55">
          Build private applications on public blockchains. Encrypted Finance adapts its privacy layer to each ecosystem while preserving how the underlying networks operate.
        </p>
        <p className="mt-3 text-[15px] leading-[1.8] text-foreground/55">
          Select a chain below to read the documentation and integration details for that network.
        </p>
      </section>

      <hr className="my-2 border-foreground/10" />

      {chains.map((chain) => (
        <section key={chain.id} id={chain.id} className="scroll-mt-20 py-6">
          <div className="rounded-2xl border border-foreground/10 bg-surface/40 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="h-11 w-11 rounded-full ring-1 ring-foreground/10"
                />
                <div>
                  <h2 className="font-serif text-[24px]">{chain.name}</h2>
                  <p className="mt-2 max-w-lg text-[14px] leading-[1.7] text-foreground/55">
                    {chain.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {chain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-foreground/[0.05] px-2.5 py-0.5 text-[10px] font-medium text-foreground/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {chain.live ? (
                <a
                  href={chain.href}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/15 px-4 py-2 text-[11px] font-semibold text-foreground/70 transition-colors hover:border-foreground/25 hover:text-foreground"
                >
                  View docs
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6H9M9 6L6.5 3.5M9 6L6.5 8.5" />
                  </svg>
                </a>
              ) : (
                <span className="shrink-0 rounded-full bg-foreground/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/35">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </section>
      ))}

      <div className="mt-14 border-t border-foreground/10 pt-6">
        <p className="text-[11px] text-foreground/30">2026 Encrypted Finance.</p>
      </div>
    </DocsShell>
  );
}
