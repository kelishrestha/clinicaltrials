export interface SearchStudiesParams {
  query?: string;
  pageSize?: number;
  pageToken?: string;
}

export interface Study {
  protocolSection: {
    identificationModule: {
      nctId: string;
      briefTitle: string;
    };

    statusModule: {
      overallStatus: string;
    };

    conditionsModule?: {
      conditions: string[];
    };
  };
}

export interface StudiesResponse {
  studies: Study[];
  nextPageToken?: string;
}
