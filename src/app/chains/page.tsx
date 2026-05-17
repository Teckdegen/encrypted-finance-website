"use client";

import { useState } from "react";
import type { Metadata } from "next";

const categories = ["All", "EVM", "Non-EVM", "TEE", "FHE", "ZK"];

const chains = [
  {
    name: "Flare",
    description: "Private DeFi execution layer powered by Flare Confidential Compute",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    comingSoon: false,
    tags: ["EVM", "TEE"],
  },
  {
    name: "Monad",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
    tags: ["EVM"],
  },
  {
    name: "MegaETH",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
    tags: ["EVM"],
  },
];

export default function ChainsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? chains
    : chains.filter((c) => c.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="border-b border-white/[0.06] px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
              alt="Logo"
              className="h-7 w-7 rounded-full"
            />
            <span className="text-sm font-semibold">Encrypted Finance</span>
          </a>
          <a href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Home
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20">
        {/* Header */}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Our Ecosystem
        </h1>
        <p className="mt-3 text-sm text-white/40">
          Explore the chains where Encrypted Finance brings private infrastructure.
        </p>

        {/* Layout: filters sidebar + cards grid */}
        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          {/* Filters sidebar */}
          <aside className="shrink-0 md:w-[180px]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-3">Category</p>
            <div className="flex flex-wrap gap-2 md:flex-col md:gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-md px-3 py-1.5 text-xs text-left transition-colors ${
                    activeFilter === cat
                      ? "bg-white/[0.08] text-white font-medium"
                      : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((chain) => (
              <a
                key={chain.name}
                href={chain.href}
                className={`group rounded-2xl border border-white/[0.06] bg-[#12121a] p-5 transition-all hover:border-white/[0.12] hover:bg-[#181824] ${
                  chain.comingSoon ? "opacity-60" : ""
                }`}
              >
                {/* Top: logo + tags */}
                <div className="flex items-start justify-between mb-5">
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    className="h-10 w-10 rounded-xl"
                  />
                  <div className="flex gap-1.5">
                    {chain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-white/90">{chain.name}</h3>

                {/* Description or Coming Soon */}
                {chain.description ? (
                  <p className="mt-1.5 text-xs text-white/35 leading-relaxed line-clamp-2">
                    {chain.description}
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-white/25">Coming Soon</p>
                )}

                {/* View link */}
                {!chain.comingSoon && (
                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors">
                    VIEW
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
