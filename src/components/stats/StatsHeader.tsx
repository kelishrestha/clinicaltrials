import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function StatsHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <h1
          className="text-4xl font-bold leading-tight text-primary!"
          style={{ marginBottom: "0px" }}
        >
          Study Statistics
        </h1>

        <p className="text-xs italic text-muted-foreground">
          Explore distinct values for ClinicalTrials.gov metadata fields.
        </p>
      </div>

      <Link to="/">
        <Button variant="outline" size="xs">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </header>
  );
}
