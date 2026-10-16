import type { ContactsLocationsModule } from "@/types/studyModules";
import { useState } from "react";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { InfoHeading } from "@/components/common/InfoHeading";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { roleLabel } from "@/lib/roleLabel";
import { matchesLocation } from "@/lib/filterLocations";
import { IndexedCard } from "@/components/common/IndexedCard";

interface Props {
  locations?: ContactsLocationsModule;
}

export function LocationsCard({ locations }: Props) {
  const [query, setQuery] = useState("");

  const allLocations = locations?.locations ?? [];
  const filtered = allLocations.filter((location) => matchesLocation(location, query));

  return (
    <DetailCard id="locations" title="Study Locations">
      {allLocations.length === 0 ? (
        <EmptyState
          title="No study locations available"
          description="This study does not include any study locations."
        />
      ) : (
        <div className="space-y-4">
          <p className="py-3 text-muted-foreground">
            Number of locations:
            <span className="text-black pl-1">{locations?.numLocations || 'N/A'}</span>
          </p>

          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter by city, state or zip"
            className="h-auto w-full max-w-xs rounded-md border border-secondary border-b-secondary px-3 py-1.5 text-xs md:text-xs focus-visible:border-ring"
          />

          <p className="pb-2 text-right text-xs italic text-muted-foreground">
            {filtered.length} locations listed
          </p>

          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">No locations match the filter.</p>
          ) : (
            filtered.map((location, index) => (
              <IndexedCard key={`${location.facility}-${index}`} index={index + 1}>
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

                {location.contacts?.length ? (
                  <>
                    <InfoHeading title="Location Contacts" />
                    <Table compact>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Email</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        {location.contacts.map((contact, contactIndex) => (
                          <TableRow key={`${contact.name}-${contactIndex}`}>
                            <TableCell className="font-medium text-foreground">
                              {contact.name ?? "-"}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {roleLabel(contact.role)}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {contact.phone ?? "-"}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {contact.email ?? "-"}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                ) : null}
              </IndexedCard>
            ))
          )}
        </div>
      )}
    </DetailCard>
  );
}
