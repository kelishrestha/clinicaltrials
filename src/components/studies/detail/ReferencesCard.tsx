import type { ReferencesModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";

interface Props {
  references?: ReferencesModule;
}

export function ReferencesCard({ references }: Props) {
  if (!references?.references?.length) {
    return null;
  }

  return (
    <DetailCard id="references" title="References">
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
    </DetailCard>
  );
}
