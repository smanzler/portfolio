import { useCallback, useEffect, useRef, useState } from "react";

const LOCK_TIMEOUT_MS = 1200;

/**
 * Get the id of the section that crosses the middle of the viewport.
 * Call `select` before a scroll to a section: the id goes to that section
 * at once and does not stop on the sections between.
 * @param enabled Stop observing and return undefined when false.
 */
export function useActiveSection(ids: string[], enabled = true) {
  const [activeId, setActiveId] = useState<string>();
  const lockedId = useRef<string>(undefined);
  const lockTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const key = ids.join(",");

  const select = useCallback((id: string) => {
    setActiveId(id);
    lockedId.current = id;
    clearTimeout(lockTimer.current);
    // Release the lock if the scroll does not reach the section.
    lockTimer.current = setTimeout(() => {
      lockedId.current = undefined;
    }, LOCK_TIMEOUT_MS);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        if (lockedId.current) {
          if (visible.target.id !== lockedId.current) return;
          lockedId.current = undefined;
          clearTimeout(lockTimer.current);
        }
        setActiveId(visible.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    key.split(",").forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      clearTimeout(lockTimer.current);
    };
  }, [key, enabled]);

  return [enabled ? activeId : undefined, select] as const;
}
