import { type ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StudySectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function StudySection({ id, title, children }: StudySectionProps) {
  return (
    <Card id={id} className="scroll-mt-24">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
