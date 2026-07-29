import { useParams } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import { useStudy } from "../hooks/useStudy";

import { StudyHeader } from "@/components/studies/detail/StudyHeader";
import { StatusCard } from "@/components/studies/detail/StatusCard";
import { SponsorCard } from "@/components/studies/detail/SponsorCard";
import { EligibilityCard } from "@/components/studies/detail/EligibilityCard";
import { ConditionsCard } from "@/components/studies/detail/ConditionsCard";
import { ArmsCard } from "@/components/studies/detail/ArmsCard";
import { ContactsCard } from "@/components/studies/detail/ContactsCard";
import { LocationsCard } from "@/components/studies/detail/LocationsCard";
import { ReferencesCard } from "@/components/studies/detail/ReferencesCard";
import { DocumentsCard } from "@/components/studies/detail/DocumentsCard";
import { DesignCard } from "@/components/studies/detail/DesignCard";
import { DescriptionCard } from "@/components/studies/detail/DescriptionCard";
import { StudyNavigation } from "@/components/studies/detail/StudyNavigation";
import { useFloatingSidebar } from "@/hooks/useFloatingSidebar";

export default function StudyDetailsPage() {
  const { nctId = "" } = useParams();
  const { sidebarRef, containerRef, contentRef, style } = useFloatingSidebar();

  const { data, isLoading, isError } = useStudy(nctId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Unable to load study.</div>;
  }

  const protocol = data.protocolSection;

  return (
    <AppLayout>
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside ref={containerRef} className="relative hidden lg:block w-65">
            <div ref={sidebarRef} style={style}>
              <StudyNavigation />
            </div>
          </aside>
          <main ref={contentRef} className="min-w-0 space-y-6">
            <StudyHeader study={data} />

            <StatusCard status={protocol.statusModule} />

            <SponsorCard sponsor={protocol.sponsorCollaboratorsModule} />

            <DesignCard design={protocol.designModule} />

            <DescriptionCard description={protocol.descriptionModule} />

            <ConditionsCard conditions={protocol.conditionsModule} />

            <EligibilityCard eligibility={protocol.eligibilityModule} />

            <ArmsCard arms={protocol.armsInterventionsModule} />

            <ContactsCard contacts={protocol.contactsLocationsModule} />

            <LocationsCard locations={protocol.contactsLocationsModule} />

            <ReferencesCard references={protocol.referencesModule} />

            <DocumentsCard documents={protocol.documentsModule} />
          </main>
        </div>
      </div>
    </AppLayout>
  );
}
