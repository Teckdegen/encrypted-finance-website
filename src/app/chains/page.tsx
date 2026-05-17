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
  },
  {
    name: "Monad",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1967693862559698944/XTfCXXGa_400x400.jpg",
    href: "#",
    comingSoon: true,
  },
  {
    name: "MegaETH",
    description: "",
    logo: "https://pbs.twimg.com/profile_images/1861751545790070784/KvlxTzAq_400x400.jpg",
    href: "#",
    comingSoon: true,
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
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="text-3xl font-bold text-[#0a0a0a] md:text-4xl">
          Choose a chain
        </h1>
        <p className="mt-3 text-sm text-[#0a0a0a]/50">
          Select a chain to learn how Encrypted Finance works on it.
        </p>

        <div className="mt-12 flex flex-col gap-3">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className={`group flex items-center gap-4 rounded-xl border border-[#0a0a0a]/[0.06] bg-white/50 px-5 py-4 transition-all hover:bg-white/80 hover:border-[#0a0a0a]/[0.1] ${
                chain.comingSoon ? "opacity-60 pointer-events-none" : ""
              }`}
            >
              <img
                src={chain.logo}
                alt={chain.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#0a0a0a]">{chain.name}</h3>
                {chain.description && (
                  <p className="text-xs text-[#0a0a0a]/40">{chain.description}</p>
                )}
                {chain.comingSoon && (
                  <p className="text-xs text-[#0a0a0a]/30">Coming Soon</p>
                )}
              </div>
              {!chain.comingSoon && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#0a0a0a]/20 group-hover:text-[#0a0a0a]/50 transition-colors">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
