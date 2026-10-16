import { type ReactNode } from "react";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DetailCard } from "@/components/common/DetailCard";
import { cn } from "@/lib/utils";
import { type Study } from "@/types/study";

const ROLE_LABELS: Record<string, string> = {
  STUDY_CHAIR: "Study Chair",
  STUDY_DIRECTOR: "Study Director",
  PRINCIPAL_INVESTIGATOR: "Principal Investigator",
  SUB_INVESTIGATOR: "Sub-Investigator",
  CONTACT: "Contact",
};

function roleLabel(role?: string) {
  if (!role) {
    return "-";
  }

  return ROLE_LABELS[role] ?? role.replaceAll("_", " ");
}

interface CountLinkProps {
  value: number;
  href: string;
  className?: string;
}

/**
 * Renders a count that links to its section on the page. When the count is 0
 * there is nothing to jump to, so it renders as plain text instead of a link.
 */
function CountLink({ value, href, className }: CountLinkProps) {
  if (value <= 0) {
    return <span className={className}>{value.toLocaleString()}</span>;
  }

  return (
    <a href={href} className={cn("hover:underline", className)}>
      {value.toLocaleString()}
    </a>
  );
}

interface SummaryStatCardProps {
  label: string;
  value: number;
  href: string;
  children?: ReactNode;
}

function SummaryStatCard({ label, value, href, children }: SummaryStatCardProps) {
  return (
    <Card className="space-y-2 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="text-right">
        <CountLink value={value} href={href} className="text-3xl font-bold text-primary!" />
      </p>

      {children}
    </Card>
  );
}

interface Props {
  study: Study;
}

