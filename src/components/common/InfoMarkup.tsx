import type { ReactNode } from "react";
import { InfoHeading } from "./InfoHeading";

interface InfoMarkupProps {
  title: string;
  value: string | ReactNode;
}

export function InfoMarkup({ title, value }: InfoMarkupProps) {
  return (
    <div className="space-y-2 my-3">
      <InfoHeading title={title} />
      <pre className="whitespace-pre-wrap font-sans">{value}</pre>
    </div>
  )
}
