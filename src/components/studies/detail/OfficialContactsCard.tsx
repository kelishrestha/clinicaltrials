import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";
import { EmptyState } from "./EmptyState";

interface Props {
  contacts?: ContactsLocationsModule;
}

export function OfficialContactsCard({ contacts }: Props) {
  return (
    <DetailCard id="official-contacts" title="Official Contacts">
      {!contacts?.overallOfficials?.length ? (
        <EmptyState
          title="No official contacts available"
          description="This study does not include any official contacts."
        />
      ) : (
        <div className="space-y-4">
          <p className="py-3 text-muted-foreground">
            Number of overall officials:
            <span className="text-black pl-1">{contacts.numOverallOfficials || 'N/A'}</span>
          </p>
          {contacts.overallOfficials.map((contact, index) => (
            <div
              key={`${contact.name}-${index}`}
              className="rounded-lg border border-secondary p-4"
            >
              <h3 className="font-semibold">{contact.name ?? "Unknown"}</h3>

              {contact.role && <p className="text-sm text-muted-foreground">{contact.role}</p>}
              {contact.affiliation && <p className="text-sm text-muted-foreground">{contact.affiliation}</p>}
            </div>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
