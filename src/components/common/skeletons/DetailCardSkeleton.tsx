import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { InfoRowSkeleton } from "./InfoRowSkeleton";

interface Props {
  rows?: number;
}

export function DetailCardSkeleton({
  rows = 6,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-7 w-52" />
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: rows }).map((_, index) => (
            <InfoRowSkeleton key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
