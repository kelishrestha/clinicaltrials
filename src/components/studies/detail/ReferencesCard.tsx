import type { ReferencesModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";

interface Props {
  references?: ReferencesModule;
}

export function ReferencesCard({ references }: Props) {
  return (
    <DetailCard id="references" title="References">
      {!references?.references?.length ? (
        <EmptyState
          title="No references available"
          description="This study does not include any published references."
        />
      ) : (
        <ul className="space-y-4">
          {references.references.map((reference, index) => (
            <li key={reference.pmid ?? index} className="rounded-lg border p-4">
              <p>{reference.citation}</p>

              {reference.pmid && (
                <p className="mt-2 text-sm text-muted-foreground">PMID: {reference.pmid}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </DetailCard>
  );
}
