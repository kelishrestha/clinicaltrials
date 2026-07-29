import type { ContactsLocationsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";

interface Props {
  locations?: ContactsLocationsModule;
}

export function LocationsCard({ locations }: Props) {
  if (!locations?.locations?.length) return null;

  return (
    <DetailCard title="Study Locations">
      <div className="space-y-4">
        {locations.locations.map((location, index) => (
          <div key={`${location.facility}-${index}`} className="rounded-lg border p-4">
            <h3 className="font-semibold">{location.facility}</h3>

            <p className="text-sm text-muted-foreground">
              {[location.city, location.state, location.country].filter(Boolean).join(", ")}
            </p>

            {location.status && <p className="mt-2 text-sm">Status: {location.status}</p>}
          </div>
        ))}
      </div>
    </DetailCard>
  );
}
