const chains = [
  {
    name: "Flare",
    description: "Private DeFi execution layer powered by FCC",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    status: "Live",
    nameColor: "text-red-500",
  },
  {
    name: "Monad",
    description: "High-throughput private finance infrastructure",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    status: "Coming Soon",
    nameColor: "text-purple-400",
  },
  {
    name: "MegaETH",
    description: "Real-time private transactions at scale",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    status: "Coming Soon",
    nameColor: "text-white",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Supported Chains
          </h2>
          <p className="mt-4 text-sm text-foreground/50 md:text-base">
            Encrypted Finance brings private financial infrastructure across ecosystems.
          </p>
        </div>

        {/* Horizontal scrollable cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className="group flex-shrink-0 w-[240px] md:w-auto snap-start rounded-2xl bg-[#111115] border border-white/[0.06] p-5 transition-all hover:border-white/[0.12] hover:bg-[#161620]"
            >
              {/* Logo */}
              <img
                src={chain.logo}
                alt={chain.name}
                className="h-12 w-12 rounded-xl mb-4"
              />

              {/* Name */}
              <h3 className={`text-lg font-bold mb-1 ${chain.nameColor}`}>
                {chain.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                {chain.description}
              </p>

              {/* Status text + Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/30">{chain.status}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white/20 transition-all group-hover:text-white/50 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