export function StudySummary({ study }: Props) {
  const protocol = study.protocolSection;
  const derived = study.derivedSection;

  const contacts = protocol.contactsLocationsModule;
  const locations = contacts?.locations ?? [];
  const centralContacts = contacts?.centralContacts ?? [];
  const officials = contacts?.overallOfficials ?? [];

  const conditions = protocol.conditionsModule?.conditions ?? [];
  const meshes = derived?.conditionBrowseModule?.meshes ?? [];

  const principalInvestigators = officials.filter(
    (official) => official.role === "PRINCIPAL_INVESTIGATOR",
  ).length;

  // Shown exactly as the API returns them: conditions are plain strings (no id),
  // MeSH descriptors carry an id and a term. There is no per-item condition to
  // mesh mapping in the API, so each entry is listed with its type.
  const conditionMeshRows = [
    ...conditions.map((condition) => ({
      type: "Condition",
      term: condition,
      id: "-",
    })),
    ...meshes.map((mesh) => ({
      type: "Mesh",
      term: mesh.term ?? "-",
      id: mesh.id ?? "-",
    })),
  ];

  // One row per contact (overall officials and central contacts), keeping each
  // contact's own fields together as the API nests them.
  const contactRows = [
    ...officials.map((official) => ({
      name: official.name ?? "-",
      role: official.role,
      affiliation: official.affiliation ?? "-",
      phone: "-",
      email: "-",
    })),
    ...centralContacts.map((contact) => ({
      name: contact.name ?? "-",
      role: contact.role,
      affiliation: "-",
      phone: contact.phone ?? "-",
      email: contact.email ?? "-",
    })),
  ];

  // Grouped by location: facility and city render once and span the location's
  // contact rows. A location with no contacts still gets a single placeholder row.
  const locationGroups = locations.map((location) => {
    const locationContacts = location.contacts ?? [];

    return {
      facility: location.facility ?? "Unknown facility",
      city: location.city ?? "Unknown city",
      contacts:
        locationContacts.length > 0
          ? locationContacts.map((contact) => ({
              name: contact.name ?? "-",
              role: contact.role,
              phone: contact.phone ?? "-",
              email: contact.email ?? "-",
            }))
          : [{ name: "-", role: undefined, phone: "-", email: "-" }],
    };
  });

  const subCount = "font-semibold text-foreground";
  const subLine = "text-right text-xs text-muted-foreground";

  return (
    <DetailCard id="summary" title="Summary">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <SummaryStatCard label="Condition Meshes" value={meshes.length} href="#conditions-mesh">
            <p className={subLine}>
              for{" "}
              <CountLink value={conditions.length} href="#conditions" className={subCount} />{" "}
              conditions
            </p>
          </SummaryStatCard>

          <SummaryStatCard label="Locations" value={locations.length} href="#locations" />

          <SummaryStatCard
            label="Central Contacts"
            value={centralContacts.length}
            href="#central-contacts"
          >
            <p className={subLine}>
              <CountLink
                value={principalInvestigators}
                href="#official-contacts"
                className={subCount}
              />{" "}
              principal investigators
            </p>
          </SummaryStatCard>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-primary!">
            Conditions &amp; Meshes ({conditionMeshRows.length})
          </h3>

          {conditionMeshRows.length > 0 ? (
            <Table compact>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-right">S.N.</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>MeSH ID</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {conditionMeshRows.map((row, index) => (
                  <TableRow key={`${row.type}-${row.term}-${index}`}>
                    <TableCell className="text-right text-muted-foreground tabular-nums">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{row.type}</TableCell>
                    <TableCell className="font-medium text-foreground">{row.term}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{row.id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground">No conditions or meshes available.</p>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-primary!">
            Study Contacts ({contactRows.length})
          </h3>

          {contactRows.length > 0 ? (
            <Table compact>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-right">S.N.</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Affiliation</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {contactRows.map((row, index) => {
                  const isPi = row.role === "PRINCIPAL_INVESTIGATOR";
                  const cell = cn(
                    "text-muted-foreground",
                    isPi && "font-semibold text-foreground",
                  );

                  return (
                    <TableRow key={`${row.name}-${index}`}>
                      <TableCell className="text-right text-muted-foreground tabular-nums">
                        {index + 1}
                      </TableCell>
                      <TableCell
                        className={cn("font-medium text-foreground", isPi && "font-semibold")}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell className={cell}>{roleLabel(row.role)}</TableCell>
                      <TableCell className={cell}>{row.affiliation}</TableCell>
                      <TableCell className={cell}>{row.phone}</TableCell>
                      <TableCell className={cell}>{row.email}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground">No study contacts provided.</p>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-primary!">
            Study Locations ({locations.length})
          </h3>

          {locationGroups.length > 0 ? (
            <Table compact>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-right">S.N.</TableHead>
                  <TableHead>Facility</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {locationGroups.flatMap((location, locationIndex) =>
                  location.contacts.map((contact, contactIndex) => {
                    const isPi = contact.role === "PRINCIPAL_INVESTIGATOR";
                    const cell = cn(
                      "text-muted-foreground",
                      isPi && "font-semibold text-foreground",
                    );

                    return (
                      <TableRow key={`${location.facility}-${locationIndex}-${contactIndex}`}>
                        {contactIndex === 0 && (
                          <>
                            <TableCell
                              rowSpan={location.contacts.length}
                              className="text-right text-muted-foreground tabular-nums"
                            >
                              {locationIndex + 1}
                            </TableCell>
                            <TableCell
                              rowSpan={location.contacts.length}
                              className="font-medium text-foreground"
                            >
                              {location.facility}
                            </TableCell>
                            <TableCell
                              rowSpan={location.contacts.length}
                              className="text-muted-foreground"
                            >
                              {location.city}
                            </TableCell>
                          </>
                        )}
                        <TableCell className={cell}>{contact.name}</TableCell>
                        <TableCell className={cell}>{roleLabel(contact.role)}</TableCell>
                        <TableCell className={cell}>{contact.phone}</TableCell>
                        <TableCell className={cell}>{contact.email}</TableCell>
                      </TableRow>
                    );
                  }),
                )}
              </TableBody>
            </Table>
          ) : (
            <p className="text-sm text-muted-foreground">No locations provided.</p>
          )}
        </div>
      </div>
    </DetailCard>
  );
}
