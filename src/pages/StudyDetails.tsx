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
import { OutcomeCard } from "@/components/studies/detail/OutcomeCard";
import { IdentificationCard } from "@/components/studies/detail/IdentificationCard";
import { OfficialContactsCard } from "@/components/studies/detail/OfficialContactsCard";
import { StudySummary } from "@/components/studies/detail/StudySummary";
import { StudyDetailSkeleton } from "@/components/studies/skeletons/StudyDetailSkeleton";
import { ApiResponseCard } from "@/components/common/ApiResponseCard";
import { MeshBrowseModuleCard } from "@/components/studies/detail/MeshBrowseModuleCard";
import { IpdSharingCard } from "@/components/studies/detail/IpdSharingCard";
import { OversightCard } from "@/components/studies/detail/OversightCard";

export default function StudyDetailsPage() {
  const { nctId = "" } = useParams();

  const { data, isLoading, isError } = useStudy(nctId);

  if (isLoading) {
    return (
      <AppLayout>
        <StudyDetailSkeleton />
      </AppLayout>
    );
  }

  if (isError || !data) {
    return <div>Unable to load study.</div>;
  }

  const protocol = data.protocolSection;
  const document = data.documentSection;
  const derivedSection = data.derivedSection;

  return (
    <AppLayout>
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden lg:block w-65">
            <div className="sticky top-8">
              <StudyNavigation />
            </div>
          </aside>
          <main className="min-w-0 space-y-6">
            <StudyHeader study={data} />

            <StudySummary study={data} />

            <IdentificationCard identification={protocol.identificationModule} />

            <DescriptionCard description={protocol.descriptionModule} />

            <StatusCard status={protocol.statusModule} />

            <SponsorCard sponsor={protocol.sponsorCollaboratorsModule} />

            <DesignCard design={protocol.designModule} />

            <ConditionsCard conditions={protocol.conditionsModule} />

            <EligibilityCard eligibility={protocol.eligibilityModule} />

            <ArmsCard arms={protocol.armsInterventionsModule} />

            <OutcomeCard outcomes={protocol.outcomesModule} />

            <ContactsCard contacts={protocol.contactsLocationsModule} />

            <OfficialContactsCard contacts={protocol.contactsLocationsModule} />

            <LocationsCard locations={protocol.contactsLocationsModule} />

            <ReferencesCard references={protocol.referencesModule} />

            <DocumentsCard documents={document?.largeDocumentModule} />

            <OversightCard data={protocol.oversightModule || {}} />

            <IpdSharingCard data={protocol.ipdSharingStatementModule || {}} />

            <MeshBrowseModuleCard type="conditions" browseLeafModule={derivedSection.conditionBrowseModule || {}} />

            <MeshBrowseModuleCard type="interventions" browseLeafModule={derivedSection.interventionBrowseModule || {}} />

            <ApiResponseCard data={data} />
          </main>
        </div>
      </div>
    </AppLayout>
  );
}
