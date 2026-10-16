import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  className?: string;
  children: ReactNode;
}

/**
 * A bordered list-item card with the item's position shown as a faint backdrop
 * number, so a long list stays easy to count through.
 */
export function IndexedCard({ index, className, children }: Props) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-secondary p-4", className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-2 select-none text-6xl font-bold leading-none text-foreground/5"
      >
        {index}
      </span>

      <div className="relative">{children}</div>
    </div>
  );
}
