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
            </div>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
