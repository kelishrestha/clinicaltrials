export type StudyStats = {
  averageSizeBytes: number
  largestStudies: [{
    id: string
    sizeBytes: number
  }]
  percentiles: {}
  ranges: [{
    sizeRange: string
    studiesCount: number
  }]
  totalStudies: number
}

export type StudyFieldValues = {
  field: string;
  missingStudiesCount: number
  piece: string;
  topValues: {
    studiesCount: number;
    value: string
  }[];
  type: string;
  uniqueValuesCount: number
}

