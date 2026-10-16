import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { ContactDetail } from "./ContactDetail";
import { IndexedCard } from "@/components/common/IndexedCard";

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
            <IndexedCard key={`${contact.name}-${index}`} index={index + 1}>
              <ContactDetail contact={contact} />
            </IndexedCard>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
