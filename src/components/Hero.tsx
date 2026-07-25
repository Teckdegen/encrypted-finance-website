export function Hero() {
  return (
    <section className="relative bg-surface-light px-3 pb-6 pt-20 sm:px-4 sm:pb-8 sm:pt-24 md:px-6 md:pb-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative flex min-h-[calc(100dvh-6rem)] items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#111110] sm:min-h-[calc(100dvh-7rem)] sm:rounded-[2rem] md:rounded-[2.5rem]">
          {/* Scanline texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.025) 2px, rgba(255,255,255,0.025) 3px)",
            }}
          />

          {/* Soft ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(240,235,226,0.07),transparent_70%)]" />

          {/* Bottom orb */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[55%] w-[130%] max-w-[720px] -translate-x-1/2 translate-y-[58%] rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(240,235,226,0.14),rgba(240,235,226,0.04)_45%,transparent_70%)] sm:w-[110%]" />

          {/* Main content */}
          <div className="relative z-10 w-full max-w-5xl px-6 py-12 text-left sm:px-12 sm:py-14">
            <h1 className="font-sans text-[clamp(2rem,4.4vw,3.15rem)] font-semibold leading-[1.18] tracking-[-0.02em]">
              <span className="text-[#f0ebe2]">
                Confidential layer for public chains.
              </span>
              <span
                aria-hidden="true"
                className="mx-2 inline-block h-[0.85em] w-[0.32em] translate-y-[0.08em] animate-pulse bg-[#f0ebe2]/70 align-middle"
              />
              <span className="text-[#f0ebe2]/40">
                Encrypted Finance brings confidential DeFi execution to public
                chains. Trade, lend, and settle on-chain while your positions,
                balances, and strategy stay fully confidential.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
