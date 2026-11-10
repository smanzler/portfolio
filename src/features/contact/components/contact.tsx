import { ArrowUpRight } from "lucide-react";
import ContactForm from "@/features/contact/components/contact-form";

const links = [
  { label: "simanzler@gmail.com", href: "mailto:simanzler@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/simonmanzler" },
  { label: "GitHub", href: "https://github.com/smanzler" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 pt-24 lg:pt-[120px] flex flex-col gap-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <span className="font-mono text-[13px] tracking-[0.06em] text-muted-foreground">
            04 / CONTACT
          </span>
          <h2 className="m-0 font-display font-semibold text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.03em]">
            Let&apos;s talk.
          </h2>
        </div>
        <div className="flex flex-wrap gap-x-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="inline-flex items-center gap-1.5 font-medium py-3"
            >
              <span className="border-b-[1.5px] border-foreground">
                {label}
              </span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <ContactForm />

      <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-7 border-t border-border font-mono text-[13px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Simon Manzler</span>
        <span>Built with Next.js</span>
        <a href="#home" className="py-2.5 text-muted-foreground">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
