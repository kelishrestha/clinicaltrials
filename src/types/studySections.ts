import type {
  ArmsInterventionsModule,
  ConditionsModule,
  ContactsLocationsModule,
  DescriptionModule,
  EligibilityModule,
  IdentificationModule,
  SponsorCollaboratorsModule,
  StatusModule,
} from "./studyModules";

export interface ProtocolSection {
  identificationModule: IdentificationModule;

  statusModule: StatusModule;

  descriptionModule?: DescriptionModule;

  conditionsModule?: ConditionsModule;

  eligibilityModule?: EligibilityModule;

  sponsorCollaboratorsModule?: SponsorCollaboratorsModule;

  armsInterventionsModule?: ArmsInterventionsModule;

  contactsLocationsModule?: ContactsLocationsModule;
}
