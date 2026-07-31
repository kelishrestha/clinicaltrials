import type { ReactNode } from "react";

interface InfoHeadingProps {
  title: string;
  subtitle?: ReactNode
}

export function InfoHeading({ title, subtitle }: InfoHeadingProps){
  return (
    <h3 className="font-semibold py-3 font-serif">
      {title}
      {subtitle}
    </h3>
  )
}
