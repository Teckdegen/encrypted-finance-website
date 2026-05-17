const chains = [
  {
    name: "Flare",
    description: "Private DeFi execution layer powered by FCC",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    comingSoon: false,
    nameColor: "text-red-500",
  },
  {
    name: "Monad",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
    nameColor: "text-purple-400",
  },
  {
    name: "MegaETH",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
    nameColor: "text-[#0a0a0a]",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Supported Chains
          </h2>
          <p className="mt-4 text-sm text-foreground/50 md:text-base">
            Encrypted Finance brings private financial infrastructure across ecosystems.
          </p>
        </div>

        {/* Chain list */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className="group flex flex-col items-center text-center transition-opacity hover:opacity-80"
            >
              <img
                src={chain.logo}
                alt={chain.name}
                className="h-14 w-14 rounded-xl mb-3"
              />
              <h3 className={`text-lg font-bold ${chain.nameColor}`}>
                {chain.name}
              </h3>
              {chain.description && (
                <p className="mt-1 text-xs text-foreground/40 leading-relaxed max-w-[180px]">
                  {chain.description}
                </p>
              )}
              {chain.comingSoon && (
                <p className="mt-1 text-xs text-foreground/30">Coming Soon</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
