import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export function StatsHeader() {
  return (
    <header className="space-y-2">
      <Link
        to="/"
        className="bg-secondary p-2 mb-3 rounded-sm inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-primary!">
        Study Statistics
      </h1>

      <p className="text-muted-foreground">
        Explore distinct values for ClinicalTrials.gov metadata fields.
      </p>
    </header>
  );
}
