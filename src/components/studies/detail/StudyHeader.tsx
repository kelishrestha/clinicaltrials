import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StudyStatusBadge } from "@/components/studies/StudyStatusBadge";

import { type Study } from "@/types/study";

interface StudyHeaderProps {
  study: Study;
}

export function StudyHeader({ study }: StudyHeaderProps) {
  const protocol = study.protocolSection;

  return (
    <div className="space-y-4">
      <Card className="rounded-sm py-0">
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="font-mono">
              {protocol.identificationModule.nctId}
            </Badge>

            <StudyStatusBadge status={protocol.statusModule.overallStatus} />
          </div>

          <div className="space-y-2">
            <h2
              className="text-gray-700! font-bold tracking-tight"
              style={{ fontSize: "32px", marginBottom: "0px" }}
            >
              {protocol.identificationModule.briefTitle}
            </h2>
            {protocol.identificationModule.officialTitle && (
              <p className="text-muted-foreground">{protocol.identificationModule.officialTitle}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
