import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { type Study } from "@/types/study";
import { StudyStatusBadge } from "./StudyStatusBadge";

interface Props {
  study: Study;
}

export function StudyCard({ study }: Props) {
  const protocol = study.protocolSection;

  return (
    <Link to={`/studies/${protocol.identificationModule.nctId}`}>
      <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="space-y-3">
          <p className="text-xs text-muted-foreground">{protocol.identificationModule.nctId}</p>

          <h3 className="font-semibold leading-6">{protocol.identificationModule.briefTitle}</h3>
        </CardHeader>

        <CardContent className="space-y-3">
          <StudyStatusBadge status={protocol.statusModule.overallStatus} />

          <p className="text-sm text-muted-foreground truncate">
            {protocol.conditionsModule?.conditions?.join(", ")}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
