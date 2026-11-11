import type { Asset } from "@/lib/projects";

export function ProjectMedia({ asset }: { asset: Asset }) {
  if (asset.type === "image") {
    return (
      <img
        src={asset.path}
        alt={asset.alt || ""}
        loading="lazy"
        className="absolute inset-0 size-full object-contain"
      />
    );
  }

  return (
    <video
      key={asset.path}
      src={asset.path}
      poster={asset.fallbackPath}
      aria-label={asset.alt}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 size-full object-contain"
    />
  );
}
