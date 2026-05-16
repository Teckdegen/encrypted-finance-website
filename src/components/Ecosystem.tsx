"use client";

const chains = [
  { name: "Ethereum", borderColor: "border-emerald-300" },
  { name: "Solana", borderColor: "border-orange-300" },
  { name: "Sui", borderColor: "border-pink-300" },
  { name: "Aptos", borderColor: "border-gray-300" },
  { name: "Monad", borderColor: "border-amber-300" },
  { name: "Berachain", borderColor: "border-orange-200" },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a0a0a] md:text-4xl">
            Supported Chains
          </h2>
          <p className="mt-3 text-sm text-[#0a0a0a]/50">
            Private financial infrastructure across ecosystems.
          </p>
        </div>

        {/* Chain grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href="#"
              className={`group flex items-center justify-between rounded-2xl border-2 ${chain.borderColor} bg-white/60 backdrop-blur-sm px-6 py-5 transition-all hover:bg-white/80 hover:shadow-sm`}
            >
              <span className="text-lg font-medium text-[#0a0a0a]">
                {chain.name}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-[#0a0a0a]/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
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
