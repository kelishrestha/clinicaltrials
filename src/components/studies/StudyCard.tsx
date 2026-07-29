import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { type Study } from "@/types/study";
import { Badge } from "@/components/ui/badge";

interface Props {
  study: Study;
}

export default function StudyCard({
  study,
}: Props) {
  const id =
    study.protocolSection.identificationModule.nctId;

  return (
    <Link to={`/studies/${id}`}>
      <Card className="transition hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">
            {
              study.protocolSection
                .identificationModule.briefTitle
            }
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <Badge>
            {
              study.protocolSection.statusModule
                .overallStatus
            }
          </Badge>

          <p className="text-sm text-muted-foreground">
            {
              study.protocolSection.conditionsModule
                ?.conditions?.join(", ")
            }
          </p>

          <p className="text-xs text-muted-foreground">
            {id}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
