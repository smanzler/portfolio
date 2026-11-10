import Image from "next/image";
import { ReadmeCard } from "@/features/about/components/readme-card";
import simonRamen from "../../../../public/simon-ramen.png";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 py-24 lg:py-[120px] flex flex-col gap-10"
    >
      <div className="flex flex-col gap-3.5">
        <span className="font-mono text-[13px] tracking-[0.06em] text-muted-foreground">
          02 / ABOUT
        </span>
        <h2 className="m-0 font-display font-semibold text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.03em]">
          A bit about me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative h-[420px] lg:h-auto lg:min-h-[640px] lg:flex-[0_0_460px] rounded-2xl overflow-hidden bg-well">
          <Image
            src={simonRamen}
            alt="Simon with a bowl of ramen"
            fill
            sizes="(min-width: 1024px) 460px, 100vw"
            className="object-cover"
          />
          <div className="glass absolute left-[18px] bottom-[18px] px-4 py-2.5 rounded-xl font-mono text-xs text-glass-foreground flex gap-3">
            <span>Simon Manzler</span>
            <span className="text-glass-faint">·</span>
            <span className="text-code-string">Cincinnati, OH</span>
          </div>
        </div>
        <ReadmeCard className="flex-1" />
      </div>
    </section>
  );
}
