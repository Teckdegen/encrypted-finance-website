"use client";

import { useEffect, useRef } from "react";

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

export function Ecosystem() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let animationId: number;

    const animate = () => {
      position -= 0.4;
      const totalWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="ecosystem" className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Supported Chains
          </h2>
          <p className="mt-4 text-sm text-foreground/50 md:text-base">
            Encrypted Finance brings private financial infrastructure across ecosystems.
          </p>
        </div>
      </div>

      {/* Infinite scrolling logos */}
      <div className="relative w-full overflow-hidden py-8">
        <div ref={trackRef} className="flex items-center gap-16 w-max">
          {/* Duplicate the chain logos for seamless loop */}
          {[...chains, ...chains, ...chains, ...chains, ...chains, ...chains].map((chain, i) => (
            <a
              key={`${chain.name}-${i}`}
              href={chain.href}
              className="flex flex-col items-center gap-3 shrink-0 group transition-opacity hover:opacity-70"
            >
              <img
                src={chain.logo}
                alt={chain.name}
                className="h-12 w-12 rounded-full shadow-sm"
              />
              <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground/90 transition-colors">
                {chain.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Chain details below */}
      <div className="mx-auto max-w-2xl px-6 mt-12">
        <div className="flex flex-col gap-6">
          {chains.map((chain) => (
            <a
              key={chain.name}
              href={chain.href}
              className="group flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <img
                src={chain.logo}
                alt={chain.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">{chain.name}</h3>
                {chain.description && (
                  <p className="text-xs text-foreground/40">{chain.description}</p>
                )}
                {chain.comingSoon && (
                  <p className="text-xs text-foreground/30">Coming Soon</p>
                )}
              </div>
              {!chain.comingSoon && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-foreground/20 group-hover:text-foreground/50 transition-colors">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
