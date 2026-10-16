import type { ReferencesModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { IndexedCard } from "@/components/common/IndexedCard";

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
            <li key={reference.pmid ?? index}>
              <IndexedCard index={index + 1}>
                <p>{reference.citation}</p>

                {reference.pmid && (
                  <p className="mt-2 text-sm text-muted-foreground">PMID: {reference.pmid}</p>
                )}
              </IndexedCard>
            </li>
          ))}
        </ul>
      )}
    </DetailCard>
  );
}
