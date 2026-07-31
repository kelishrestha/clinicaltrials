import type { IdentificationModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { InfoRow } from "@/components/common/InfoRow";
import { InfoHeading } from "@/components/common/InfoHeading";
import { InfoMarkup } from "@/components/common/InfoMarkup";

interface Props {
  identification: IdentificationModule;
}

export function IdentificationCard({ identification }: Props) {
  return (
    <DetailCard id="identification" title="Study Identification">
      <div>
        {identification.briefTitle && (
          <InfoMarkup title="Brief Title" value={identification.briefTitle} />
        )}

        {identification.officialTitle && (
          <InfoMarkup title="Official Title" value={identification.officialTitle} />
        )}
        <InfoRow label="NCT ID" value={identification.nctId} />
        <InfoRow label="NCT ID Aliases" value={identification.nctIdAliases} />
        <InfoRow label="Acronym" value={identification.acronym} />

        <InfoHeading title="Organization Info" />

        <InfoRow label="Study ID" value={identification.orgStudyIdInfo?.id} />
        <InfoRow label="Study Type" value={identification.orgStudyIdInfo?.type} />
        <InfoRow label="Study Link" value={identification.orgStudyIdInfo?.link} />
        <InfoRow label="Name" value={identification.organization?.fullName} />
        <InfoRow label="Class" value={identification.organization?.class} />

        {!!identification.secondaryIdInfos?.length && (
          <div className="space-y-4 my-3">
            <InfoHeading title="Secondary ID Information" />

            <div className="space-y-3">
              {identification.secondaryIdInfos.map((item, index) => (
                <div key={`${item.id}-${index}`} className="rounded-md border border-secondary p-4">
                  <InfoRow label="Identifier" value={item.id} />
                  <InfoRow label="Type" value={item.type} />
                  <InfoRow label="Domain" value={item.domain} />
                  <InfoRow label="Link" value={item.link} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DetailCard>
  );
}
