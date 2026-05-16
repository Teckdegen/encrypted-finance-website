export function Compliance() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            Why build on Encrypted Finance?
          </p>
          <h2 className="mb-6 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
            The only blockchain that solves the <br /> privacy-compliance dilemma
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-foreground/70">
            Build applications that protect users while meeting requirements. Encrypted Finance&apos;s
            architecture makes privacy compliance work together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Large Dark Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] p-10 md:p-12 shadow-2xl border border-white/5 flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-medium text-white">
                Zero-Knowledge by design
              </h3>
              <p className="text-sm leading-relaxed text-foreground/60 max-w-sm">
                We&apos;re the only fully private and programmable ZK-chain. You can build
                granular privacy into your apps without compromising scalability.
              </p>
            </div>
            
            {/* Abstract Graphic representing the globe */}
            <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full border border-foreground/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/5 to-transparent">
               <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 opacity-20 p-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  ))}
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Top Light Card */}
            <div className="rounded-[2.5rem] bg-foreground p-10 md:p-12 shadow-2xl flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-medium text-background">
                Get support from our team
              </h3>
              <p className="text-sm leading-relaxed text-background/80">
                Get showcased in front of our community, take part in big launches, meet
                other builders worldwide, and get access to our network of investors and
                mentors.
              </p>
            </div>

            {/* Bottom Light Card */}
            <div className="rounded-[2.5rem] bg-foreground p-10 md:p-12 shadow-2xl flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1">
              <h3 className="mb-4 text-2xl font-medium text-background">
                Compliance without compromise
              </h3>
              <p className="text-sm leading-relaxed text-background/80">
                Meet regulatory requirements without sacrificing user privacy. Encrypted
                Finance&apos;s architecture enables selective disclosure: you share what&apos;s
                needed, protect what&apos;s not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
