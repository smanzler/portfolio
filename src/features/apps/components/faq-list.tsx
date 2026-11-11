import { Plus } from "lucide-react";
import type { FAQ } from "@/lib/projects";

export function FaqList({ faq }: { faq: FAQ[] }) {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-[0_12px_32px_rgb(20_21_26/0.06)] overflow-hidden">
      {faq.map(({ question, answer }, index) => (
        <details
          key={question}
          className="group border-b border-rule last:border-b-0"
        >
          <summary className="flex items-baseline gap-4 px-5 py-5 lg:px-8 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-muted/60 transition-colors">
            <span className="font-mono text-xs text-muted-foreground group-open:text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-display font-semibold text-lg tracking-[-0.015em]">
              {question}
            </span>
            <Plus
              aria-hidden="true"
              className="size-4 shrink-0 self-center text-muted-foreground transition-transform group-open:rotate-45"
            />
          </summary>
          <p className="m-0 px-5 pb-6 pl-[52px] lg:px-8 lg:pl-[60px] text-[15px] leading-[1.7] text-foreground-soft">
            {answer}
          </p>
        </details>
      ))}
    </div>
  );
}
