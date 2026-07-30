import type { SponsorCollaboratorsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "./EmptyState";

interface Props {
  sponsor?: SponsorCollaboratorsModule;
}

export function SponsorCard({ sponsor }: Props) {
  return (
    <DetailCard id="sponsor" title="Sponsors & Collaborators">
      {!sponsor ? (
        <EmptyState
          title="No sponsors available"
          description="This study does not include any sponsors."
        />
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Lead Sponsor</p>

            <p className="font-medium">{sponsor?.leadSponsor.name ?? "Not available"}</p>
            { sponsor.leadSponsor.class && (<span className="text-xs">{sponsor.leadSponsor.class}</span>)}
          </div>

          {sponsor?.collaborators?.length ? (
            <div>
              <p className="text-sm text-muted-foreground mb-2">Collaborators</p>

              <ul className="list-disc pl-5">
                {sponsor.collaborators.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {sponsor?.responsibleParty && (
            <div>
              <p className="text-sm text-muted-foreground">Responsible Party</p>

              <p className="font-medium">{sponsor?.responsibleParty.investigatorFullName ?? ""}</p>
              <p className="text-xs flex flex-col">
                { sponsor.responsibleParty.type && (<span>{sponsor.responsibleParty.type}</span>)}
                { sponsor.responsibleParty.investigatorTitle && (<span>{sponsor.responsibleParty.investigatorTitle}</span>)}
                { sponsor.responsibleParty.investigatorAffiliation && (<span>{sponsor.responsibleParty.investigatorAffiliation}</span>)}
              </p>
            </div>
          )}
        </div>
      )}
    </DetailCard>
  );
}
