import type { DocumentsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { formatDate } from "@/lib/formatters/formatDate";
import { formatBoolean } from "@/lib/formatters/formatBoolean";

interface Props {
  documents?: DocumentsModule;
}

export function DocumentsCard({ documents }: Props) {
  const docs = documents?.largeDocs;

  return (
    <DetailCard id="documents" title="Study Documents">
      {!docs?.length ? (
        <EmptyState
          title="No documents available"
          description="This study does not include any published documents."
        />
      ) : (
        <div className="space-y-3">
          {docs.map((doc, index) => (
            <div
              key={`${doc.label}-${index}`}
              className="rounded-lg border border-secondary p-4 space-y-2"
            >

              {doc.label && (<p>{doc.label}</p>)}
              {doc.filename && (<p>{doc.filename}</p>)}
              {doc.size && (<p className="flex gap-2"><span className="text-muted-foreground">Size:</span>{doc.size}</p>)}
              {doc.label && (<p className="flex gap-2"><span className="text-muted-foreground">Uploaded date:</span>{formatDate(doc.uploadDate)}</p>)}
              {doc.typeAbbrev && (<p className="flex gap-2"><span className="text-muted-foreground">Abbreviation:</span>{doc.typeAbbrev}</p>)}
              {doc.hasProtocol && (<p className="flex gap-2"><span className="text-muted-foreground">Has Protocol:</span>{formatBoolean(doc.hasProtocol)}</p>)}
              {doc.hasSap && (<p className="flex gap-2"><span className="text-muted-foreground">Has SAP:</span>{formatBoolean(doc.hasSap)}</p>)}
              {doc.hasIcf && (<p className="flex gap-2"><span className="text-muted-foreground">Has ICF:</span>{formatBoolean(doc.hasIcf)}</p>)}
            </div>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
