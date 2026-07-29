import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { type Study } from "@/types/study";

interface StudyHeaderProps {
  study: Study;
}

export function StudyHeader({ study }: StudyHeaderProps) {
  const protocol = study.protocolSection;

  return (
    <div className="space-y-4">
      <Card className="rounded-sm">
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="outline">{protocol.identificationModule.nctId}</Badge>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl text-gray-700! font-bold tracking-tight">
              {protocol.identificationModule.briefTitle}
            </h1>
            {protocol.identificationModule.officialTitle && (
              <p className="text-muted-foreground">{protocol.identificationModule.officialTitle}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
