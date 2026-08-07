import { Link } from "react-router-dom";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { type Study } from "@/types/study";
import { StudyStatusBadge } from "./StudyStatusBadge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  study: Study;
}

export function StudyCard({ study }: Props) {
  const protocol = study.protocolSection;
  const centralContacts = protocol.contactsLocationsModule?.centralContacts;
  const numCentralContacts = centralContacts?.length ?? 0;
  const locations = protocol.contactsLocationsModule?.locations;
  const numLocations = locations?.length ?? 0;
  const locationEmailMissing = locations?.filter((location) =>!location.contacts?.some((contact) => !!contact.email));
  const numLocationMissing = locationEmailMissing?.length ?? 0;
  const locationsWithEmail =
  locations?.flatMap((location) =>
    (location.contacts ?? [])
      .filter((contact) => contact.email)
      .map((contact) => ({
        location: location.facility ?? location.city ?? "Unknown location",
        email: contact.email!
      }))
  ) ?? [];

  return (
    <Link to={`/studies/${protocol.identificationModule.nctId}`}>
      <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="space-y-3">
          <p className="text-xs text-muted-foreground">{protocol.identificationModule.nctId}</p>

          <Tooltip>
            <TooltipTrigger>
              <h3 className="font-semibold leading-6 line-clamp-2 text-left">{protocol.identificationModule.briefTitle}</h3>
            </TooltipTrigger>
            <TooltipContent>
              {protocol.identificationModule.briefTitle}
            </TooltipContent>
          </Tooltip>
        </CardHeader>

        <CardContent className="space-y-3">
          <StudyStatusBadge status={protocol.statusModule.overallStatus} />

          <p className="text-sm text-muted-foreground truncate">
            {protocol.conditionsModule?.conditions?.join(", ")}
          </p>


        </CardContent>
        <CardFooter className="border-t border-muted text-xs">
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground">
              <Tooltip>
                <TooltipTrigger>
                  {numCentralContacts} central contacts
                </TooltipTrigger>
                { centralContacts?.length && (
                  <TooltipContent>
                    {centralContacts?.map((contact) => contact.email)?.join(", ")}
                  </TooltipContent>
                )}
              </Tooltip>
            </p>
            <p className="text-sm text-muted-foreground">
              <Tooltip>
                <TooltipTrigger>
                  {numLocations} locations
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    {locations?.map((location, index) => (
                      <div key={index}>
                        <strong>{location.facility ?? "Unknown facility"}</strong>
                        {" → "}
                        {location.city ?? "Unknown city"}
                      </div>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            </p>
            <p className="text-sm text-muted-foreground">
              <Tooltip>
                <TooltipTrigger>
                  {locationsWithEmail.length} locations with email
                </TooltipTrigger>

                {locationsWithEmail.length > 0 && (
                  <TooltipContent>
                    <div className="space-y-1">
                      {locationsWithEmail.map(({ location, email }) => (
                        <div key={`${location}-${email}`}>
                          <strong>{location}</strong> → {email}
                        </div>
                      ))}
                    </div>
                  </TooltipContent>
                )}
              </Tooltip>
            </p>
            <p className="text-sm text-muted-foreground">
              {numLocationMissing} missing location contacts
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
