import { GlassMeta } from "@/components/glass-meta";
import { Section } from "@/components/section";
import { ReadmeCard } from "@/features/about/components/readme-card";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="02 / ABOUT"
      title="A bit about me"
      className="gap-10"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="relative h-[420px] lg:h-auto lg:min-h-[640px] lg:flex-[0_0_460px] rounded-2xl overflow-hidden bg-well">
          <img
            src="/simon-ramen.webp"
            alt="Simon with a bowl of ramen"
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <GlassMeta
            items={["Simon Manzler", "Cincinnati, OH"]}
            className="absolute left-[18px] bottom-[18px]"
          />
        </div>
        <ReadmeCard className="flex-1" />
      </div>
    </Section>
  );
}
