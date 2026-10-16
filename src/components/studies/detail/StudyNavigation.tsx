import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useActiveStudySection } from "@/hooks/useActiveStudySection";
import { studyNavigation } from "@/constants/studySections";
import { type Study } from "@/types/study";

interface Props {
  study?: Study;
}

/**
 * Per-section item counts keyed by the nav item id, so the sidebar can show how
 * many entries each section holds for the current study.
 */
function sectionCounts(study?: Study): Record<string, number> {
  if (!study) {
    return {};
  }

  const protocol = study.protocolSection;
  const derived = study.derivedSection;
  const contacts = protocol.contactsLocationsModule;
  const outcomes = protocol.outcomesModule;
  const sponsors = protocol.sponsorCollaboratorsModule;

  return {
    conditions: protocol.conditionsModule?.conditions?.length ?? 0,
    sponsor: (sponsors?.leadSponsor ? 1 : 0) + (sponsors?.collaborators?.length ?? 0),
    arms: protocol.armsInterventionsModule?.armGroups?.length ?? 0,
    interventions: protocol.armsInterventionsModule?.interventions?.length ?? 0,
    outcomes:
      (outcomes?.primaryOutcomes?.length ?? 0) +
      (outcomes?.secondaryOutcomes?.length ?? 0) +
      (outcomes?.otherOutcomes?.length ?? 0),
    "central-contacts": contacts?.centralContacts?.length ?? 0,
    "official-contacts": contacts?.overallOfficials?.length ?? 0,
    locations: contacts?.locations?.length ?? 0,
    references: protocol.referencesModule?.references?.length ?? 0,
    documents: study.documentSection?.largeDocumentModule?.largeDocs?.length ?? 0,
    "conditions-mesh": derived?.conditionBrowseModule?.meshes?.length ?? 0,
    "interventions-mesh": derived?.interventionBrowseModule?.meshes?.length ?? 0,
  };
}

export function StudyNavigation({ study }: Props) {
  const activeSection = useActiveStudySection();
  const counts = sectionCounts(study);

  return (
    <nav className="pr-2">
        <Link to="/" className="mb-3 block">
          <Button variant="outline" size="xs" className="w-full justify-start">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <ul className="space-y-1">
          {studyNavigation.map((item) => {
            const active = activeSection === item.id;
            const count = counts[item.id];

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-md px-3 py-1 text-sm transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <span>{item.label}</span>

                  {count ? (
                    <span className="shrink-0 rounded-full bg-primary-button px-1.5 text-xs tabular-nums text-primary-button-foreground">
                      {count}
                    </span>
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
    </nav>
  );
}
