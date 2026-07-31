import type { SponsorCollaboratorsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { FlexRow } from "@/components/common/FlexRow";

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
            <FlexRow label="Lead Sponsor" value={
              <>
                <p className="font-medium">{sponsor?.leadSponsor.name ?? "Not available"}</p>
                { sponsor.leadSponsor.class && (<span className="text-xs">{sponsor.leadSponsor.class}</span>)}
              </>
            } />

          </div>

          {sponsor?.collaborators?.length ? (
              <FlexRow label="Collaborators" value={
                <ul className="list-disc pl-5">
                  {sponsor.collaborators.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              }
              />
          ) : null}

          {sponsor?.responsibleParty && (
            <FlexRow label="Responsible Party" value={
              <>
                <p className="font-medium">{sponsor?.responsibleParty.investigatorFullName ?? ""}</p>
                <p className="text-xs flex flex-col">
                  { sponsor.responsibleParty.type && (<span>{sponsor.responsibleParty.type}</span>)}
                  { sponsor.responsibleParty.investigatorTitle && (<span>{sponsor.responsibleParty.investigatorTitle}</span>)}
                  { sponsor.responsibleParty.investigatorAffiliation && (<span>{sponsor.responsibleParty.investigatorAffiliation}</span>)}
                  { sponsor.responsibleParty.oldNameTitle && (<span>Old name: {sponsor.responsibleParty.oldNameTitle}</span>)}
                  { sponsor.responsibleParty.oldOrganization && (<span>Old Organization: {sponsor.responsibleParty.oldOrganization}</span>)}
                </p>
              </>
            }
            />
          )}
        </div>
      )}
    </DetailCard>
  );
}
