export function PrivacyPhilosophy() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            Privacy Philosophy
          </p>
          <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Privacy is not one-size-fits-all.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/70 md:text-xl">
            Encrypted adapts its approach to each blockchain ecosystem, enabling private financial interactions without changing how the underlying networks operate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Large Dark Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-10 md:p-12 shadow-2xl flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-medium text-background">
                Privacy by Design
              </h3>
              <p className="text-sm leading-relaxed text-background/80 max-w-sm">
                Encrypted Finance is built to make privacy a native property of financial systems on public blockchains. Users and applications can interact confidentially while preserving transparency where it matters.
              </p>
            </div>
            
            {/* Abstract Graphic representing the globe */}
            <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full border border-background/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/5 to-transparent">
               <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 opacity-20 p-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-background" />
                  ))}
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Top Light Card */}
            <div className="rounded-[2.5rem] border border-foreground/10 bg-surface p-10 md:p-12 shadow-sm flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-medium text-foreground">
                Built for Builders and Protocols
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                We support teams building the next generation of financial applications with private infrastructure, ecosystem support, and access to a growing network of builders and partners across the space.
              </p>
            </div>

            {/* Bottom Light Card */}
            <div className="rounded-[2.5rem] border border-foreground/10 bg-surface p-10 md:p-12 shadow-sm flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-medium text-foreground">
                Privacy with Control
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                Encrypted Finance enables selective privacy in financial interactions. Applications can define what stays private and what is revealed, giving users control over their financial visibility without breaking compliance needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
