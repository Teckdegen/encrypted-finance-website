export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/20 border border-accent/30">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-accent"
            >
              <path
                d="M8 1L2 4.5V11.5L8 15L14 11.5V4.5L8 1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 5L5 6.75V10.25L8 12L11 10.25V6.75L8 5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
