const chains = [
  {
    name: "Flare",
    description: "Private DeFi execution layer powered by FCC",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    comingSoon: false,
    nameColor: "text-green-400",
    borderColor: "border-green-400/40",
  },
  {
    name: "Monad",
    description: "High-throughput private finance infrastructure",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
    nameColor: "text-orange-400",
    borderColor: "border-orange-400/40",
  },
  {
    name: "MegaETH",
    description: "Real-time private transactions at scale",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
    nameColor: "text-white",
    borderColor: "border-white/20",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Supported Chains
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
            Explore how Encrypted Finance brings private financial infrastructure to
            different blockchain environments.
          </p>
        </div>

        {/* Stacked dark cards */}
        <div className="flex flex-col gap-5">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className={`group relative rounded-3xl border ${chain.borderColor} bg-[#111115] p-8 transition-all hover:bg-[#181820] md:p-10`}
            >
              {/* Top right arrow */}
              <div className="absolute right-6 top-6 md:right-8 md:top-8">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`${chain.nameColor} opacity-60 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100`}
                >
                  <path
                    d="M7 17L17 7M17 7V15M17 7H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Chain name large */}
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="h-10 w-10 rounded-full"
                />
                <h3 className={`text-3xl font-medium tracking-tight md:text-4xl ${chain.nameColor}`}>
                  {chain.name}
                </h3>
                {chain.comingSoon && (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 md:text-base">
                {chain.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
