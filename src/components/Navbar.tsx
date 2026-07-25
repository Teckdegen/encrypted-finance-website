import { SiteLogo } from "@/components/SiteLogo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0ebe2]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <SiteLogo imageClassName="h-8 w-8" />
      </div>
    </nav>
  );
}
