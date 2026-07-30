import { apiClient } from "./client";

export const metadataRepository = {
  async getStudyMetadata() {
    const { data } = await apiClient.get(
      "/studies/metadata",
    );

    return data;
  },
};
