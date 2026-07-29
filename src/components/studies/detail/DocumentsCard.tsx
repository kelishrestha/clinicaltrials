import type { DocumentsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";



interface Props {
  documents?: DocumentsModule;
}

export function DocumentsCard({
  documents,
}: Props) {
  const docs =
    documents?.largeDocumentModule?.documents;

  if (!docs?.length) {
    return null;
  }

  return (
    <DetailCard title="Study Documents">
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
    </DetailCard>
  );
}
