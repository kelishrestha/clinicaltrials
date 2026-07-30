import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";
import { EmptyState } from "./EmptyState";

interface Props {
  contacts?: ContactsLocationsModule;
}

export function ContactsCard({ contacts }: Props) {
  return (
    <DetailCard id="central-contacts" title="Central Contacts">
      {!contacts?.centralContacts?.length ? (
        <EmptyState
          title="No central contacts available"
          description="This study does not include any central contacts."
        />
      ) : (
        <div className="space-y-4">
          <p className="py-3 text-muted-foreground">
            Number of central contacts:
            <span className="text-black pl-1">{contacts.numCentralContacts || 'N/A'}</span>
          </p>
          {contacts.centralContacts.map((contact, index) => (
            <div
              key={`${contact.name}-${index}`}
              className="rounded-lg border border-secondary p-4"
            >
              <h3 className="font-semibold">{contact.name ?? "Unknown"}</h3>

              {contact.role && <p className="text-sm text-muted-foreground">{contact.role}</p>}

              <div className="mt-3 space-y-1 text-sm">
                {contact.phone && (
                  <p>
                    <strong>Phone:</strong> {contact.phone}
                    {contact.phoneExt ? ` ext. ${contact.phoneExt}` : ""}
                  </p>
                )}

                {contact.email && (
                  <p>
                    <strong>Email:</strong> {contact.email}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
