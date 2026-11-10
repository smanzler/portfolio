import { Section } from "@/components/section";
import { UnderlineLink } from "@/components/underline-link";
import ContactForm from "@/features/contact/components/contact-form";

const links = [
  { label: "simanzler@gmail.com", href: "mailto:simanzler@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/simonmanzler" },
  { label: "GitHub", href: "https://github.com/smanzler" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="04 / CONTACT"
      title="Let's talk."
      action={
        <div className="flex flex-wrap gap-x-7">
          {links.map(({ label, href }) => (
            <UnderlineLink key={label} href={href} arrow>
              {label}
            </UnderlineLink>
          ))}
        </div>
      }
      className="pb-0 lg:pb-0"
    >
      <ContactForm />

      <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-7 border-t border-border font-mono text-[13px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Simon Manzler</span>
        <span>Built with Next.js</span>
        <a href="#home" className="py-2.5 text-muted-foreground">
          Back to top ↑
        </a>
      </footer>
    </Section>
  );
}
