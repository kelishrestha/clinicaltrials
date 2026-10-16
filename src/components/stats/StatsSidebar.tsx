import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { StatFieldPicker } from "./StatsFieldPicker";
import { SelectedFields } from "./SelectedFields";

export function StatsSidebar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  return (
    <aside className="lg:sticky lg:top-8">
      <Card className="space-y-5 p-5">
        <SelectedFields />

        {isDesktop ? (
          <StatFieldPicker />
        ) : (
          <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="space-y-4"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-secondary px-4 py-3 text-sm font-medium">
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 opacity-70" />
                Browse fields
              </span>

              <ChevronDown
                className={`h-4 w-4 opacity-60 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <StatFieldPicker />
            </CollapsibleContent>
          </Collapsible>
        )}
      </Card>
    </aside>
  );
}
