import { type ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function FilterSection({
  title,
  children,
}: Props) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-medium">
        {title}
      </h3>

      {children}
    </section>
  );
}
