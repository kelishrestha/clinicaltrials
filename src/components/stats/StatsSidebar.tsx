import { Card } from "@/components/ui/card";

import { StatFieldPicker } from "./StatsFieldPicker";
import { SelectedFields } from "./SelectedFields";


export function StatsSidebar() {
  return (
    <aside className="sticky top-8">
      <Card className="space-y-5 p-5">

        <SelectedFields />

        <StatFieldPicker />

      </Card>
    </aside>
  );
}
