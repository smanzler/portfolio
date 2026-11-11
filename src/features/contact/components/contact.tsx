import { Section } from "@/components/section";
import { SiteFooter } from "@/components/site-footer";
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

      <SiteFooter />
    </Section>
  );
}
