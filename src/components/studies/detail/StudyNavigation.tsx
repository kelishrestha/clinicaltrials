import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveStudySection } from "@/hooks/useActiveStudySection";
import { studyNavigation } from "@/constants/studySections";
import { MobileStudyNavigation } from "./MobileStudyNavigation";

export function StudyNavigation() {
  const activeSection = useActiveStudySection();

  return (
    <>
      {/* Desktop */}
      <nav className="max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
        <Link
          to="/"
          className="bg-secondary w-full p-2 mb-3 rounded-sm inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Studies
        </Link>
        <ul className="space-y-1">
          {studyNavigation.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile */}
      <MobileStudyNavigation activeSection={activeSection} />
    </>
  );
}
