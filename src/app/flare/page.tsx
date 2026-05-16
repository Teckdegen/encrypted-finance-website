export default function FlarePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </a>

        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://pbs.twimg.com/profile_images/1635937765534707712/JgfEVRQA_400x400.jpg"
            alt="Flare"
            className="h-16 w-16 rounded-full"
          />
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Flare
          </h1>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
          Encrypted Finance on Flare — private financial infrastructure for the
          Flare network. More details coming soon.
        </p>
      </div>
    </div>
  );
}
