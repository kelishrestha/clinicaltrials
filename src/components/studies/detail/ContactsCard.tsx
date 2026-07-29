import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";

interface Props {
  contacts?: ContactsLocationsModule;
}

export function ContactsCard({ contacts }: Props) {
  if (!contacts?.centralContacts?.length) {
    return null;
  }

  return (
    <DetailCard id="contacts" title="Central Contacts">
      <div className="space-y-4">
        {contacts.centralContacts.map((contact, index) => (
          <div key={`${contact.name}-${index}`} className="rounded-lg border p-4">
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
    </DetailCard>
  );
}
