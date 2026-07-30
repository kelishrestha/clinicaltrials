import type { DocumentsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "./EmptyState";

interface Props {
  documents?: DocumentsModule;
}

export function DocumentsCard({ documents }: Props) {
  const docs = documents?.largeDocumentModule?.documents;

  return (
    <DetailCard id="documents" title="Study Documents">
      {!docs?.length ? (
        <EmptyState
          title="No documents available"
          description="This study does not include any published documents."
        />
      ) : (
        <div className="space-y-3">
          {docs.map((doc) => (
            <a
              key={doc.url}
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg border p-4 hover:bg-muted"
            >
              {doc.label}
            </a>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
