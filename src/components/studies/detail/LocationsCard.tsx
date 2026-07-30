import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "./EmptyState";

interface Props {
  locations?: ContactsLocationsModule;
}

export function LocationsCard({ locations }: Props) {
  return (
    <DetailCard id="locations" title="Study Locations">
      {!locations?.locations?.length ? (
        <EmptyState
          title="No study locations available"
          description="This study does not include any study locations."
        />
      ) : (
        <div className="space-y-4">
          <p className="py-3 text-muted-foreground">
            Number of locations:
            <span className="text-black pl-1">{locations.numLocations || 'N/A'}</span>
          </p>
          {locations.locations.map((location, index) => (
            <div
              key={`${location.facility}-${index}`}
              className="rounded-lg border border-secondary p-4"
            >
              <h3 className="font-semibold">{location.facility}</h3>

              <p className="text-sm text-muted-foreground">
                {[location.city, location.state, location.country].filter(Boolean).join(", ")}
              </p>

              {location.status && <p className="mt-2 text-sm">Status: {location.status}</p>}
              {location.contacts?.length && (<h3 className="font-semibold mt-8 uppercase text-muted-foreground font-heading">Location Contacts</h3>)}
              {location.contacts?.map((contact) => (
                <div
                  key={`${contact.name}-${index}`}
                  className="p-4"
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
          ))}
        </div>
      )}
    </DetailCard>
  );
}
