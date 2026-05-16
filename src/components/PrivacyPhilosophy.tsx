export function PrivacyPhilosophy() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0a0a]/40">
            Privacy Philosophy
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#0a0a0a] md:text-4xl lg:text-5xl">
            Privacy is not one-size-fits-all.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#0a0a0a]/60 md:text-lg">
            Encrypted adapts its approach to each blockchain ecosystem, enabling
            private financial interactions without changing how the underlying
            networks operate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#0a0a0a]/10 bg-white/50 backdrop-blur-sm p-8 transition-all hover:bg-white/70">
            <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">
              Privacy by Design
            </h3>
            <p className="text-sm leading-relaxed text-[#0a0a0a]/50">
              Privacy is a native property of financial systems on public
              blockchains. Users interact confidentially while preserving
              transparency where it matters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#0a0a0a]/10 bg-white/50 backdrop-blur-sm p-8 transition-all hover:bg-white/70">
            <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">
              Multi-Chain Native
            </h3>
            <p className="text-sm leading-relaxed text-[#0a0a0a]/50">
              Designed for every blockchain ecosystem. Encrypted adapts private
              financial infrastructure to different environments and use cases.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#0a0a0a]/10 bg-white/50 backdrop-blur-sm p-8 transition-all hover:bg-white/70">
            <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">
              Privacy with Control
            </h3>
            <p className="text-sm leading-relaxed text-[#0a0a0a]/50">
              Selective privacy in financial interactions. Define what stays
              private and what is revealed, giving users control over financial
              visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
