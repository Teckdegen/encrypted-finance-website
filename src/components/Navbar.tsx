export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg" 
            alt="Logo" 
            className="h-8 w-8 rounded-full border border-border"
          />
          <span className="text-lg font-semibold tracking-tight">
            EncryptedFi
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#ecosystem"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Ecosystem
          </a>
          <a
            href="#infrastructure"
            className="text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Infrastructure
          </a>
          <a
            href="#ecosystem"
            className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-all hover:bg-accent/20"
          >
            Explore Chains
          </a>
        </div>
      </div>
    </nav>
  );
}
