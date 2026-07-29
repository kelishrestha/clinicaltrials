import type {
  ArmsInterventionsModule,
  ConditionsModule,
  ContactsLocationsModule,
  DescriptionModule,
  DesignModule,
  DocumentsModule,
  EligibilityModule,
  IdentificationModule,
  ReferencesModule,
  SponsorCollaboratorsModule,
  StatusModule,
} from "./studyModules";

export interface ProtocolSection {
  identificationModule: IdentificationModule;

  designModule: DesignModule;

  statusModule: StatusModule;

  descriptionModule?: DescriptionModule;

  conditionsModule?: ConditionsModule;

  eligibilityModule?: EligibilityModule;

  sponsorCollaboratorsModule?: SponsorCollaboratorsModule;

  armsInterventionsModule?: ArmsInterventionsModule;

  contactsLocationsModule?: ContactsLocationsModule;

  referencesModule?: ReferencesModule;

  documentsModule?: DocumentsModule;
}
