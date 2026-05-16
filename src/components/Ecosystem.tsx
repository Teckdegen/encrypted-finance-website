const chainsLeft = [
  { name: "Ethereum", borderColor: "border-emerald-500/30", hoverColor: "hover:border-emerald-500/60" },
  { name: "Solana", borderColor: "border-orange-500/30", hoverColor: "hover:border-orange-500/60" },
  { name: "Sui", borderColor: "border-pink-500/30", hoverColor: "hover:border-pink-500/60" },
];

const chainsRight = [
  { name: "Aptos", borderColor: "border-foreground/30", hoverColor: "hover:border-foreground/60" },
  { name: "Monad", borderColor: "border-yellow-500/30", hoverColor: "hover:border-yellow-500/60" },
  { name: "Berachain", borderColor: "border-amber-500/30", hoverColor: "hover:border-amber-500/60" },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Choose an ecosystem.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70">
            Explore how Encrypted brings private financial infrastructure to
            different blockchain environments.
          </p>
        </div>

        {/* Fancy Chains Grid (Image 7 Layout) */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col">
            {chainsLeft.map((chain, idx) => (
              <a
                key={chain.name}
                href={`#${chain.name.toLowerCase()}`}
                className={`group relative flex h-32 items-center justify-between rounded-3xl border-2 ${chain.borderColor} ${chain.hoverColor} bg-background px-8 transition-all hover:bg-surface-light ${
                  idx > 0 ? "-mt-8 z-10" : "z-0"
                }`}
                style={{ zIndex: idx }}
              >
                <span className="text-3xl font-medium tracking-tight text-foreground">
                  {chain.name}
                </span>
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

          {/* Right Column */}
          <div className="flex flex-col">
            {chainsRight.map((chain, idx) => (
              <a
                key={chain.name}
                href={`#${chain.name.toLowerCase()}`}
                className={`group relative flex h-32 items-center justify-between rounded-3xl border-2 ${chain.borderColor} ${chain.hoverColor} bg-background px-8 transition-all hover:bg-surface-light ${
                  idx > 0 ? "-mt-8 z-10" : "z-0"
                }`}
                style={{ zIndex: idx }}
              >
                <span className="text-3xl font-medium tracking-tight text-foreground">
                  {chain.name}
                </span>
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
      </div>
    </section>
  );
}
