/**
 * Mono footer row with the copyright and a back-to-top link.
 * @param topHref Anchor for the back-to-top link.
 */
export function SiteFooter({ topHref = "#home" }: { topHref?: string }) {
  return (
    <footer className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-7 border-t border-border font-mono text-[13px] text-muted-foreground">
      <span>© {new Date().getFullYear()} Simon Manzler</span>
      <span>Built with Next.js</span>
      <a href={topHref} className="py-2.5 text-muted-foreground">
        Back to top ↑
      </a>
    </footer>
  );
}
