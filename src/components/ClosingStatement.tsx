export function ClosingStatement() {
  return (
    <footer className="border-t border-foreground/10 bg-background px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm font-medium text-foreground/60">
          © {new Date().getFullYear()} Encrypted Layer.
        </p>
        
        <div className="flex items-center gap-8">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-foreground/70"
          >
            X.com
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-foreground/70"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
