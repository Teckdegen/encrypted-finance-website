import { SITE_LOGO, SITE_NAME } from "@/lib/site";

type SiteLogoProps = {
  showName?: boolean;
  className?: string;
  imageClassName?: string;
};

export function SiteLogo({
  showName = true,
  className = "",
  imageClassName = "h-7 w-7",
}: SiteLogoProps) {
  return (
    <a href="/" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={SITE_LOGO}
        alt={SITE_NAME}
        className={`object-contain ${imageClassName}`}
      />
      {showName && (
        <span className="text-sm font-semibold tracking-tight text-foreground">
          {SITE_NAME}
        </span>
      )}
    </a>
  );
}
