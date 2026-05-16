export function CoreIntro() {
  return (
    <section
      id="intro"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="gradient-border p-8 md:p-12">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Public blockchains were never built for privacy.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/60">
            Transactions, balances, trading activity, and financial behavior
            remain permanently visible on public chains. Encrypted enables
            confidential financial infrastructure while preserving public
            blockchain settlement.
          </p>
        </div>
      </div>
    </section>
  );
}
