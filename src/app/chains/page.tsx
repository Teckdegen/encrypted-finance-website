"use client";

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

        {/* Search + Sort bar */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="relative flex-1 max-w-[260px]">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] py-2 pl-9 pr-3 text-xs text-white/70 placeholder:text-white/25 outline-none focus:border-white/[0.15] transition-colors"
            />
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-white/40 hover:text-white/60 transition-colors">
            Sort by
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chains.map((chain) => (
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
  );
}
