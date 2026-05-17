import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encrypted Finance - Chains",
  description: "Explore the chains supported by Encrypted Finance.",
};

const chains = [
  {
    name: "Flare",
    description: "Private DeFi execution layer powered by FCC",
    logo: "https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg",
    href: "/flare",
    comingSoon: false,
    gradient: "from-red-500/10 to-orange-500/5",
  },
  {
    name: "Monad",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
    gradient: "from-purple-500/10 to-indigo-500/5",
  },
  {
    name: "MegaETH",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
    gradient: "from-gray-500/10 to-slate-500/5",
  },
];

export default function ChainsPage() {
  return (
    <div className="min-h-screen bg-[#f0ebe2]">
      {/* Nav */}
      <nav className="px-6 py-5 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
            alt="Logo"
            className="h-7 w-7 rounded-full"
          />
          <span className="text-sm font-semibold text-[#0a0a0a]">Encrypted Finance</span>
        </a>
        <a href="/" className="text-xs text-[#0a0a0a]/40 hover:text-[#0a0a0a]/70 transition-colors">
          Home
        </a>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-[#0a0a0a] md:text-4xl">
            Choose a chain
          </h1>
          <p className="mt-3 text-sm text-[#0a0a0a]/50">
            Select a chain to learn how Encrypted Finance works on it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className={`group relative overflow-hidden rounded-2xl border border-[#0a0a0a]/[0.06] bg-white p-6 transition-all hover:shadow-lg hover:border-[#0a0a0a]/[0.1] hover:-translate-y-1 ${
                chain.comingSoon ? "opacity-70" : ""
              }`}
            >
              {/* Gradient bg */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${chain.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative">
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="h-14 w-14 rounded-xl mb-5"
                />
                <h3 className="text-lg font-bold text-[#0a0a0a]">{chain.name}</h3>
                {chain.description && (
                  <p className="mt-1 text-xs text-[#0a0a0a]/45 leading-relaxed">{chain.description}</p>
                )}
                {chain.comingSoon && (
                  <p className="mt-1 text-xs text-[#0a0a0a]/30">Coming Soon</p>
                )}

                {!chain.comingSoon && (
                  <div className="mt-5 flex items-center gap-1 text-xs font-medium text-[#0a0a0a]/50 group-hover:text-[#0a0a0a]/80 transition-colors">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
