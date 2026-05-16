export function CoreIntro() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Text */}
          <div className="max-w-xl">
            <h2 className="mb-8 text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl text-foreground">
              Public blockchains were never built for privacy.
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
              Transactions, balances, trading activity, and financial behavior
              remain permanently visible on public chains. Encrypted enables
              confidential financial infrastructure while preserving public
              blockchain settlement.
            </p>
          </div>

          {/* Right Column - Encrypted Compute Diagram */}
          <div className="relative flex items-center justify-center py-10 lg:py-0">
            <div className="relative flex w-full max-w-lg flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              {/* User Box */}
              <div className="flex flex-col items-center">
                <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-[1.5rem] border-[3px] border-foreground bg-background shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] z-10">
                  <span className="text-lg font-bold text-foreground">USER</span>
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  Signs off-chain
                </p>
              </div>

              {/* Arrow Right */}
              <div className="hidden sm:flex flex-col items-center justify-center w-12">
                <div className="h-[3px] w-full bg-foreground relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-foreground" />
                </div>
              </div>
              <div className="flex sm:hidden flex-col items-center justify-center h-8 w-[3px]">
                <div className="w-full h-full bg-foreground relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-foreground" />
                </div>
              </div>

              {/* Encrypted Compute Circle */}
              <div className="flex flex-col items-center relative z-10">
                <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-[#1a1a1a]">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-foreground/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <div className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-foreground/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
                  <div className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-foreground/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_2s]" />
                  
                  <span className="text-center text-[11px] sm:text-xs font-bold leading-tight tracking-widest text-background uppercase px-2 z-10">
                    Encrypted <br /> Compute
                  </span>
                </div>
                <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                  Secure Enclave
                </p>
              </div>

              {/* Arrow Right */}
              <div className="hidden sm:flex flex-col items-center justify-center w-12">
                <div className="h-[3px] w-full bg-foreground relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-foreground" />
                </div>
              </div>
              <div className="flex sm:hidden flex-col items-center justify-center h-8 w-[3px]">
                <div className="w-full h-full bg-foreground relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-foreground" />
                </div>
              </div>

              {/* DeFi Box */}
              <div className="flex flex-col items-center">
                <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-[1.5rem] border-[3px] border-foreground bg-background shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] z-10">
                  <span className="text-lg font-bold text-foreground">DeFi</span>
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-foreground/50 text-center">
                  Relayed <br className="hidden sm:block"/> privately
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
