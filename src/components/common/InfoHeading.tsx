import type { ReactNode } from "react";

interface InfoHeadingProps {
  title: string;
  subtitle?: ReactNode
}

export function InfoHeading({ title, subtitle }: InfoHeadingProps){
  return (
    <h3 className="py-3 font-serif font-semibold">
      <span className="inline-block border-b-2 border-primary pb-1">{title}</span>
      {subtitle}
    </h3>
  )
}
