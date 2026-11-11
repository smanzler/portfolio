import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/projects";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <ul className="list-none m-0 p-0 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <li
          key={index}
          className="rounded-2xl bg-card border border-border shadow-[0_12px_32px_rgb(20_21_26/0.06)] p-6 flex flex-col gap-4"
        >
          <div
            role="img"
            aria-label={`${review.rating} out of 5 stars`}
            className="flex gap-1"
          >
            {Array.from({ length: 5 }, (_, star) => (
              <Star
                key={star}
                aria-hidden="true"
                className={cn(
                  "size-4",
                  star < review.rating
                    ? "fill-brand text-brand"
                    : "text-muted-foreground/40"
                )}
              />
            ))}
          </div>
          <p className="m-0 text-[15px] leading-[1.7] text-foreground-soft">
            {review.review}
          </p>
          <span className="mt-auto font-mono text-xs text-muted-foreground">
            — {review.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
