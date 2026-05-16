const chains = [
  {
    name: "Flare",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    comingSoon: false,
    borderColor: "border-red-500/30",
    hoverColor: "hover:border-red-500/60",
  },
  {
    name: "Monad",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
    borderColor: "border-purple-500/30",
    hoverColor: "hover:border-purple-500/60",
  },
  {
    name: "MegaETH",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
    borderColor: "border-blue-500/30",
    hoverColor: "hover:border-blue-500/60",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Supported Chains
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
            Explore how Encrypted brings private financial infrastructure to
            different blockchain environments.
          </p>
        </div>

        {/* Chains list */}
        <div className="flex flex-col gap-4">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className={`group relative flex items-center justify-between rounded-2xl border-2 ${chain.borderColor} ${chain.hoverColor} bg-background px-6 py-5 transition-all hover:bg-surface-light md:px-8 md:py-6`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {chain.name}
                </span>
                {chain.comingSoon && (
                  <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                    Coming Soon
                  </span>
                )}
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-foreground opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              >
                <path
                  d="M5 19L19 5M19 5V15M19 5H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
