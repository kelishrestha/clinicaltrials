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
            <Tooltip>
              <TooltipTrigger>
                <span className="text-xs">{protocol.conditionsModule?.conditions?.length ?? 0} conditions</span>
              </TooltipTrigger>
              {protocol.conditionsModule?.conditions && protocol.conditionsModule?.conditions.length > 0 &&(
                <TooltipContent>
                  {protocol.conditionsModule?.conditions?.join(", ")}
                </TooltipContent>
              )}
            </Tooltip>
          </p>


        </CardContent>
        <CardFooter className="border-t border-muted text-xs text-muted-foreground">
          <div className="grid grid-cols-2 gap-y-2">
            <div className="flex flex-col items-end">
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-2xl text-primary font-semibold">
                    {numCentralContacts}
                  </span>
                </TooltipTrigger>
                { centralContacts?.length && (
                  <TooltipContent>
                    {centralContacts?.map((contact) => contact.email)?.join(", ")}
                  </TooltipContent>
                )}
              </Tooltip>
              central contacts
            </div>
            <div className="flex flex-col items-end">
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-2xl text-primary font-semibold">
                    {numLocations}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    {locations?.map((location, index) => (
                      <div key={index}>
                        <strong>{location.facility ?? "Unknown facility"}</strong>
                        {" in city:  "}
                        {location.city ?? "Unknown city"}
                      </div>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
              locations
            </div>
            <div className="flex flex-col items-end">
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-2xl text-primary font-semibold">
                    {locationsWithEmail.length}
                  </span>
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
              <span className="text-right">
                locations having email
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl text-primary font-semibold">
                {numLocationMissing}
              </span>
              <span className="text-right">
                missing location contacts
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
