export interface MetadataNode {
  name: string;
  title?: string;
  type?: string;
  sourceType?: string;
  description?: string;
  isEnum?: boolean;
  children?: MetadataNode[];
}

export interface StatField {
  label: string;
  value: string;
  module: string;
  type?: string;
  description?: string;
}

export interface StudyStatField {
  label: string;
  value: string;
  module: string;
  type?: string;
  sourceType?: string;
  description?: string;
  isEnum?: boolean;
}
