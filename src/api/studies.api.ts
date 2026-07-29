import { api } from "./client";

export const getStudy = async (nctId: string) => {
  const { data } = await api.get(`/studies/${nctId}`);
  return data;
};
