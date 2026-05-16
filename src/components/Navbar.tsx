export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f3]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://pbs.twimg.com/profile_images/2052396648999923715/s8bKFJnU_400x400.jpg"
            alt="Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-lg font-semibold tracking-tight text-[#0a0a0a]">
            EncryptedFi
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#ecosystem" className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">
            Ecosystem
          </a>
          <a href="#community" className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}
