import { Section } from "@/components/section";
import { UnderlineLink } from "@/components/underline-link";
import { ChangelogCard } from "@/features/experience/components/changelog-card";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / EXPERIENCE"
      title="Where I've worked"
      action={
        <UnderlineLink href="/resume.pdf" target="_blank" arrow>
          Full résumé
        </UnderlineLink>
      }
    >
      <ChangelogCard />
    </Section>
  );
}
