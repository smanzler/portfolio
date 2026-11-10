import Image from "next/image";
import type { Asset } from "@/lib/projects";

export function ProjectMedia({ asset }: { asset: Asset }) {
  if (asset.type === "image") {
    return (
      <Image
        src={asset.path}
        alt={asset.alt || ""}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        className="object-contain"
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
