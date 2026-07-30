import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useStudyFields } from "@/hooks/useStudyFields";
import { useStudyStatsStore } from "@/stores/studyStats.store";

import { groupFields } from "@/lib/metadata/groupFields";
import { StatFieldGroup } from "./StatsFieldGroup";



export function StatFieldPicker() {
  const [search, setSearch] = useState("");

  const { fields, isLoading } =
    useStudyFields();

  const selectedFields =
    useStudyStatsStore(
      (state) => state.search.fields,
    );

  const setFields =
    useStudyStatsStore(
      (state) => state.setFields,
    );

  const filtered = useMemo(() => {
    if (!search) {
      return fields;
    }

    const value =
      search.toLowerCase();

    return fields.filter(
      (field) =>
        field.label
          .toLowerCase()
          .includes(value) ||
        field.value
          .toLowerCase()
          .includes(value) ||
        field.module
          .toLowerCase()
          .includes(value),
    );
  }, [fields, search]);

  const grouped =
    useMemo(
      () =>
        groupFields(filtered),
      [filtered],
    );

  if (isLoading) {
    return (
      <p>Loading fields...</p>
    );
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search fields..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value,
          )
        }
      />

      <ScrollArea className="h-162.5">
        <div className="space-y-4">
          {Object.entries(
            grouped,
          ).map(
            ([module, fields]) => (
              <StatFieldGroup
                key={module}
                title={module}
                fields={fields}
                selected={
                  selectedFields || []
                }
                onToggle={(
                  value,
                ) => {
                  if (
                    selectedFields && selectedFields.includes(
                      value,
                    )
                  ) {
                    setFields(
                      selectedFields.filter(
                        (
                          field,
                        ) =>
                          field !==
                          value,
                      ),
                    );
                  } else {
                    setFields([
                      ...selectedFields || [],
                      value,
                    ]);
                  }
                }}
              />
            ),
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
