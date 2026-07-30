import type { IdentificationModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { InfoRow } from "@/components/common/InfoRow";

interface Props {
  identification: IdentificationModule;
}

export function IdentificationCard({ identification }: Props) {
  return (
    <DetailCard id="identification" title="Study Identification">
      <div>
        <InfoRow label="NCT ID" value={identification.nctId} />

        <InfoRow label="Acronym" value={identification.acronym} />

        <InfoRow label="Organization Study ID" value={identification.orgStudyIdInfo?.id} />

        <InfoRow label="Organization" value={identification.organization?.fullName} />

        <InfoRow label="Organization Class" value={identification.organization?.class} />

        {identification.briefTitle && (
          <div className="space-y-2 my-3">
            <h3 className="font-semibold text-muted-foreground">Brief Title</h3>

            <pre className="whitespace-pre-wrap font-sans">{identification.briefTitle}</pre>
          </div>
        )}

        {identification.officialTitle && (
          <div className="space-y-2 my-3">
            <h3 className="font-semibold text-muted-foreground">Official Title</h3>

            <pre className="whitespace-pre-wrap font-sans">{identification.officialTitle}</pre>
          </div>
        )}

        {!!identification.secondaryIdInfos?.length && (
          <div className="space-y-4 my-3">
            <h3 className="font-semibold text-muted-foreground">Secondary IDs</h3>

            <div className="space-y-3">
              {identification.secondaryIdInfos.map((item, index) => (
                <div key={`${item.id}-${index}`} className="rounded-md border border-secondary p-4">
                  <InfoRow label="Identifier" value={item.id} />

                  <InfoRow label="Type" value={item.type} />

                  <InfoRow label="Domain" value={item.domain} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DetailCard>
  );
}
