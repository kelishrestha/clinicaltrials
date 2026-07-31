import type { Contact } from "@/types/study"

interface ContactProps {
  contact: Contact;
}

export function ContactDetail({ contact }: ContactProps){
  return (
    <>
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
    </>
  )
}
