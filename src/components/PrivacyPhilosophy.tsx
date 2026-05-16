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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-10 md:p-12 shadow-2xl flex flex-col justify-between min-h-[450px]">
            <div className="relative z-10 mb-8">
              <h3 className="mb-4 text-3xl font-medium text-background">
                Privacy by Design
              </h3>
              <p className="text-sm leading-relaxed text-background/80 max-w-sm">
                Encrypted Finance is built to make privacy a native property of financial systems on public blockchains. Users and applications can interact confidentially while preserving transparency where it matters.
              </p>
            </div>
            
            {/* Encrypted Compute Graphic (Replacing Globe) */}
            <div className="relative z-10 mt-auto flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 bg-background/5 p-6 rounded-3xl border border-background/10">
              {/* User Box */}
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-background bg-foreground shadow-[3px_3px_0px_0px_rgba(240,235,226,0.3)]">
                  <span className="text-[10px] font-bold text-background">USER</span>
                </div>
              </div>

              {/* Arrow Right */}
              <div className="hidden sm:flex flex-col items-center justify-center w-6">
                <div className="h-[2px] w-full bg-background relative opacity-50">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[4px] border-b-[4px] border-l-[5px] border-t-transparent border-b-transparent border-l-background" />
                </div>
              </div>

              {/* Encrypted Compute Circle */}
              <div className="flex flex-col items-center relative">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#111] border border-background/20">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full border border-background/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="absolute -inset-2 rounded-full border border-background/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
                  <div className="absolute -inset-4 rounded-full border border-background/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_2s]" />
                  
                  <span className="text-center text-[7px] font-bold leading-tight tracking-widest text-background uppercase px-1 z-10">
                    Encrypted <br /> Compute
                  </span>
                </div>
              </div>

              {/* Arrow Right */}
              <div className="hidden sm:flex flex-col items-center justify-center w-6">
                <div className="h-[2px] w-full bg-background relative opacity-50">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[4px] border-b-[4px] border-l-[5px] border-t-transparent border-b-transparent border-l-background" />
                </div>
              </div>

              {/* DeFi Box */}
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-background bg-foreground shadow-[3px_3px_0px_0px_rgba(240,235,226,0.3)]">
                  <span className="text-[10px] font-bold text-background">DeFi</span>
                </div>
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
