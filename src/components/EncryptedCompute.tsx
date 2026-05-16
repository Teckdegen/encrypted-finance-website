export function EncryptedCompute() {
  return (
    <section className="relative px-6 py-32 bg-background flex flex-col items-center justify-center">
      <div className="text-center mb-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-foreground/50">
          What we offer
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase">
          Encrypted Compute
        </h2>
      </div>

      {/* Diagram Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16 w-full max-w-5xl">
        
        {/* User Box */}
        <div className="flex flex-col items-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border-4 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.9)] z-10">
            <span className="text-xl font-bold text-foreground">USER</span>
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-foreground/40">
            Signs off-chain
          </p>
        </div>

        {/* Arrow Right (Hidden on mobile, visible on md+) */}
        <div className="hidden md:flex flex-col items-center justify-center w-16 lg:w-24">
          <div className="h-1 w-full bg-foreground relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-l-[12px] border-t-transparent border-b-transparent border-l-foreground" />
          </div>
        </div>
        
        {/* Arrow Down (Visible on mobile only) */}
        <div className="flex md:hidden flex-col items-center justify-center h-12 w-1">
          <div className="w-1 h-full bg-foreground relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-[12px] border-l-transparent border-r-transparent border-t-foreground" />
          </div>
        </div>

        {/* Encrypted Compute Circle */}
        <div className="flex flex-col items-center relative z-10">
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#1a1a1a]">
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-foreground/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute -inset-4 rounded-full border-2 border-foreground/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />
            <div className="absolute -inset-8 rounded-full border-2 border-foreground/5 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_2s]" />
            
            <span className="text-center text-sm font-bold leading-tight tracking-widest text-background uppercase px-4 z-10">
              Encrypted <br /> Compute
            </span>
          </div>
          <p className="mt-12 text-xs font-bold uppercase tracking-widest text-foreground/40">
            Secure Enclave
          </p>
        </div>

        {/* Arrow Right (Hidden on mobile, visible on md+) */}
        <div className="hidden md:flex flex-col items-center justify-center w-16 lg:w-24">
          <div className="h-1 w-full bg-foreground relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-l-[12px] border-t-transparent border-b-transparent border-l-foreground" />
          </div>
        </div>

        {/* Arrow Down (Visible on mobile only) */}
        <div className="flex md:hidden flex-col items-center justify-center h-12 w-1">
          <div className="w-1 h-full bg-foreground relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-[12px] border-l-transparent border-r-transparent border-t-foreground" />
          </div>
        </div>

        {/* DeFi Box */}
        <div className="flex flex-col items-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border-4 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.9)] z-10">
            <span className="text-xl font-bold text-foreground">DeFi</span>
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-foreground/40">
            Relayed privately
          </p>
        </div>

      </div>

      <div className="mt-32 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/40">
          Zero on-chain footprint
        </p>
      </div>
    </section>
  );
}
