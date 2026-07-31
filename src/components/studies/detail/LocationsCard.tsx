import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { InfoHeading } from "@/components/common/InfoHeading";
import { ContactDetail } from "./ContactDetail";

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
              <div className="mb-3">
                <h3 className="font-semibold">{location.facility}</h3>

                <p className="text-sm text-muted-foreground">
                  {[location.city, location.state, location.country].filter(Boolean).join(", ")}
                </p>

                {location.zip && (<p className="mt-2 text-sm text-muted-foreground">ZipCode: <span className="text-black">{location.zip}</span></p>)}

                {location.status && <p className="mt-2 text-sm text-muted-foreground">Status: <span className="text-black">{location.status}</span></p>}
                {location.geoPoint && location.geoPoint.lat && (
                  <div>
                    <p className="mt-2 text-sm text-muted-foreground">Latitude: <span className="text-black">{location.geoPoint?.lat}</span></p>
                    <p className="mt-2 text-sm text-muted-foreground">Longitude: <span className="text-black">{location.geoPoint?.lon}</span></p>
                  </div>
                )}
              </div>
              {location.contacts?.length && (<InfoHeading title="Location Contacts" />)}
              {location.contacts?.map((contact) => (
                <div
                  key={`${contact.name}-${index}`}
                  className="p-4"
                >
                  <ContactDetail contact={contact} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
