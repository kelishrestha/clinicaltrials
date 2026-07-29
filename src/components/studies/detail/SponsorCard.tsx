import type { SponsorCollaboratorsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";
import { EmptyState } from "./EmptyState";

interface Props {
  sponsor?: SponsorCollaboratorsModule;
}

export function SponsorCard({ sponsor }: Props) {
  return (
    <DetailCard id="sponsor" title="Sponsor">
      {!sponsor ? (
        <EmptyState
          title="No sponsors available"
          description="This study does not include any sponsors."
        />
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Lead Sponsor</p>

            <p className="font-medium">{sponsor?.leadSponsor.fullName ?? "Not available"}</p>
          </div>

          {sponsor?.collaborators?.length ? (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Collaborators</p>

              <ul className="list-disc pl-5">
                {sponsor.collaborators.map((item) => (
                  <li key={item.fullName}>{item.fullName}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </DetailCard>
  );
}
