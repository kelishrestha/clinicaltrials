import type {
  ArmsInterventionsModule,
  BrowseLeafModule,
  ConditionsModule,
  ContactsLocationsModule,
  DescriptionModule,
  DesignModule,
  DocumentsModule,
  EligibilityModule,
  IdentificationModule,
  IPDSharingStatementModule,
  MiscInfoModule,
  OutcomesModule,
  OversightModule,
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

  outcomesModule?: OutcomesModule;

  oversightModule?: OversightModule;

  ipdSharingStatementModule?: IPDSharingStatementModule;

  hasResults?: boolean;
}

export interface DerivedSection {
  miscInfoModule?: MiscInfoModule;

  conditionBrowseModule?: BrowseLeafModule;

  interventionBrowseModule?: BrowseLeafModule;
}

export interface DocumentSection {
  largeDocumentModule?: DocumentsModule;
}
