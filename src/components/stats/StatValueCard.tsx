import { Card } from "@/components/ui/card";

interface Props {
  value: {
    value: string;
    studiesCount: number;
  };
}

export function StatValueCard({
  value,
}: Props) {
  return (
    <Card className="space-y-2 p-4">
      <p
        className="text-sm font-medium"
        title={value.value}
      >
        {value.value || "(Empty)"}
      </p>

      <p className="text-3xl text-right font-bold">
        {value.studiesCount.toLocaleString()}
      </p>

      <p className="text-xs text-right text-muted-foreground">
        Studies
      </p>
    </Card>
  );
}
