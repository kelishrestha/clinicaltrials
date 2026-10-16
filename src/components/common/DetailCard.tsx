import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DetailCardProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export function DetailCard({ id, title, children }: DetailCardProps) {
  return (
    <Card id={id} data-study-section={id ? "" : undefined} className="scroll-mt-24 gap-4 py-4">
      <CardHeader className="border-b pb-4!">
        <CardTitle className="text-primary!">{title}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
