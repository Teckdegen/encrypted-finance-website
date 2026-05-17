"use client";

import { useState } from "react";

const categories = ["All", "EVM", "Non-EVM", "TEE", "FHE", "ZK"];

const chains = [
  {
    name: "Flare",
    description: "Private DeFi execution layer powered by Flare Confidential Compute",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    comingSoon: false,
    tags: ["EVM", "TEE"],
    glow: "shadow-[0_0_30px_rgba(230,32,88,0.15)]",
    borderHover: "hover:border-[#E62058]/30",
  },
  {
    name: "Monad",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
    tags: ["EVM"],
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.1)]",
    borderHover: "hover:border-purple-500/30",
  },
  {
    name: "MegaETH",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
    tags: ["EVM"],
    glow: "shadow-[0_0_30px_rgba(255,255,255,0.05)]",
    borderHover: "hover:border-white/20",
  },
];

export default function ChainsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? chains
    : chains.filter((c) => c.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      {/* Nav */}
      <nav className="border-b border-white/[0.04] px-6 py-4 md:px-12">
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

      <div className="mx-auto max-w-6xl px-6 py-14 md:px-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl font-medium tracking-tight md:text-[2.5rem]">
            Our Ecosystem
          </h1>
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Filters */}
          <aside className="shrink-0 md:w-[180px]">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-white/60">Filters</p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="text-[10px] text-white/30 hover:text-white/60 transition-colors"
                >
                  RESET
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white/25 mb-2">Category</p>
              <div className="flex flex-wrap gap-1.5 md:flex-col md:gap-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] text-left transition-colors ${
                      activeFilter === cat
                        ? "text-white font-medium"
                        : "text-white/35 hover:text-white/60"
                    }`}
                  >
                    <span className={`h-3 w-3 rounded-sm border ${activeFilter === cat ? "border-white/60 bg-white/20" : "border-white/15"}`} />
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((chain) => (
              <a
                key={chain.name}
                href={chain.href}
                className={`group relative rounded-2xl border border-white/[0.06] bg-[#0e0e14] p-5 transition-all ${chain.borderHover} ${chain.comingSoon ? "" : `hover:${chain.glow}`}`}
              >
                {/* Top: logo + tags */}
                <div className="flex items-start justify-between mb-6">
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    className="h-11 w-11 rounded-full ring-2 ring-white/[0.06]"
                  />
                  <div className="flex gap-1.5">
                    {chain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[9px] font-medium text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-[15px] font-bold text-white/90">{chain.name}</h3>

                {/* Description or Coming Soon */}
                {chain.description ? (
                  <p className="mt-2 text-[11px] text-white/30 leading-relaxed line-clamp-3">
                    {chain.description}
                  </p>
                ) : (
                  <p className="mt-2 text-[11px] text-white/20">Coming Soon</p>
                )}

                {/* View link */}
                {!chain.comingSoon && (
                  <div className="mt-6 flex items-center gap-1.5 text-[11px] font-semibold text-white/35 group-hover:text-white/70 transition-colors">
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
