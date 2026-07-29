import { useParams } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import { useStudy } from "../hooks/useStudy";

import { StudyHeader } from "@/components/studies/detail/StudyHeader";
import { StatusCard } from "@/components/studies/detail/StatusCard";
import { SponsorCard } from "@/components/studies/detail/SponsorCard";
import { EligibilityCard } from "@/components/studies/detail/EligibilityCard";
import { DescriptionCard } from "@/components/studies/detail/DescriptionCard";
import { ConditionsCard } from "@/components/studies/detail/ConditionsCard";
import { ArmsCard } from "@/components/studies/detail/ArmsCard";
import { ContactsCard } from "@/components/studies/detail/ContactsCard";
import { LocationsCard } from "@/components/studies/detail/LocationsCard";
import { ReferencesCard } from "@/components/studies/detail/ReferencesCard";
import { DocumentsCard } from "@/components/studies/detail/DocumentsCard";
import { DesignCard } from "@/components/studies/detail/DesignCard";

export default function StudyDetailsPage() {
  const { nctId = "" } = useParams();

  const {
    data,
    isLoading,
    isError,
  } = useStudy(nctId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Unable to load study.</div>;
  }

  const protocol = data.protocolSection;

  return (
    <AppLayout>
      <div className="space-y-6">
        <StudyHeader study={data} />

        <div className="grid gap-6 lg:grid-cols-2">
          <StatusCard
            status={protocol.statusModule}
          />

          <SponsorCard
            sponsor={
              protocol.sponsorCollaboratorsModule
            }
          />
          <DesignCard
            design={protocol.designModule}
          />

          {/* <DescriptionCard
            description={protocol.descriptionModule}
          /> */}

          <ConditionsCard
            conditions={protocol.conditionsModule}
          />

          <EligibilityCard
            eligibility={
              protocol.eligibilityModule
            }
          />
          <ArmsCard
            arms={protocol.armsInterventionsModule}
          />

          <ContactsCard
            contacts={protocol.contactsLocationsModule}
          />

          <LocationsCard
            locations={protocol.contactsLocationsModule}
          />

          <ReferencesCard
            references={protocol.referencesModule}
          />

          <DocumentsCard
            documents={protocol.documentsModule}
          />

        </div>
      </div>
    </AppLayout>
  );
}
