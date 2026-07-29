import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DetailCardProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export function DetailCard({ id, title, children }: DetailCardProps) {
  return (
    <Card id={id} data-study-section className="scroll-mt-24">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
